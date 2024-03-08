"use client"
import React from "react";
import ContactForm from "@/components/ContactForm";
import { useTranslation } from "react-i18next";
import GoogleAnalyticsScript from '../../../../public/GoogleAnalyticsScript';

function ContactPage() {

  const [t, i18n] = useTranslation("global");

  return (
    <div>
      <GoogleAnalyticsScript />
      <div className="text-darkpink text-justify text-lg">
        <h2>
          {t("contact.titulo1")} <a href="https://www.instagram.com/ligabrasilxadrezfeminino/" target="_blank" rel="noopener noreferrer" className="text-mediumpink hover:text-highpink"><b>{t("contact.titulo2")}</b></a> {t("contact.titulo3")} <a href="https://www.facebook.com/groups/157866614403205" target="_blank" rel="noopener noreferrer" className="text-mediumpink hover:text-highpink"><b>{t("contact.titulo4")}</b></a>. 
          {t("contact.titulo5")}.
        </h2>
      </div>
      <div className="text-mediumpink text-center text-lg my-8">
        <h2><b>{t("contact.titulo6")}</b></h2>
      </div>
      <p className="text-darkpink text-justify text-lg">{t("contact.titulo7")}</p>
      <ContactForm />
    </div>
  );
}

export default ContactPage;
