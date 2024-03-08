"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";


const MenuItem = ({
  href,
  title,
  isChecked,
  hasSubMenu,
  subMenuItems,
  onMenuItemClick,
  onCloseMenu,
}: {
  href: string;
  title: string;
  isChecked?: boolean;
  hasSubMenu?: boolean;
  subMenuItems?: { href: string; title: string }[];
  onMenuItemClick: () => void;
  onCloseMenu: () => void;
}) => {
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuOpen(!isSubMenuOpen);
  };

  const closeSubMenu = () => {
    setSubMenuOpen(false);
  };

  const handleMenuItemClick = () => {
    closeSubMenu();
    onMenuItemClick();
    onCloseMenu();
  };

  return (
    <div className="relative">
      <div
        className={cn(
          "hover:bg-lightpink hover:text-darkpink px-2 py-1 ease-in-out duration-500 rounded-md h-fit",
          {
            "bg-darkpink": isChecked,
          }
        )}
        onClick={hasSubMenu ? toggleSubMenu : handleMenuItemClick}
      >
        <Link href={href}>{title}</Link>
      </div>

      {hasSubMenu && isSubMenuOpen && (
        <div className="absolute top-full left-0 py-2 px-4 rounded-md shadow-md transition-all border border-darkpink duration-300 bg-mediumpink z-10">
          <div className="whitespace-nowrap">
            {subMenuItems &&
              subMenuItems.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-1 px-1 hover:bg-lightpink hover:text-darkpink rounded-md"
                    onClick={handleMenuItemClick}
                  >
                    {item.title}
                  </Link>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

function TopMenu() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [t, i18n] = useTranslation("global");
  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const pathname = usePathname();

  const onToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div
      style={{ zIndex: 10000 }}
      className="flex space-x-16 w-full justify-between sticky top-0 bg-mediumpink py-1 px-8 text-white shadow-lg mb-5"
    >
      <div className="flex space-x-5">
        <Image src="/images/LBXF_VETOR01.png" width="65" height="55" alt="" />
        <div className="text-center">
          <div className="text-2xl">
            <b>LBXF</b>
          </div>
          <div className="text-xs">
            <span>{t("header.name1")}</span>
          </div>
          <div className="text-xs">
            <span>{t("header.name2")}</span>
          </div>
        </div>
      </div>

      <div
        className={`nav-links md:static absolute bg-mediumpink md:min-h-fit min-h-[60vh] left-0 ${
          isMenuOpen ? "top-[100%]" : "top-[-1000%]"
        } md:w-auto w-full flex items-center px-5`}
      >
        <div className="flex md:flex-row flex-col md:items-center md:gap-[1vw] gap-2 mb-2">
          <MenuItem
            href="/home"
            title="Home"
            isChecked={pathname.includes("home")}
            hasSubMenu={false}
            onMenuItemClick={closeMenu}
            onCloseMenu={closeMenu}
          />
          <MenuItem
            href="/about"
            title={t("header.sobre")}
            isChecked={pathname.includes("about")}
            hasSubMenu
            subMenuItems={[
              { href: "/about/#quem-somos", title: t("header.sobre-quem") },
              { href: "/about/#missao-visao-valores", title: t("header.sobre-valores") },
              { href: "/about/#gt-vonluntarias", title: t("header.sobre-voluntarias") },
            ]}
            onMenuItemClick={closeMenu}
            onCloseMenu={closeMenu}
          />
          <MenuItem
            href="/join"
            title={t("header.participe")}
            isChecked={pathname.includes("join")}
            hasSubMenu={false}
            onMenuItemClick={closeMenu}
            onCloseMenu={closeMenu}
          />
          <MenuItem
            href="/events"
            title={t("header.eventos")}
            isChecked={pathname.includes("events")}
            hasSubMenu={false}
            onMenuItemClick={closeMenu}
            onCloseMenu={closeMenu}
          />
          <MenuItem
            href="/content"
            title={t("header.noticias")}
            isChecked={pathname.includes("content")}
            hasSubMenu={false}
            onMenuItemClick={closeMenu}
            onCloseMenu={closeMenu}
          />
          <MenuItem
            href="/product"
            title={t("header.producoes")}
            isChecked={pathname.includes("product")}
            hasSubMenu={false}
            onMenuItemClick={closeMenu}
            onCloseMenu={closeMenu}
          />
          {/*<MenuItem
            href="/content"
            title="Notícias"
            isChecked={pathname.includes("content")}
            hasSubMenu={false}
            onMenuItemClick={closeMenu}
            onCloseMenu={closeMenu}
          />*/}
          <MenuItem
            href="/contact"
            title={t("header.contato")}
            isChecked={pathname.includes("contact")}
            hasSubMenu={false}
            onMenuItemClick={closeMenu}
            onCloseMenu={closeMenu}
          />
          <div className="flex items-center">
        <div className="ml-3">
          <select
            className="bg-lightpink text-darkpink px-2 py-1 rounded"
            onChange={(e) => handleChangeLanguage(e.target.value)}
          >
            <option value="pt">PT</option>
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="fr">FR</option>
          </select>
        </div>
        </div>
        </div>
        
      </div>
      <button
        name="menu"
        className="relative group md:hidden"
        onClick={onToggleMenu}
      >
        <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-darkpink ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
          <div className="flex flex-col pt-1 justify-between w-[20px] h-[20px] transform transition-all duration-100 origin-center overflow-hidden group-focus:rotate-0">
            <div className="bg-white h-[2px] w-7 transform transition-all duration-300 group-focus:w-0 delay-75"></div>
            <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:w-0 delay-75"></div>
            <div className="bg-white h-[2px] w-7 transform transition-all duration-300 group-focus:w-0 delay-75"></div>
            <div className=" w-0 h-0  overflow-hidden transform transition-all duration-300 group-focus:w-12 group-focus:h-12 group-focus:-mt-2 delay-150">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6h-6 w-6  text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default TopMenu;
