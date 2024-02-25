import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Logo = () => {
  const router = useRouter();

  const [flag, setFlag] = useState<ChildNode | null>(null);

  useEffect(() => {
    const item = document.getElementById("headlessui-listbox-button-:R2fjcm:");
    setFlag(item.firstChild);
  }, []);

  useEffect(() => {
    setFlag((old) => {
      // @ts-ignore
      old.firstChild.outerHTML = `<img class="flag" src="https://flagsapi.com/${
        router.locale === "it" ? "IT" : ""
      }${router.locale === "en" ? "GB" : ""}/flat/64.png" />`;

      return old;
    });
  }, [router.locale, flag]);

  return (
    <span className="logo">
      <FontAwesomeIcon className="icon" icon={faDatabase} />
      {router.locale === "en" && "Database Project Docs"}
      {router.locale === "it" && "Documentazione Del Progetto di Basi di Dati"}
    </span>
  );
};

export default Logo;
