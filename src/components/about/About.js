import React from "react";
import Me from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { RiFolderChartFill } from "react-icons/ri";

const About = () => {
    return (
        <section id="about" className="text-center">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="about">
                <div className="basis-1/2">
                    <div className="bg-img">
                        <img
                            className="about-img hover:bg-shadow"
                            src={Me}
                            alt="Amin"
                        />
                    </div>
                </div>
                <div className="basis-1/2 px-12 mx-auto">
                    <div className="about-card">
                        <div className="card">
                            <FaAward className="mx-auto text-3xl" />
                            <h2 className="title"> Experience </h2>
                            <p> 1 + years working </p>
                        </div>
                        <div className="card">
                            <FaUsers className="mx-auto text-3xl" />
                            <h2 className="title"> Clients </h2>
                            <p> 5 + worldwide clients </p>
                        </div>
                        <div className="card">
                            <RiFolderChartFill className="mx-auto text-3xl" />
                            <h2 className="title"> Projects </h2>
                            <p> 10 + completed </p>
                        </div>
                    </div>
                    <p className="py-8 text-lg text-silver select-none">
                        Hello there!I 'm a Mern Stack Developer, and I' m very
                        passionate and dedicated to my work.With 2 years of
                        experience as a professional Web Developer, I have the
                        skills and knowledge necessary to make your business
                        successful.I enjoy every step of project development
                        process.
                    </p>
                    <a
                        href="#contact"
                        className="border border-bermuda bg-bermuda hover:bg-transparent hover:bg-shadow rounded-sm px-8 py-2"
                    >
                        Let 's Talk
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
