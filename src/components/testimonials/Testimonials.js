import React from "react";
import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpg";

// import Swiper core and required modules
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
    const reviews = [
        {
            avatar: avatar1,
            name: "RH Rony",
            review: "I don't rarely like to write reviews, but the Moinur Mahbub truly deserve a standing ovation for their customer support, customization and most importantly, friendliness and professionalism.Many thanks once again for everything and hope that I get to deal with you again in the near future",
        },
        {
            avatar: avatar2,
            name: "Aminul Islam Swapan",
            review: "Development is not an easy job. But Al Amin made it look so easy. He gave me a lot of support to run my business from scratch. Alhamdulillah my business is going very well. I hope we will continue working together in this fashion. Best wishes for you",
        },
        {
            avatar: avatar3,
            name: "Mahbubur Rahman",
            review: "Development is not an easy job. But Al Amin made it look so easy. He gave me a lot of support to run my business from scratch. Alhamdulillah my business is going very well. I hope we will continue working together in this fashion. Best wishes for you",
        },
    ];
    return (
        <section id="testimonials">
            <h5> Review From Clients </h5> <h2> Testimonials </h2>{" "}
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={40}
                slidesPerView={1}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                className="my-24 w-3/5 h-96 rounded-3xl"
            >
                {reviews.map(({ avatar, name, review }, idx) => (
                    <SwiperSlide
                        className="mx-auto bg-purple p-4 md:px-20 md:py-12 rounded-3xl"
                        key={idx}
                        review={review}
                    >
                        <div className="mx-auto">
                            <img
                                className="border-8 border-purple rounded-full mx-auto h-32 w-32"
                                src={avatar}
                                alt={name}
                            />{" "}
                        </div>{" "}
                        <figure className="mx-auto py-4 md:py-8">
                            <figcaption className="text-white py-1">
                                {" "}
                                {name}{" "}
                            </figcaption>{" "}
                            <blockquote className="text-gray-300 text-sm md:text-base italic">
                                "{review}"{" "}
                            </blockquote>{" "}
                        </figure>{" "}
                    </SwiperSlide>
                ))}{" "}
            </Swiper>{" "}
        </section>
    );
};

export default Testimonials;
