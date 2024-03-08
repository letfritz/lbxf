"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { useTranslation } from "react-i18next";
import GoogleAnalyticsScript from '../../../../public/GoogleAnalyticsScript';

const JoinPage = () => {

  const [t, i18n] = useTranslation("global");

  const slides = [
    { img: "/participe/participe1.png" },
    { img: "/participe/participe2.png" },
    { img: "/participe/participe3.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div>
      <GoogleAnalyticsScript />
      <div className="text-darkpink text-justify text-lg">
        <h2>
        {t("join.titulo1")}
          <span className="text-mediumpink">
            <b> {t("join.titulo2")} </b>
          </span>
          {t("join.titulo3")}
          <span className="text-mediumpink">
            <b> {t("join.titulo4")}</b>
          </span>
          . {t("join.titulo5")}
        </h2>
      </div>
      <div className="text-mediumpink text-center text-xl my-8">
        <h2>
          <b>{t("join.titulo6")}</b>
        </h2>
      </div>
      <div className={`grid lg:grid-cols-2 gap-y-5 gap-x-5 my-5`}>
        <div
          id="slide"
          className="max-w-[1400px] w-full m-auto rounded-2xl"
        >
          <div className="group  relative  h-fit flex flex-col  rounded-2xl">
            <Image
              src={slides[currentIndex].img}
              className="rounded-2xl w-full"
              width={1400}
              height={780}
              style={{ objectFit: "contain" }}
              alt=""
            />
            <div className="hidden absolute group-hover:block top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            <div className="hidden absolute group-hover:block top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className="flex  w-full py-2 justify-center">
              {slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className="text-2xl cursor-pointer"
                >
                  <RxDotFilled />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          id="texto_inscricao"
          className="text-darkpink text-justify text-md"
        >
          <h2>
          {t("join.titulo7")} <span className="text-highpink"><b>{t("join.titulo8")}</b></span>. {t("join.titulo9")} <span className="text-highpink"><b>{t("join.titulo10")}</b></span> {t("join.titulo11")}
          </h2>
          <ul className="list-disc ml-8 mx-4">
            <li>{t("join.titulo12")}</li>
            <li>{t("join.titulo13")}</li>
            <li>{t("join.titulo14")}</li>
            <li>{t("join.titulo15")}</li>
          </ul>
          <h2>
          {t("join.titulo16")}
          </h2>
          <h2>
          {t("join.titulo17")} <a href="https://www.instagram.com/ligabrasilxadrezfeminino/" target="_blank" rel="noopener noreferrer" className="hover:text-highpink"><b>{t("join.titulo18")}</b></a> {t("join.titulo19")} <a href="https://www.facebook.com/groups/157866614403205" target="_blank" rel="noopener noreferrer" className="hover:text-highpink"><b>{t("join.titulo20")}</b></a>.
          </h2>
          <h2 className="text-mediumpink text-xl">
          {t("join.titulo21")}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default JoinPage;
