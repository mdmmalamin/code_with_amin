import React from "react";
import CTA from "./CTA";
import me from "../../assets/me.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
    return (
        <header className="text-center leading-7 pt-20 relative">
            <div>
                <h4> Hello, I 'm</h4>
                <h1 className="text-2xl font-semibold">
                    Md Moinur Mahbub Al Amin
                </h1>
                <h5> Mern Stack Developer </h5>

                <CTA />

                <HeaderSocial />

                <div className="mx-auto w-80 h-96 bg-gradient-to-b from-bermuda to-transparent rounded-t-full overflow-hidden mt-16 p-8">
                    <img
                        className="inline-block"
                        src={me}
                        alt="Moinur Mahbub Al Amin"
                    />
                </div>
                <a
                    className="absolute right-0 bottom-20 origin-center rotate-90 text-bermuda text-lg hidden md:block"
                    href="#contact"
                >
                    Scroll Down
                </a>
            </div>
        </header>
    );
};

export default Header;
