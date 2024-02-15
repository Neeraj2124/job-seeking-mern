import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Neeraj Bisht.</div>
      <div>
        <Link to={"https://github.com/Neeraj2124"} target="_blank">
          <FaGithub />
        </Link>
        <Link to={"www.linkedin.com/in/neeraj-bisht-2124neeru"} target="_blank">
          <FaLinkedin />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
