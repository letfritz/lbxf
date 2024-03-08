"use client";
import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

type props = {
  id: number, 
  name: string, 
  avatar: string, 
  description: string,
  onSeeMoreClicked: (personId: number | undefined) => void,
  isExpanded: boolean,
};

function IntegrantesView({id, name, avatar, description, onSeeMoreClicked, isExpanded}: props) {

  const [t, i18n] = useTranslation("global");

  return (
    <div className={`bg-mediumpink rounded-lg shadow-sm cursor-pointer 
    hover:shadow-xl transition duration-300 w-200 ${isExpanded ? 'col-span-3': undefined}`}>
      <div className='flex items-center text-center w-full'>
        <div className='m-1'>
          <img src={avatar} alt='' className='w-20 rounded-full' />
        </div>
        <div>
          <p className='text-white'>{name}</p>
        </div>
      </div>
      <div className='p-5'>
        <div
          className={'text-white text-justify text-sm'}
        >
          {isExpanded ? description : 
          <p style={{ maxHeight: '7em', overflow: 'hidden' }}> {description} </p>}
        </div>
        {!isExpanded && (
          <div className='flex justify-end mr-5 mt-5'>
            <button
              className='text-lightpink hover:text-highpink text-sm'
              onClick={() => onSeeMoreClicked(id)}
            >
              <a href="#gt-integrantes"><b>{t("about.mais")}</b></a>
            </button>
          </div>
        )}
        {isExpanded && (
          <div className='flex justify-end mr-5 mt-5'>
            <button
              className='text-lightpink hover:text-highpink text-sm'
              onClick={() => onSeeMoreClicked(undefined)}
            >
              <b>{t("about.menos")}</b>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default IntegrantesView;