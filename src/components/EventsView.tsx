"use client"
import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaClock, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import events from "@/store/events.json";
import CalendarView from "@/components/CalendarView";
import EventTable from "@/components/EventTable";
import moment from 'moment';
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";


export interface EventItem {
  id: number;
  category: string;
  title: string;
  description: string;
  start: Date;
  end: Date;
  location: string;
  link: string;
  image: string;
}

const EventCard: React.FC<EventItem> = ({
  title,
  description,
  location,
  start,
  link,
  image,
}) => {
  const [t, i18n] = useTranslation("global");

  // Adicione esta linha para obter a tradução do título
  const translatedTitle = t(`events-card.${title.toLowerCase()}`) || title;
  const translatedDescription = t(`events-card.${description.toLowerCase()}`) || description;
  const translatedLocation = t(`events-card.${location.toLowerCase()}`) || location;

  // Configurando o locale do moment toda vez que o idioma muda
  moment.locale(i18n.language)
  
  return(
  <div className="md:w-full h-auto md:h-[250px] flex shadow-md rounded-md" style={{ maxHeight: "500px" }}>
    <div className="w-0 md:w-full h-full rounded-l-md">
      <img
        src={image}
        alt=""
        className="rounded-l-md"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          border: "2px solid #895370",
        }}
      />
    </div>
    <div className="flex flex-col flex-grow">
      <div className="flex flex-col md:w-[500px] px-3 flex-grow">
        <div className="flex-none justify-center text-center font-thin text-pink-800 text-xl">
          {translatedTitle}
        </div>
        <div className="p-2 font-thin h-max grow">{translatedDescription}</div>
        <div className="px-2 flex justify-between">
          <div className="font-thin flex w-full">
            <FaMapMarkerAlt className="w-6 h-6 mr-2" /> {translatedLocation}
          </div>
          <div className="font-thin w-full justify-end flex">
            <FaClock className="w-6 h-6 mr-2" />
            {moment(start).format("LLL")}
          </div>
        </div>
      </div>
      <div className="mt-auto ">
        <Link href={link} target="_blank" rel="noopener noreferrer">
        <button 
        className="btn-ghost w-full rounded-br-md ease-in-out duration-200 mt-3 bg-mediumpink text-white hover:bg-lightpink hover:text-darkpink">
            {t("events-card.more")}
        </button>
        </Link>
      </div>
    </div>
  </div>
)};



const eventsExample: EventItem[] = events as unknown as EventItem[];

// Parse the date strings to Date objects
eventsExample.forEach((event) => {
  event.start = new Date(event.start);
  event.end = new Date(event.end);
});

const EventsView = () => {

  const [t, i18n] = useTranslation("global");

  // Estados para armazenar a página atual
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  // Quantidade de eventos a serem exibidos por página
  const eventsPerPage = 5;

  // Sort the events based on the start date (from the most recent to the oldest)
  eventsExample.sort((a, b) => a.start.getTime() - b.start.getTime());
  
  // Criar uma cópia ordenada do array eventsExample
  const sortedEvents = eventsExample.slice().sort((a, b) => b.start.getTime() - a.start.getTime());

  // Calcular o índice inicial e final dos eventos para a página atual
  const startIndex = currentPage * eventsPerPage;
  const endIndex = startIndex + eventsPerPage;

  // Calcular o número total de páginas
  const totalPages = Math.ceil(sortedEvents.length / eventsPerPage);

  // Filtrar os eventos para exibir apenas os eventos da página atual
  const currentEvents = sortedEvents.slice(startIndex, endIndex);

  const calendarEvents = Array.isArray(eventsExample) ? eventsExample : [];

  // Função para ir para a próxima página
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Função para ir para a página anterior
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  // Função para lidar com a seleção de eventos no CalendarView
  const handleSelectEvent = (event: EventItem | null) => {
    setSelectedEvent(event);
  };

  const translatedEvents = sortedEvents.map((event) => ({
    ...event,
    title: t(`events-card.${event.title.toLowerCase()}`) || event.title,
  }));

  return (
    <div className="md:flex h-full mb-16">
      <div className="grid flex-col gap-4 mt-8">
        {currentEvents.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
        <div className="flex justify-center mt-4">
          {/* Botão "Anterior" é desabilitado na primeira página */}
          <button
            className={`btn-mediumpink mx-2 flex items-center bg-mediumpink text-white rounded-lg ${currentPage === 0 ? "bg-gray-400 cursor-not-allowed" : ""}`}
            style={{ width: "100px", height: "30px" }}
            disabled={currentPage === 0}
            onClick={handlePrevPage}
          >
            <FaArrowLeft className="mx-2" /> {t("events.anterior")}
          </button>
          {/* Botão "Próximo" é desabilitado na última página */}
          <button
            className={`btn-mediumpink mx-2 flex items-center  bg-mediumpink text-white rounded-lg ${currentPage === totalPages - 1 ? "bg-gray-400 cursor-not-allowed" : ""}`}
            style={{ width: "100px", height: "30px" }}
            disabled={currentPage === totalPages - 1}
            onClick={handleNextPage}
          >
            <div className="ml-3">{t("events.proximo")}</div> <FaArrowRight className="mx-2" />
          </button>
        </div>
      </div>
      <div className="flex flex-col mx-5 md:w-1/2 h-full">
        <div className="bg-mediumpink p-2 text-center text-white text-xl mb-4 mt-8">
          {t("events.calendario")}
        </div>
        <div style={{ height: "65vh"}}>
          <CalendarView
            defaultView={"month"}
            views={["month"]}
            events={translatedEvents}
            onSelectEvent={handleSelectEvent}/>
        </div>
        <div className="mt-2">
        <h2 className="text-mediumpink text-center text-xl my-4"><b>{t("events.ano")}</b></h2>
          <EventTable 
            events={calendarEvents} />
        </div>
      </div>
    </div>
  );
};

export default EventsView;
