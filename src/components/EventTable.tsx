import React from 'react';
import moment from 'moment';
import { EventItem } from './EventsView';
import { useTranslation } from "react-i18next";

interface EventTableProps {
  events: EventItem[];
}

const EventTable: React.FC<EventTableProps> = ({ events}) => {
  // Filter events for the year 2023
  const eventsYear = events.filter((event) => {
    const year = moment().year(2023);
    return moment(event.start).isSame(year, 'year');
  });

  const [t, i18n] = useTranslation("global");

  return (
    <table className="w-full">
      <thead>
        <tr className='bg-[#52002a] text-white'>
          <th>{t("events.data")}</th>
          <th>{t("events.hora")}</th>
          <th>{t("events.nome")}</th>
        </tr>
      </thead>
      <tbody>
        {eventsYear.map((event, index) => (
          <tr key={event.id} className={index % 2 === 0 ? 'bg-lightpink text-black' : 'bg-white'}>
            <td className="border p-2 text-center">
              {moment(event.start).format('L')}
              {moment(event.start).format('L') !== moment(event.end).format('L') &&
                ` - ${moment(event.end).format('L')}`}
            </td>
            <td className="border p-2 text-center">{moment(event.start).format('LT')} - {moment(event.end).format('LT')}</td>
            <td className="border p-2"><a className="hover:text-highpink hover:font-bold" href={event.link} target="_blank" rel="noopener noreferrer">{t(`events-card.${event.title}`)}</a></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EventTable;
