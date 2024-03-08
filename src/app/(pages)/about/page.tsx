"use client"
import React, { useState } from 'react';
import IntegrantesView from "@/components/IntegrantesView";
import { IntegrantesList } from "@/store/IntegrantesList";
import { useTranslation } from "react-i18next";
import GoogleAnalyticsScript from '../../../../public/GoogleAnalyticsScript';

const AbountPage = () => {

  const [t, i18n] = useTranslation("global");

  const [selectedPersonId, setSelectedPersonId] = useState<number | undefined>(undefined);

  const sortedIntegrantesList = [...IntegrantesList].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      <GoogleAnalyticsScript />
      <div className="text-darkpink text-justify text-lg">
        <h2 id="quem-somos">{t("about.titulo1")} <span className="text-mediumpink"><b>{t("about.titulo2")}</b></span> {t("about.titulo3")}</h2>
      </div>
      <div className="text-mediumpink text-center text-xl my-8">
        <h2><b>{t("about.titulo4")}</b></h2>
      </div>
      <div className="text-darkpink text-justify text-md">
        <h2>{t("about.titulo5")} <span className="text-highpink">{t("about.titulo2")}</span> {t("about.titulo6")}</h2>
      </div>
      <div className="bg-lightpink text-darkpink text-lg my-12 rounded-lg">
        <div className="mx-4">
          <h2 id="missao-visao-valores" className="text-highpink"><b>{t("about.titulo7")}</b></h2>
        </div>
        <div className="mx-4">
          <h2>{t("about.titulo8")}</h2>
        </div>
        <div className="mx-4 mt-5">
          <h2 className="text-highpink"><b>{t("about.titulo9")}</b></h2>
        </div>
        <div className="mx-4">
          <h2>{t("about.titulo10")}</h2>
        </div>
        <div className="mx-4 mt-5">
          <h2 className="text-highpink"><b>{t("about.titulo11")}</b></h2>
        </div>
        <ul className="list-disc ml-8 mx-4">
          <li>{t("about.titulo12")}</li>
          <li>{t("about.titulo13")}</li>
          <li>{t("about.titulo14")}</li>
          <li>{t("about.titulo15")}</li>
          <li>{t("about.titulo16")}</li>
        </ul>
      </div>
      <div className="text-mediumpink text-center text-xl my-8">
        <h2 id="gt-vonluntarias"><b>{t("about.titulo17")}</b></h2>
      </div>
      <div className={`grid lg:grid-cols-3 gap-y-5 gap-x-5 my-5`}>
      {(selectedPersonId
        ? [sortedIntegrantesList.find(x => x.id === selectedPersonId), ...sortedIntegrantesList.filter(x => x.id !== selectedPersonId)]
        : sortedIntegrantesList
      ).map((integrantesItem) => {
        const descriptionKey = `integrantes.${integrantesItem!.id}_description`;
        const translatedDescription = t(descriptionKey);

        return (
          <IntegrantesView
            key={integrantesItem!.id}
            id={integrantesItem!.id}
            name={integrantesItem!.name}
            avatar={integrantesItem!.avatar}
            description={translatedDescription}
            onSeeMoreClicked={setSelectedPersonId}
            isExpanded={integrantesItem!.id === selectedPersonId}
          />
        );
      })}
    </div>
    </div>
  );
}

export default AbountPage;
