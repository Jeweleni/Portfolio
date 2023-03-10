import React from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import "./Navbar.css";
import { useState } from "react";
import { FaTools } from "react-icons/fa";


const Navbar = () => {

    const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : "" }>
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={() => setActiveNav("#about")}className={activeNav === "#about" ? "active" : "" } >
        <AiOutlineUser />
      </a>
      <a href="#experience" onClick={() => setActiveNav("#experience")}className={activeNav === "#services" ? "active" : "" }>
        <FaTools/>
      </a>
      <a href="#portfolio" onClick={() => setActiveNav("#portfolio")}className={activeNav === "#portfolio" ? "active" : "" }>
        <BiBook />
      </a>
      {/* <a href="#services" onClick={() => setActiveNav("#services")}className={activeNav === "#services" ? "active" : "" }>
        <RiServiceFill />
      </a> */}
      <a href="#contacts" onClick={() => setActiveNav("#contacts")}className={activeNav === "#contacts" ? "active" : "" }>
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Navbar;
