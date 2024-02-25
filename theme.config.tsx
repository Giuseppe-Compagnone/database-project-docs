import React, { useEffect } from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/router";
import { Logo } from "./components";

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Docs",
    };
  },
  logo: <Logo />,
  i18n: [
    { locale: "en", text: "English" },
    { locale: "it", text: "Italiano" },
  ],
  head: (
    <>
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    </>
  ),
  footer: {
    text: (
      <div className="footer">
        <span>Author: Giuseppe Compagnone</span>
        <FontAwesomeIcon
          onClick={() => {
            window.open("https://github.com/Giuseppe-Compagnone");
          }}
          className="github-icon"
          icon={faGithub}
        />
      </div>
    ),
  },
};

export default config;
