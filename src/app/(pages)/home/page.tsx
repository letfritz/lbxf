"use client"
import React from "react";
import Link from "next/link";
import { FaCalendar, FaNewspaper, FaInstagram } from 'react-icons/fa';
import { useTranslation } from "react-i18next";
import GoogleAnalyticsScript from '../../../../public/GoogleAnalyticsScript';

function HomePage() {

  const [t, i18n] = useTranslation("global");

  return (
    <main>
    <GoogleAnalyticsScript />
    <section>
      <div className="relative">
      <div className="w-96 h-96 bg-highpink absolute top-0 -left-5 -z-10 blur-2xl opacity-40 overflow-hidden rounded-full"></div>
      <div className="w-96 h-96 bg-lightpink absolute bottom-10 right-0 -z-10 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
      <div className="container py-20">
        <div className="flex flex-col items-center z-20 md:flex-row">
          <div className="text-center mb-12 md:text-left md:w-1/2 md:pr-10">
            <h1 className="text-3xl text-darkpink md:text-4xl font-bold leading-snug mb-4">
              {t("home.titulo1")} <span className="text-white"> {t("home.titulo2")} </span> {t("home.titulo3")}</h1>
            <p className="leading-relaxed mb-10 text-lightpink">{t("home.titulo4")}<span className="text-darkpink font-bold">{t("home.titulo5")}</span>{t("home.titulo6")}</p>
            <Link 
              className="bg-highpink text-white px-9 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200"
              href="/join">
                {t("home.titulo7")}
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <img src="/images/LBXF_VETOR01.png" alt="" className="w-[60%]" />
          </div>
        </div>
      </div>
    </div>
    </section>
    <section>
    <div className="relative">
    <div className="w-96 h-96 bg-lightpink absolute top-0 -left-5 -z-10 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
    <div className="w-96 h-96 bg-darkpink absolute bottom-10 right-0 -z-10 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
    <div className="container py-20">
      <div className="text-center m-auto mb-20 md:w-1/2">
        <h1 className="text-3xl text-highpink md:text-4xl font-bold leading-snug mb-4" style={{ WebkitTextStroke: "0.3px white" }}>{t("home.titulo8")}</h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 lg:gap-8 px-4 sm:px-6 lg:px-8">
        <Link href="/events">
        <div className="border-2 border-solid text-darkpink bg-lightpink border-highpink shadow-2xl text-center py-7 px-5 rounded-2xl cursor-pointer h-full hover:bg-mediumpink hover:text-white ease-in duration-200">
          <div className="bg-highpink inline-block rounded-2xl py-5 px-6">
            <FaCalendar className="mx-2 text-white text-7xl" />
          </div>
          <h3 className="text-xl font-bold py-4 ">{t("home.titulo9")}</h3>
          <p className="leading-relaxed ">{t("home.titulo10")}</p>
        </div>
        </Link>
        <Link href="/product">
        <div className="border-2 border-solid text-darkpink bg-lightpink border-highpink shadow-2xl text-center py-7 px-5 rounded-2xl cursor-pointer h-full hover:bg-mediumpink hover:text-white ease-in duration-200">
          <div className="bg-highpink inline-block rounded-2xl py-5 px-6">
            <FaInstagram className="mx-2 text-white text-7xl" />
          </div>
          <h3 className="text-xl font-bold py-4 ">{t("home.titulo11")}</h3>
          <p className="leading-relaxed ">{t("home.titulo12")}</p>
        </div>
        </Link>
        <Link href="/product">
        <div className="border-2 border-solid text-darkpink bg-lightpink border-highpink shadow-2xl text-center py-7 px-5 rounded-2xl cursor-pointer h-full hover:bg-mediumpink hover:text-white ease-in duration-200">
          <div className="bg-highpink inline-block rounded-2xl py-5 px-6">
            <FaNewspaper className="mx-2 text-white text-7xl" />
          </div>
          <h3 className="text-xl font-bold py-4 ">{t("home.titulo13")}</h3>
          <p className="leading-relaxed ">{t("home.titulo14")}</p>
        </div>
        </Link>
      </div>
      
    </div>
    
  </div>
  </section>
  </main>
  );
}

export default HomePage;
