"use client"
import React from "react";
import { useTranslation } from "react-i18next";
import { FaCalendar } from 'react-icons/fa';
import moment from 'moment';
import Link from "next/link";
import news from "@/store/news.json";
import GoogleAnalyticsScript from '../../../../public/GoogleAnalyticsScript';

export interface NewsItem {
  id: number;
  title: string;
  date: Date;
  link: string; 
  image: string;
}

const NewsCard: React.FC<NewsItem> = ({
  title,
  date,
  link,
  image,
}) => {
  const [t, i18n] = useTranslation("global");

  // Configurando o locale do moment toda vez que o idioma muda
  moment.locale(i18n.language)
  
  return(
    <div className="md:w-full h-auto md:h-full flex flex-col shadow-md rounded-md overflow-hidden border-2 border-mediumpink bg-lightpink bg-opacity-30">
    {/* Imagem no topo */}
    <img
      src={image}
      alt=""
      className="w-full h-52 object-cover border-b-2 border-mediumpink"
    />
    {/* Conteúdo do card */}
    <div className="flex flex-col flex-grow p-4">
      {/* Título acima da data */}
      <div className="text-darkpink text-xl mb-2 font-semibold">{title}</div>
      {/* Data e botão abaixo do título */}
      <div className="flex items-center justify-between mt-3">
        <div className="text-mediumpink flex items-center">
          <FaCalendar className="w-5 h-5 mr-2" />
          {moment(date).format("LL")}
        </div>
        <div className="mt-auto">
          <Link href={link} target="_blank" rel="noopener noreferrer">
            <button className="btn-ghost rounded-md w-20 bg-mediumpink text-white hover:bg-lightpink hover:text-darkpink">
              {t("events-card.more")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
)};

const newsExample: NewsItem[] = news as unknown as NewsItem[];

newsExample.forEach((news) => {
  news.date = new Date(news.date);
});

const ContentPage = () => {

  const [t, i18n] = useTranslation("global");

  // Sort the events based on the start date (from the most recent to the oldest)
  newsExample.sort((a, b) => a.date.getTime() - b.date.getTime());

  // Criar uma cópia ordenada do array eventsExample
  const sortedEvents = newsExample.slice().sort((a, b) => b.date.getTime() - a.date.getTime());

  return(
  <div className="mb-16">
    <GoogleAnalyticsScript />
    <div className="text-mediumpink text-center text-xl my-8">
      <h2><b>{t("header.noticias")}</b></h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {sortedEvents.map((news) => (
        <NewsCard key={news.id} {...news} />
      ))}
    </div>
  </div>
  );
};

export default ContentPage;
