import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const config: DocsThemeConfig = {
  logo: <span>Database Project Docs</span>,

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
