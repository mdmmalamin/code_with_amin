import React from "react";
import portfolio1 from "../../assets/portfolio1.png";
import portfolio2 from "../../assets/portfolio2.jpg";
import portfolio3 from "../../assets/portfolio3.jpg";
import portfolio4 from "../../assets/portfolio4.jpg";
import portfolio5 from "../../assets/portfolio5.png";

const Portfolio = () => {
    const works = [
        {
            img: portfolio1,
            title: "Devs Den BD",
            code: "https://github.com/devsdenbd/inhouse_web",
            live: "http://devsdenbd.com/",
        },
        {
            img: portfolio5,
            title: "Moto Plex",
            code: "https://www.github.com",
            live: "https://www.github.com",
        },
        {
            img: portfolio2,
            title: "Web Lesson",
            code: "https://www.github.com",
            live: "https://www.github.com",
        },
        {
            img: portfolio3,
            title: "Doctors Portal",
            code: "https://www.github.com",
            live: "https://www.github.com",
        },
        {
            img: portfolio4,
            title: "Dragon News",
            code: "https://www.github.com",
            live: "https://www.github.com",
        },
    ];
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="portfolio">
                {works.map((work, idx) => (
                    <article className="work" key={idx} work={work}>
                        <div>
                            <img
                                className="rounded-xl"
                                src={work.img}
                                alt={work.title}
                            />
                        </div>
                        <h3>{work.title}</h3>
                        <div>
                            <a
                                className="btn mr-4"
                                href={work.code}
                                rel="noreferrer"
                            >
                                Github
                            </a>
                            <a
                                className="btn"
                                href={work.live}
                                rel="noreferrer"
                            >
                                Live
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
