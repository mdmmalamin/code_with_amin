import React from "react";
import CV from "../../assets/Amin_CV.pdf";

const CTA = () => {
    return (
        <div className="flex justify-center gap-8 my-8">
            <a
                href={CV}
                download
                className="border border-bermuda hover:bg-bermuda rounded-sm px-8 py-2"
            >
                Download CV
            </a>
            <a
                href="#contact"
                className="border border-bermuda bg-bermuda hover:bg-transparent hover:bg-shadow rounded-sm px-8 py-2"
            >
                Let 's Talk
            </a>
        </div>
    );
};

export default CTA;
