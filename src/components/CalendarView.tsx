"use client";
import React, { useEffect } from 'react';
import { Calendar, CalendarProps, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import "../app/(pages)/events/index.css"
import { momentInstance as moment } from '@/lib/momentConfig';
import 'moment/locale/pt-br';
import { EventItem } from './EventsView';
import { useTranslation } from "react-i18next";

const localizer = momentLocalizer(moment);

interface CustomCalendarProps extends Omit<CalendarProps<EventItem, object>, 'localizer'> {
  start?: Date;
  end?: Date;
  onSelectEvent?: (event: EventItem | null) => void;
}

export default function CalendarView(props: CustomCalendarProps) {

  const [t, i18n] = useTranslation("global");

  const { events, onSelectEvent } = props;

  const handleSelectEvent = (event: EventItem, e: React.SyntheticEvent) => {
    // Prevent the default behavior of the event (e.g., opening the event details dialog)
    e.preventDefault();

    if (onSelectEvent) {
      onSelectEvent(event);
    }

    // Open the event link in a new tab
    if (event.link) {
      window.open(event.link, '_blank');
    }
  };

  // Map events to the required Event format
  const mappedEvents = events?.map((event) => ({
    ...event,
    start: new Date(event.start),
    end: new Date(event.end),
  }));

  return (
    <Calendar 
      {...props} 
      localizer={localizer}
      startAccessor="start"
      endAccessor="end"
      messages={{
        today: t("events.hoje"),
        previous: t("events.anterior_mes"),
        next: t("events.proximo_mes"),
    }}
      formats={{ monthHeaderFormat: 'MMMM YYYY' }}
      eventPropGetter={(event) => {
        const now = new Date();
        const isEventInProgress = moment(event.start).isSame(now, 'day');
        return {
          className: isEventInProgress ? 'rbc-event-in-progress' : '',
        };
      }}
      onSelectEvent={handleSelectEvent}
      events={mappedEvents}
    />
  );
}

