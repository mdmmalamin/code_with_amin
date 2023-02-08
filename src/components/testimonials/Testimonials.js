import React from "react";
import avatar1 from "../../assets/avatar1.jpg";

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review From Clients</h5>
            <h2>Testimonials</h2>

            <div>
                <article className="w-3/4 flex flex-col mx-auto">
                    <div className="mx-auto">
                        <img
                            className="rounded-full mx-auto"
                            src={avatar1}
                            alt=""
                        />
                    </div>
                    <div className="mx-auto">
                        <h5>Name</h5>
                        <p>
                            I don't rarely like to write reviews, but the Ashiq
                            Ahmad truly deserve a standing ovation for their
                            customer support, customization and most
                            importantly, friendliness and professionalism. Many
                            thanks once again for everything and hope that I get
                            to deal with you again in the near future.
                        </p>
                    </div>
                </article>
                <article className="w-3/4 flex flex-col mx-auto">
                    <div className="mx-auto">
                        <img
                            className="rounded-full mx-auto"
                            src={avatar1}
                            alt=""
                        />
                    </div>
                    <div className="mx-auto">
                        <h5>Name</h5>
                        <p>
                            I don't rarely like to write reviews, but the Ashiq
                            Ahmad truly deserve a standing ovation for their
                            customer support, customization and most
                            importantly, friendliness and professionalism. Many
                            thanks once again for everything and hope that I get
                            to deal with you again in the near future.
                        </p>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Testimonials;
