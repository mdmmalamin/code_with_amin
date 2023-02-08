import React from "react";
import { TbCertificate } from "react-icons/tb";

const Experience = () => {
    const frontendSkills = [
        { skill: "HTML", progress: "Experienced" },
        { skill: "CSS", progress: "Intermediate" },
        { skill: "JavaScript", progress: "Experienced" },
        { skill: "Bootstrap", progress: "Experienced" },
        { skill: "Tailwindcss", progress: "Experienced" },
        { skill: "React", progress: "Experienced" },
        { skill: "jQuery", progress: "Intermediate" },
    ];

    const backendSkills = [
        { skill: "NodeJs", progress: "Intermediate" },
        { skill: "ExpressJs", progress: "Intermediate" },
        { skill: "MongoDB", progress: "Intermediate" },
    ];

    return (
        <section id="experience">
            <h5>Get To Know</h5>
            <h2>My Experience</h2>

            <div className="flex flex-col lg:flex-row justify-around gap-24 mx-4 md:mx-0 my-24 lg:m-24 select-none">
                {/* front-end developer */}
                <div className="experience">
                    <h3 className="text-bermuda">Frontend Developer</h3>
                    <div className="all-skill">
                        {frontendSkills.map((skill, idx) => (
                            <article key={idx} skill={skill}>
                                <TbCertificate className="icon" />
                                <div className="skill">
                                    <h4>{skill.skill}</h4>
                                    <small>{skill.progress}</small>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/* back-end developer */}
                <div className="experience">
                    <h3 className="text-bermuda">Backend Developer</h3>
                    <div className="grid grid-cols-2 items-center mt-12">
                        {backendSkills.map((skill, idx) => (
                            <article key={idx} skill={skill}>
                                <TbCertificate className="icon" />
                                <div className="skill">
                                    <h4>{skill.skill}</h4>
                                    <small>{skill.progress}</small>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
