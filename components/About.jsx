import Image from "next/image";
import React from "react";
import Title from "./ui/Title";


const About = () => {
    return (
        <div className="bg-primary py-14">
            <div className="container mx-auto flex justify-center items-center gap-x-20 gap-y-10 [@media_(max-width:800px)]:flex-col">
                <div className="w-1/2 h-[600px] [@media_(max-width:800px)]:w-full relative">
                    <Image
                        src={"/images/about-img.png"}
                        alt="about image"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className="w-1/2 text-white [@media_(max-width:800px)]:w-full">
                    <div className="flex flex-col items-start">
                        <Title className="text-[40px]">We Are Feane</Title>
                        <p className="my-5 text-justify">
                            Projelerin UX ve UI odaklı olarak tasarlanması ve müşteri
                            ihtiyaçlarını doğru analiz ederek stratejilerin belirlenmesi
                            konusunda uzman bir ekiple çalışacaksınız!
                        </p>
                        <button className="btn-primary">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
