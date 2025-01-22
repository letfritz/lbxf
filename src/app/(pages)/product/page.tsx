"use client";
import React, { useState } from 'react';
import { ProductsList } from "@/store/ProductsList";
import { useTranslation } from "react-i18next";
import GoogleAnalyticsScript from '../../../../public/GoogleAnalyticsScript';

const ProductPage = () => {

  const [t, i18n] = useTranslation("global");

  // Estados para armazenar o ano e a categoria selecionados
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Filtrar e ordenar os itens com base no ano e categoria selecionados
  const filteredItems = ProductsList.filter(
    (product) =>
      (!selectedYear || product.ano === parseInt(selectedYear)) &&
      (!selectedCategory || product.category === selectedCategory)
  ).sort((a, b) => b.ano - a.ano);

  // Obter a lista de anos e categorias únicos
  const uniqueYears = getUniqueYears();
  const uniqueCategories = getUniqueCategories();

  function getUniqueYears(): number[] {
    const years: number[] = [];
    ProductsList.forEach((product) => {
      if (!years.includes(product.ano)) {
        years.push(product.ano);
      }
    });
    // Ordenar os anos em ordem decrescente
    years.sort((a, b) => b - a);
    return years;
  }

  function getUniqueCategories(): string[] {
    const categories: string[] = [];
    ProductsList.forEach((product) => {
      if (!categories.includes(product.category)) {
        categories.push(product.category);
      }
    });
    return categories;
  }

  // Função para obter as categorias traduzidas
  const getTranslatedCategories = () => {
    const translatedCategories = uniqueCategories.map((category) => ({
      value: category,
      label: t(`categories.${category.toLowerCase()}`),
    }));
    return translatedCategories;
  };

  // Funções para atualizar o ano e a categoria selecionados
  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const year = event.target.value;
    setSelectedYear(year);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const category = event.target.value;
    setSelectedCategory(category);
  };

  return (
    <div>
      <GoogleAnalyticsScript />
      <div className="text-darkpink text-justify text-lg">
        <h2>
        {t("product.titulo1")}
          <span className="text-mediumpink">
            <b> {t("product.titulo2")}</b>
          </span>
          .
        </h2>
      </div>
      <div className="md:flex py-4 flex-col md:flex-row md:items-center">
      <div className="mb-2 md:mb-0">
        <label htmlFor="yearDropdown" className="mr-2 text-mediumpink justify-center">
          <b>{t("product.titulo3")}</b>
        </label>
        <select
          id="yearDropdown"
          className="border border-mediumpink rounded px-2 py-1 bg-mediumpink text-lightpink  hover:cursor-pointer"
          value={selectedYear}
          onChange={handleYearChange}
        >
          <option value="">{t("product.todos")}</option>
          {uniqueYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className="md:ml-4">
        <label htmlFor="categoryDropdown" className="md:ml-4 mr-2 text-mediumpink justify-center">
          <b>{t("product.titulo4")}</b>
        </label>
        <select
          id="categoryDropdown"
          className="border border-mediumpink rounded px-2 py-1 bg-mediumpink text-lightpink hover:cursor-pointer w-[250px] md:w-auto"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">{t("product.todos")}</option>
          {getTranslatedCategories().map((translatedCategory) => (
            <option key={translatedCategory.value} value={translatedCategory.value}>
              {translatedCategory.label}
            </option>
          ))}
        </select>
      </div>
        
      </div>
      <div className="py-8">
        {filteredItems.map((productsItem, index) => {
          return (
            <div key={productsItem.id} className="py-4">
              {index === 0 || filteredItems[index - 1].ano !== productsItem.ano ? (
                <h3 className="text-highpink text-3xl">
                  <b>{productsItem.ano}</b>
                </h3>
              ) : null}
              {(index === 0 || filteredItems[index - 1].category !== productsItem.category) && (
              <h3 className="text-darkpink text-lg">
                <b>{t(`categories.${productsItem.category.toLowerCase()}`)}</b>
              </h3>
              )}
              {productsItem.category === 'mestrado' || productsItem.category === 'doutorado' || productsItem.category === 'monografia' ? (
                <p>
                  {productsItem.description1}{" "}
                  <a className="hover:text-highpink hover:font-bold text-mediumpink" href={productsItem.link} target="_blank" rel="noopener noreferrer">
                    <b>{productsItem.description2}</b> {productsItem.description3}
                  </a>{" "}
                  {productsItem.description4}
                </p>
              ) : (
                <p className='w-[250px] md:w-auto'>
                  {productsItem.description1}{" "}
                  <a className="hover:text-highpink hover:font-bold text-mediumpink" href={productsItem.link} target="_blank" rel="noopener noreferrer">
                    {productsItem.clicked}
                  </a>{" "}
                  {productsItem.description2} <b>{productsItem.description3}</b>{" "}
                  {productsItem.description4}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

};

export default ProductPage;
