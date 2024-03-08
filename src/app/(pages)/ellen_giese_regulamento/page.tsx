"use client"
import React from "react";
import { useTranslation } from "react-i18next";
import GoogleAnalyticsScript from '../../../../public/GoogleAnalyticsScript';

const ContentPageCircuitRegulamento = () => {

  const [t, i18n] = useTranslation("global");

  return(
  <div className="mb-16">
    <GoogleAnalyticsScript />
    <div className="text-mediumpink text-center text-xl my-8">
      <h2><b>{t("circuito.titulo1")}</b></h2>
    </div>
    <p>
    {t("circuito.titulo2")}
    </p>
    <h2 className="text-mediumpink my-8"><b>{t("circuito.titulo3")}</b></h2>
    <p className="mb-4">
    {t("circuito.titulo4")}
    </p>
    <p className="text-highpink ml-52 mb-4">
    {`"`} {t("circuito.titulo5")} {`"`}
    </p>
    <p className="mb-4">
    {t("circuito.titulo6")}
    </p>
    <p className="mb-4">
    {t("circuito.titulo7")}
    </p>
    <p className="mb-4">
    {t("circuito.titulo8")}
    </p>
    <h2 className="text-mediumpink mt-8 mb-4"><b>{t("circuito.titulo9")}</b></h2>
    <p>
    <b>{t("circuito.titulo10")}</b> <a href="https://www.chess.com/" target="_blank" rel="noopener noreferrer" className="hover:text-highpink">{t("circuito.titulo11")}</a>.
    </p>
    <p className="mb-4">
    <b>{t("circuito.titulo12")}</b> {t("circuito.titulo13")}.
    </p>
    <h2 className="text-mediumpink mt-8 mb-4"><b>{t("circuito.titulo14")}</b></h2>
    <ul className="ml-4 list-disc">
      <li>{t("circuito.titulo15")}</li>
      <li>{t("circuito.titulo16")}</li>
      <li>{t("circuito.titulo17")}</li>
      <li>{t("circuito.titulo18")}</li>
      <li>{t("circuito.titulo19")}</li>
    </ul>
    <h2 className="text-mediumpink mt-8 mb-4"><b>{t("circuito.titulo20")}</b></h2>
    <ul className="ml-4 list-disc mb-4">
      <li>{t("circuito.titulo21")};</li>
      <li>{t("circuito.titulo22")}</li>
      <li>{t("circuito.titulo23")}<a href="https://www.chess.com/" target="_blank" rel="noopener noreferrer" className="hover:text-highpink">{t("circuito.titulo24")}</a>{t("circuito.titulo25")}</li>
      <li>{t("circuito.titulo26")}</li>
      <li>{t("circuito.titulo27")}</li>
    </ul>
    <p><span className="text-highpink"><b>{t("circuito.titulo28")}</b></span> {t("circuito.titulo29")}</p>
    <h2 className="text-mediumpink mt-8 mb-4"><b>{t("circuito.titulo30")}</b></h2>
    <p className="mb-2">{t("circuito.titulo31")}</p>
    <p className="mb-2">{t("circuito.titulo32")} <a href="https://suporte.chess.com/article/1114-o-que-sao-to" target="_blank" rel="noopener noreferrer" className="hover:text-highpink">https://suporte.chess.com/article/1114-o-que-sao-to</a></p>
    <p className="mb-2">{t("circuito.titulo33")}</p>
    <p className="mb-2">{t("circuito.titulo34")}</p>
    <p className="mb-2">{t("circuito.titulo35")}</p>
    <p className="mb-2">{t("circuito.titulo36")}</p>
    <h2 className="text-mediumpink mt-8 mb-4"><b>{t("circuito.titulo37")}</b></h2>
    <p className="mb-2">{t("circuito.titulo38")}</p>
    <p className="mb-2">{t("circuito.titulo39")}</p>
    <ul className="ml-16 list-disc mb-2">
      <li>{t("circuito.titulo40")}</li>
      <li>{t("circuito.titulo41")}</li>
      <li>{t("circuito.titulo41-1")}</li>
      <li>{t("circuito.titulo42")}</li>
      <li>{t("circuito.titulo43")}</li>
    </ul>
    <p className="mb-2">{t("circuito.titulo44")}</p>
    <ul className="ml-16 list-disc mb-2">
      <li>{t("circuito.titulo45")}</li>
      <li>{t("circuito.titulo46")}</li>
      <li>{t("circuito.titulo47")}</li>
      <li>{t("circuito.titulo48")}</li>
      <li>{t("circuito.titulo49")}</li>
    </ul>
    <p className="mb-2"><span className="text-highpink"><b>{t("circuito.titulo50")}</b></span> {t("circuito.titulo51")}</p>
    <p className="mb-2">{t("circuito.titulo52")}</p>
    <p className="mb-2">{t("circuito.titulo53")}</p>
    <p className="mb-2">{t("circuito.titulo54")}</p>
    <h2 className="text-mediumpink mt-8 mb-4"><b>{t("circuito.titulo55")}</b></h2>
    <p className="mb-2">{t("circuito.titulo56")}</p>
    <ul className="ml-8 list-disc mb-2">
      <li><b>{t("circuito.titulo57")}</b> {t("circuito.titulo58")}</li>
      <li><b>{t("circuito.titulo59")}</b> {t("circuito.titulo60")}</li>
      <li><b>{t("circuito.titulo61")}</b> {t("circuito.titulo62")}</li>
      <li><b>{t("circuito.titulo63")}</b> {t("circuito.titulo64")}</li>
      <li><b>{t("circuito.titulo65")}</b> {t("circuito.titulo66")}</li>
      <li><b>{t("circuito.titulo67")}</b> {t("circuito.titulo68")}</li>
    </ul>
    <h2 className="text-mediumpink mt-8 mb-4"><b>{t("circuito.titulo69")}</b></h2>
    <p className="mb-2">{t("circuito.titulo70")}</p>
    <ul className="ml-8 list-decimal mb-2">
      <li>{t("circuito.titulo71")}</li>
      <li>{t("circuito.titulo72")}</li>
      <li>{t("circuito.titulo73")}</li>
    </ul>
    <h2 className="text-mediumpink mt-8 mb-4"><b>{t("circuito.titulo74")}</b></h2>
    <p className="mb-2">{t("circuito.titulo75")}<a href="https://www.chess.com/" target="_blank" rel="noopener noreferrer" className="hover:text-highpink">{t("circuito.titulo76")}</a>{t("circuito.titulo77")} <a href="https://suporte.chess.com/article/1823-como-funcionam-os-desempates-em-torneios" target="_blank" rel="noopener noreferrer" className="hover:text-highpink">https://suporte.chess.com/article/1823-como-funcionam-os-desempates-em-torneios</a></p>
    <h2 className="text-mediumpink mt-8 mb-4"><b>{t("circuito.titulo78")}</b></h2>
    <p className="mb-2">{t("circuito.titulo79")}</p>
    <p className="mb-2 text-highpink">{t("circuito.titulo80")}</p>
    <ul className="ml-8 list-decimal mb-2">
      <li>{t("circuito.titulo81")}</li>
      <li>{t("circuito.titulo82")}</li>
      <li>{t("circuito.titulo83")}</li>
      <li>{t("circuito.titulo84")}</li>
      <li>{t("circuito.titulo85")}</li>
      <li>{t("circuito.titulo86")}</li>
      <li>{t("circuito.titulo87")}</li>
    </ul>
    <p className="mb-2 text-highpink">{t("circuito.titulo88")}</p>
    <ul className="ml-8 list-decimal mb-2">
      <li>{t("circuito.titulo89")}</li>
      <li>{t("circuito.titulo90")}</li>
      <li>{t("circuito.titulo91")}</li>
      <li>{t("circuito.titulo92")}</li>
      <li>{t("circuito.titulo93")}</li>
      <li>{t("circuito.titulo94")}</li>
    </ul>
    <p className="mb-2 text-highpink">{t("circuito.titulo95")}</p>
    <p className="mb-2">{t("circuito.titulo96")}</p>
    <p className="mb-2">{t("circuito.titulo97")}</p>
    <p className="mb-2">{t("circuito.titulo98")}</p>
    <p className="mb-2">{t("circuito.titulo99")}</p>
    <h2 className="text-mediumpink mt-8 mb-4"><b>{t("circuito.titulo100")}</b></h2>
    <p className="mb-2">{t("circuito.titulo101")}</p>
    <p className="mb-2">{t("circuito.titulo102")}<a href="https://suporte.chess.com/article/1107-o-que-eu-preciso-saber-sobre-jogo-limpo-fair-play-no-chess-com#:~:text=O%20que%20acontece%20com%20um,vit%C3%B3ria%20%C3%A9%20creditada%20ao%20oponente" target="_blank" rel="noopener noreferrer" className="hover:text-highpink">https://suporte.chess.com/article/1107-o-que-eu-preciso-saber-sobre-jogo-limpo-fair-play-no-chess-com#:~:text=O%20que%20acontece%20com%20um,vit%C3%B3ria%20%C3%A9%20creditada%20ao%20oponente</a></p>
    <p className="mb-2">{t("circuito.titulo103")}</p>
    <h2 className="text-mediumpink mt-8 mb-4"><b>{t("circuito.titulo104")}</b></h2>
    <p className="mb-2">{t("circuito.titulo105")} <b>twitch.tv/babichess</b> {t("circuito.titulo106")} <b>twitch.tv/xadrezdequinta</b></p>
    <h2 className="text-mediumpink mt-8 mb-4"><b>{t("circuito.titulo107")}</b></h2>
    <p className="mb-2">{t("circuito.titulo108")}</p>
    <h2 className="text-mediumpink mt-8 mb-4"><b>{t("circuito.titulo109")}</b></h2>
    <p className="mb-2">{t("circuito.titulo110")}</p>
    <h2 className="text-mediumpink mt-8 mb-4"><b>{t("circuito.titulo111")}</b></h2>
    <p className="mb-2">{t("circuito.titulo112")}<span className="text-highpink">ligabrasileiraxadrezfeminino@gmail.com</span></p>
    <h2 className="text-mediumpink mt-8 mb-4"><b>{t("circuito.titulo113")}</b></h2>
    <p className="mb-2">{t("circuito.titulo114")}</p>
    <h2 className="text-mediumpink mt-8 mb-4"><b>{t("circuito.titulo115")}</b></h2>
    <div className="grid grid-cols-7 gap-4 mt-8">
      <div className="flex items-center justify-center">
        <img src="/patrocinadores/cincin.png" alt="" style={{ width: "150px" }}/>
      </div>
      <div className="flex items-center justify-center">
        <img src="/patrocinadores/chesscom.png" alt="" style={{ width: "150px" }}/>
      </div>
      <div className="flex items-center justify-center">
        <img src="/patrocinadores/solis.png" alt="" style={{ width: "150px" }}/>
      </div>
      <div className="flex items-center justify-center">
        <img src="/patrocinadores/jaehring.png" alt="" style={{ width: "150px" }}/>
      </div>
      <div className="flex items-center justify-center">
        <img src="/patrocinadores/jadoube.png" alt="" style={{ width: "150px" }}/>
      </div>
      <div className="flex items-center justify-center">
        <img src="/patrocinadores/100xadrez.png" alt="" style={{ width: "150px" }}/>
      </div>
      <div className="flex items-center justify-center">
        <img src="/patrocinadores/exclama2.png" alt="" style={{ width: "150px" }}/>
      </div>
    </div>
  </div>
  );
};

export default ContentPageCircuitRegulamento;
