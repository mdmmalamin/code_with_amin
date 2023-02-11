import React from "react";
import { TbResize } from "react-icons/tb";
import { AiOutlineCode } from "react-icons/ai";
import { VscDebugAlt } from "react-icons/vsc";

const Services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="services">
                <div className="group w-80 lg:w-1/4 border border-metal hover:border-bermuda hover:bg-shadow rounded-lg px-4 py-12 bg-night hover:bg-night/30 relative">
                    <TbResize className="text-3xl group-hover:text-5xl duration-300 -rotate-[30deg] absolute left-2 top-2" />
                    <div>
                        <h1 className="text-3xl font-semibold text-right">
                            Responsive Design
                        </h1>
                        <p className="text-right text-gray-400">
                            I make responsive and pixel-perfect UI
                        </p>
                    </div>
                </div>
                <div className="group w-80 lg:w-1/4 border border-metal hover:border-bermuda hover:bg-shadow rounded-lg px-4 py-12 bg-night hover:bg-night/30 relative">
                    <AiOutlineCode className="text-3xl group-hover:text-5xl duration-300 -rotate-[30deg] absolute left-2 top-2" />
                    <div>
                        <h1 className="text-3xl font-semibold text-right">
                            Web development
                        </h1>
                        <p className="text-right text-gray-400">
                            I build web application with modern technology
                        </p>
                    </div>
                </div>
                <div className="group w-80 lg:w-1/4 border border-metal hover:border-bermuda hover:bg-shadow rounded-lg px-4 py-12 bg-night hover:bg-night/30 relative">
                    <VscDebugAlt className="text-3xl group-hover:text-5xl duration-300 -rotate-[30deg] absolute left-2 top-2" />
                    <div>
                        <h1 className="text-3xl font-semibold text-right">
                            Bug Fixing
                        </h1>
                        <p className="text-right text-gray-400">
                            I fix bug and redesign UI
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
