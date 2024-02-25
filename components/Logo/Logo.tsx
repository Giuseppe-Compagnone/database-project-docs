import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Logo = () => {
  const router = useRouter();

  return (
    <span className="logo">
      <FontAwesomeIcon className="icon" icon={faDatabase} />
      {router.locale === "en" && "Database Project Docs"}
      {router.locale === "it" && "Documentazione Del Progetto di Basi di Dati"}
    </span>
  );
};

export default Logo;
