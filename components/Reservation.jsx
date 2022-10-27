import React from "react";
import Input from "./form/Input";
import Title from "./ui/Title";
import { FaTabletAlt } from "react-icons/fa";
import data from "./MOCK_DATA.json"

const Reservation = (props) => {
    const inputs = data

    return (
        <div className="container mx-auto py-12">
            <Title className="text-[40px] mb-10">Book A Table</Title>
            <div className="flex justify-between md:flex-wrap flex-wrap-reverse gap-10 sm:px-4 px-1">
                <div className="lg:flex-1 w-full">
                    <div className="flex flex-col gap-y-3">
                        {inputs.map((input) => (
                            <Input
                                key={input.id}
                                {...input}
                                className={`${input.id === 1 ? "lg:rounded-tl-[30px] rounded-none" : ""
                                    }${input.type === "datetime-local" ? "h-16 pt-5" : ""} 
                                    `}
                            />
                        ))}
                    </div>
                    <div className="mt-4">
                        {" "}
                        <buton className="btn-primary flex justify-center items-center gap-x-4">
                            Book Now
                            <FaTabletAlt />
                        </buton>
                    </div>
                </div>
                <div className="lg:flex-1  w-full sm:h-[384px] h-[200px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.95410694685!2d2.276995235800795!3d48.85883363930114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20Fransa!5e0!3m2!1str!2str!4v1666180324435!5m2!1str!2str"
                        allowFullScreen={true}
                        loading="lazy"
                        className="h-full w-full lg:rounded-tr-[30px] lg:rounded-br-[30px] rounded-none"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Reservation;
