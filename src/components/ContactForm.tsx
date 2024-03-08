"use client";
import { cn } from "@/lib/utils";
import { SendEmailRequest } from "@/model/SendEmailRequest";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";

const ContactForm = () => {

  const [t, i18n] = useTranslation("global");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SendEmailRequest>();
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const onSubmit: SubmitHandler<SendEmailRequest> = async (data) => {
    setLoadingSubmit(true);
    try {
      await fetch("/api/sendemail", {
        body: JSON.stringify(data),
        method: "POST",
      });
      toast.success("Mensagem enviada com sucesso, responderemos em breve.", {
        duration: 2000,
        position: "bottom-left",
      });
    } catch (error) {
      console.error(error);
      toast.error("Erro ao enviar a mensagem, tente novamente mais tarde.", {
        position: "bottom-left",
      });
    } finally {
      setLoadingSubmit(false);
    }
  };

  return (
    <form className="w-full mb-8 mt-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-neutral-100 flex flex-col rounded-md mt-4">
          <label
            className="font-thin text-darkpink mt-2 ml-2 text-sm"
            htmlFor="name"
          >
            {t("contact.nome")}
          </label>
          <input
            autoComplete="off"
            id="name"
            type="text"
            className="font-normal p-2 ring-0 outline-none focus:ring-0 focus:border-none rounded-md w-full h-7 border-none bg-neutral-100"
            {...register("Name", { required: true })}
          />
      </div>
      <div className="bg-neutral-100 flex flex-col rounded-md mt-4">
          <label
            className="font-thin text-darkpink mt-2 ml-2 text-sm"
            htmlFor="email"
          >
            {t("contact.mail")}
          </label>
          <input
            id="email"
            autoComplete="off"
            type="text"
            className="font-normal p-2 ring-0 outline-none focus:ring-0 focus:border-none rounded-md w-full h-7 border-none bg-neutral-100"
            {...register("Email", {
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Esse campo deve ser um e-mail válido",
              },
              required: true,
            })}
          />
          <div className="text-red-500">{errors.Email?.message}</div>
      </div>

      <div className="bg-neutral-100 flex flex-col rounded-md mt-4">
        <label
          className="font-thin text-darkpink mt-2 ml-2 text-sm"
          htmlFor="message"
        >
          {t("contact.assunto")}
        </label>
        <input
          id="message"
          className="font-normal p-2 ring-0 outline-none focus:ring-0 focus:border-none rounded-md w-full  border-none bg-neutral-100 resize-none"
          {...register("Subject", { required: true })}
        />
      </div>

      <div className="bg-neutral-100 flex flex-col rounded-md mt-4">
        <label
          className="font-thin text-darkpink mt-2 ml-2 text-sm"
          htmlFor="message"
        >
          {t("contact.mensagem")}
        </label>
        <textarea
          id="message"
          className="font-normal p-2 ring-0 outline-none focus:ring-0 focus:border-none rounded-md w-full h-24 border-none bg-neutral-100 resize-none"
          {...register("Content", { required: true })}
        />
      </div>
      <button
        className={cn("btn mt-2", {
          "btn-disabled": loadingSubmit || !isValid,
        })}
        style={{
          backgroundColor: isValid ? "#895370" : undefined,
        }}
      >
        {loadingSubmit && <span className="loading loading-spinner"></span>}
        {!loadingSubmit && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        )}
        {t("contact.enviar")}
      </button>
    </form>
  );
};

export default ContactForm;
