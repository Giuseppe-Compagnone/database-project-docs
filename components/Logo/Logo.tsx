import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Logo = () => {
  const router = useRouter();

  const [flag, setFlag] = useState<ChildNode | null>(null);
  const [input, setInput] = useState<ChildNode | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("TIMER");
      if (!flag) {
        const item =
          document.getElementById("headlessui-listbox-button-:R2fjcm:") ||
          document.getElementById("headlessui-listbox-button-:Rjsr6:");
        if (item) {
          setFlag(item.firstChild);
          clearInterval(timer);
        }
      }
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("TIMER");
      if (!flag) {
        const item = document.querySelector(
          "input.nx-block.nx-w-full.nx-appearance-none.nx-rounded-lg.nx-px-3.nx-py-2.nx-transition-colors.nx-text-base.nx-leading-tight"
        );
        if (item) {
          setInput(item);
          clearInterval(timer);
        }
      }
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (flag) {
      setFlag((old) => {
        // @ts-ignore
        old.firstChild.outerHTML = `<img class="flag" src="https://flagsapi.com/${
          router.locale === "it" ? "IT" : ""
        }${router.locale === "en" ? "GB" : ""}/flat/64.png" />`;

        return old;
      });
    }
  }, [router.locale, flag]);

  useEffect(() => {
    if (flag) {
      setInput((old) => {
        // @ts-ignore
        old.placeholder = `${
          router.locale === "it" ? "Cerca nella documentazione..." : ""
        }${router.locale === "en" ? "Search the docs..." : ""}`;

        return old;
      });
    }
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
