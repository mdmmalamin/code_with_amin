import React from "react";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";

const HeaderSocial = () => {
    return (
        <div className="flex flex-col items-center gap-4 absolute bottom-12 left-0 after:content-[''] after:h-8 after:w-0.5 after:bg-bermuda">
            <a
                href="https://www.linkedin.com/in/mdmmalamin"
                target="_blank"
                rel="noreferrer"
            >
                <BsLinkedin className="text-bermuda" />
            </a>{" "}
            <a
                href="https://github.com/mdmmalamin"
                target="_blank"
                rel="noreferrer"
            >
                <BsGithub className="text-bermuda" />
            </a>{" "}
            <a
                href="https://www.facebook.com/mdmmalamin"
                target="_blank"
                rel="noreferrer"
            >
                <BsFacebook className="text-bermuda" />
            </a>{" "}
        </div>
    );
};

export default HeaderSocial;
