"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const BreadCumbs = () => {
  const pathname = usePathname();
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        {pathname.includes("home") && (
          <li>
            <a>Home</a>
          </li>
        )}
        {pathname.includes("about") && (
          <li>
            <a>Sobre</a>
          </li>
        )}
        {pathname.includes("events") && (
          <li>
            <a>Eventos</a>
          </li>
        )}
        {pathname.includes("content") && (
          <li>
            <a>Conteudo</a>
          </li>
        )}
        {pathname.includes("calendar") && (
          <li>
            <a>Calendario</a>
          </li>
        )}
        {pathname.includes("contact") && (
          <li>
            <a>Contato</a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default BreadCumbs;
