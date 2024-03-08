"use client";
import EventsView from "@/components/EventsView";
import React from "react";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useTranslation } from "react-i18next";
import GoogleAnalyticsScript from '../../../../public/GoogleAnalyticsScript';

const EventsPage = () => {

  const [t, i18n] = useTranslation("global");

  return (
    <main>
      <div className="text-mediumpink text-center text-xl my-8">
      <GoogleAnalyticsScript />
        <h2><b>{t("events.titulo1")}</b></h2>
      </div>
      <EventsView />
    </main>
  );
};

export default EventsPage;
