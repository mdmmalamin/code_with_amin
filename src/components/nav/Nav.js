import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { VscNotebook } from "react-icons/vsc";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#");
    let url = "";
    return (
        <nav className="text-bermuda">
            <a
                onClick={() => setActiveNav({ url })}
                className={activeNav === { url } ? "active" : ""}
                href={url}
            >
                <AiOutlineHome />
            </a>
            <a
                onClick={() => setActiveNav("#about")}
                className={activeNav === "#about" ? "active" : ""}
                href="#about"
            >
                <AiOutlineUser />
            </a>
            <a
                onClick={() => setActiveNav("#experience")}
                className={activeNav === "#experience" ? "active" : ""}
                href="#experience"
            >
                <VscNotebook />
            </a>
            <a
                onClick={() => setActiveNav("#services")}
                className={activeNav === "#services" ? "active" : ""}
                href="#services"
            >
                <RiServiceLine />
            </a>
            <a
                onClick={() => setActiveNav("#contact")}
                className={activeNav === "#contact" ? "active" : ""}
                href="#contact"
            >
                <BiMessageSquareDetail />
            </a>
        </nav>
    );
};

export default Nav;
