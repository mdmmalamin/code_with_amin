import React, { useRef } from "react";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { TbBrandMessenger } from "react-icons/tb";
import { BsWhatsapp } from "react-icons/bs";

import emailjs from "emailjs-com";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_j0f3v1a",
                "template_gzf8pwe",
                form.current,
                "eDhBoI3Lq3Jm2NB71"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    };
    return (
        <section id="contact">
            <h5> Get To Touch </h5> <h2> Contact Me </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:w-3/4 mx-auto my-24">
                <div className="text-center">
                    <article className="w-80 mx-auto flex flex-col justify-center items-center text-center gap-2 bg-night hover:bg-night/30 hover:bg-shadow hover:border hover:border-night rounded-3xl p-6">
                        <MdOutlineMarkEmailUnread className="text-2xl text-bermuda mb-3" />
                        <h4> Email </h4>
                        <h6 className="text-gray-300">mdmmalamin@gmail.com</h6>
                        <a
                            href="mailto:mdmmalmain@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm text-bermuda hover:text-white"
                        >
                            Send a message
                        </a>
                    </article>
                    <article className="w-80 mx-auto flex flex-col justify-center items-center text-center gap-2 bg-night hover:bg-night/30 hover:bg-shadow hover:border hover:border-night rounded-3xl p-6 my-8">
                        <TbBrandMessenger className="text-2xl text-bermuda mb-3" />
                        <h4> Messenger </h4>
                        <h6 className="text-gray-300">mdmmalamin</h6>
                        <a
                            href="https://m.me/mdmmalamin"
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm text-bermuda hover:text-white"
                        >
                            Send a message
                        </a>
                    </article>
                    <article className="w-80 mx-auto flex flex-col justify-center items-center text-center gap-2 bg-night hover:bg-night/30 hover:bg-shadow hover:border hover:border-night rounded-3xl p-6">
                        <BsWhatsapp className="text-2xl text-bermuda mb-3" />
                        <h4> WhatsApp </h4>
                        <h6 className="text-gray-300">+880 17305 53105</h6>
                        <a
                            href="https://wa.me/+8801730553105"
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm text-bermuda hover:text-white"
                        >
                            Send a message
                        </a>
                    </article>
                </div>
                <form
                    className="lg:col-span-2 contact"
                    ref={form}
                    onSubmit={sendEmail}
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Full Name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                    />
                    <textarea
                        name="message"
                        rows="7"
                        placeholder="Your Message"
                        required
                    ></textarea>
                    <button type="submit" className="btn bg-bermuda">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
