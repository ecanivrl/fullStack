import Image from "next/image";
import React from "react";
import Title from "./ui/Title";
import Slider from "react-slick";

const Carosel = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 3500,
        customPaging: (i) => <div className="w-3 h-3 bg-white rounded-full"></div>,
    };

    return (
        <div className="h-screen w-full container mx-auto -mt-[88px]">
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="relative h-full w-full">
                    <Image
                        src="/images/newcarol.jpg"
                        alt="carosel"
                        objectFit="cover"
                        layout="fill"
                    />
                </div>
            </div>
            <Slider {...settings}>
                <div>
                    <div className="mt-48 text-white flex flex-col items-start gap-y-10 sm-px-0 px-5">
                        <Title
                            className="text-6xl underline underline-offset-8 decoration-secondary hover:text-secondary
                        hover:decoration-white"
                        >
                            Vip Food
                        </Title>
                        <p className="text-sm sm:w-2/5 w-full">
                            With the design, software and project management team of 115
                            people in our USA, Canada, Italy and Turkey offices, local brands
                            in Turkey and strong companies in the global world; We produce
                            design and software solutions for brand, logo, corporate identity
                            design, event management, website, digital transformation and
                            software projects, e-commerce projects, mobile applications and
                            games. In addition, by adhering to these services, we work to
                            develop strategies for customer needs in the fields of advertising
                            and media.
                        </p>
                        <button className="btn-primary">Order now</button>
                    </div>
                </div>
                <div>
                    <div className="mt-48 text-white flex flex-col items-start gap-y-10 sm-px-0 px-5">
                        <Title className="text-6xl underline underline-offset-8 decoration-secondary">
                            Vip Food
                        </Title>
                        <p className="text-sm sm:w-2/5 w-full">
                            With the design, software and project management team of 115
                            people in our USA, Canada, Italy and Turkey offices, local brands
                            in Turkey and strong companies in the global world; We produce
                            design and software solutions for brand, logo, corporate identity
                            design, event management, website, digital transformation and
                            software projects, e-commerce projects, mobile applications and
                            games. In addition, by adhering to these services, we work to
                            develop strategies for customer needs in the fields of advertising
                            and media.
                        </p>
                        <button className="btn-primary">Order now</button>
                    </div>
                </div>
                <div>
                    <div className="mt-48 text-white flex flex-col items-start gap-y-10 sm-px-0 px-5">
                        <Title className="text-6xl underline underline-offset-8 decoration-secondary">
                            Vip Food
                        </Title>
                        <p className="text-sm sm:w-2/5 w-full">
                            With the design, software and project management team of 115
                            people in our USA, Canada, Italy and Turkey offices, local brands
                            in Turkey and strong companies in the global world; We produce
                            design and software solutions for brand, logo, corporate identity
                            design, event management, website, digital transformation and
                            software projects, e-commerce projects, mobile applications and
                            games. In addition, by adhering to these services, we work to
                            develop strategies for customer needs in the fields of advertising
                            and media.
                        </p>
                        <button className="btn-primary">Order now</button>
                    </div>
                </div>
                <div>
                    <div className="mt-48 text-white flex flex-col items-start gap-y-10 sm-px-0 px-5">
                        <Title className="text-6xl underline underline-offset-8 decoration-secondary">
                            Vip Food
                        </Title>
                        <p className="text-sm sm:w-2/5 w-full">
                            With the design, software and project management team of 115
                            people in our USA, Canada, Italy and Turkey offices, local brands
                            in Turkey and strong companies in the global world; We produce
                            design and software solutions for brand, logo, corporate identity
                            design, event management, website, digital transformation and
                            software projects, e-commerce projects, mobile applications and
                            games. In addition, by adhering to these services, we work to
                            develop strategies for customer needs in the fields of advertising
                            and media.
                        </p>
                        <button className="btn-primary">Order now</button>
                    </div>
                </div>
                <div>
                    <div className="mt-48 text-white flex flex-col items-start gap-y-10 sm-px-0 px-5">
                        <Title className="text-6xl underline underline-offset-8 decoration-secondary">
                            Vip Food
                        </Title>
                        <p className="text-sm sm:w-2/5 w-full">
                            With the design, software and project management team of 115
                            people in our USA, Canada, Italy and Turkey offices, local brands
                            in Turkey and strong companies in the global world; We produce
                            design and software solutions for brand, logo, corporate identity
                            design, event management, website, digital transformation and
                            software projects, e-commerce projects, mobile applications and
                            games. In addition, by adhering to these services, we work to
                            develop strategies for customer needs in the fields of advertising
                            and media.
                        </p>
                        <button className="btn-primary">Order now</button>
                    </div>
                </div>
                <div>
                    <div className="mt-48 text-white flex flex-col items-start gap-y-10 sm-px-0 px-5">
                        <Title className="text-6xl underline underline-offset-8 decoration-secondary">
                            Vip Food
                        </Title>
                        <p className="text-sm sm:w-2/5 w-full">
                            With the design, software and project management team of 115
                            people in our USA, Canada, Italy and Turkey offices, local brands
                            in Turkey and strong companies in the global world; We produce
                            design and software solutions for brand, logo, corporate identity
                            design, event management, website, digital transformation and
                            software projects, e-commerce projects, mobile applications and
                            games. In addition, by adhering to these services, we work to
                            develop strategies for customer needs in the fields of advertising
                            and media.
                        </p>
                        <button className="btn-primary">Order now</button>
                    </div>
                </div>
                <div>
                    <div className="mt-48 text-white flex flex-col items-start gap-y-10 sm-px-0 px-5">
                        <Title className="text-6xl underline underline-offset-8 decoration-secondary">
                            Vip Food
                        </Title>
                        <p className="text-sm sm:w-2/5 w-full">
                            With the design, software and project management team of 115
                            people in our USA, Canada, Italy and Turkey offices, local brands
                            in Turkey and strong companies in the global world; We produce
                            design and software solutions for brand, logo, corporate identity
                            design, event management, website, digital transformation and
                            software projects, e-commerce projects, mobile applications and
                            games. In addition, by adhering to these services, we work to
                            develop strategies for customer needs in the fields of advertising
                            and media.
                        </p>
                        <button className="btn-primary">Order now</button>
                    </div>
                </div>
                <div>
                    <div className="mt-48 text-white flex flex-col items-start gap-y-10 sm-px-0 px-5">
                        <Title className="text-6xl underline underline-offset-8 decoration-secondary">
                            Vip Food
                        </Title>
                        <p className="text-sm sm:w-2/5 w-full">
                            With the design, software and project management team of 115
                            people in our USA, Canada, Italy and Turkey offices, local brands
                            in Turkey and strong companies in the global world; We produce
                            design and software solutions for brand, logo, corporate identity
                            design, event management, website, digital transformation and
                            software projects, e-commerce projects, mobile applications and
                            games. In addition, by adhering to these services, we work to
                            develop strategies for customer needs in the fields of advertising
                            and media.
                        </p>
                        <button className="btn-primary">Order now</button>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Carosel;
