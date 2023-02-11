import React from "react";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";

const HeaderSocial = () => {
    return (
        <div className="social">
            <a
                href="https://www.linkedin.com/in/mdmmalamin"
                target="_blank"
                rel="noreferrer"
            >
                <BsLinkedin className="text-bermuda text-xl" />
            </a>
            <a
                href="https://github.com/mdmmalamin"
                target="_blank"
                rel="noreferrer"
            >
                <BsGithub className="text-bermuda text-xl" />
            </a>
            <a
                href="https://www.facebook.com/mdmmalamin"
                target="_blank"
                rel="noreferrer"
            >
                <BsFacebook className="text-bermuda text-xl" />
            </a>
        </div>
    );
};

export default HeaderSocial;
