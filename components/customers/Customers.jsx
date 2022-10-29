import React from "react";
import Title from "../ui/Title";
import Slider from "react-slick";
import CustomerItem from "./CustomerItem";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Customers = () => {
    function NextBtn({ onClick }) {
        return (
            <button
                className="absolute -bottom-14 left-1/2 bg-secondary flex items-center justify-center w-10 h-10
            rounded-full text-white"
                onClick={onClick}
            >
                <IoIosArrowForward size={30} />{" "}
            </button>
        );
    }
    function PrevBtn({ onClick }) {
        return (
            <button
                className="absolute -bottom-14 right-1/2 bg-secondary flex items-center justify-center w-10 h-10
            rounded-full text-white mr-2"
                onClick={onClick}
            >
                <IoIosArrowBack size={30} />{" "}
            </button>
        );
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: true,
        nextArrow: <NextBtn />,
        prevArrow: <PrevBtn />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <div className="container mx-auto mb-20 mt-12">
            <Title className="text-center">What Says Our Customers</Title>
          <Slider {...settings}>
              <CustomerItem imgSrc="/images/client1.jpg" />
              <CustomerItem imgSrc="/images/client2.jpg" />
              <CustomerItem imgSrc="/images/client1.jpg" />
              <CustomerItem imgSrc="/images/client2.jpg" />
          </Slider>
      </div>
  );
};

export default Customers;
