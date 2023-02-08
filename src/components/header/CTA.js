import React from "react";
import CV from "../../assets/Amin_CV.pdf";

const CTA = () => {
    return (
        <div className="flex justify-center gap-8 my-8">
            <a
                href={CV}
                download
                className="border border-purple hover:bg-purple rounded-sm px-8 py-2"
            >
                Download CV
            </a>
            <a
                href="#contact"
                className="border border-purple bg-purple hover:bg-transparent rounded-sm px-8 py-2 "
            >
                Let's Talk
            </a>
        </div>
    );
};

export default CTA;
