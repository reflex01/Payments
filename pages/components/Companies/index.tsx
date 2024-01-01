"use client"
import React, { Component } from "react";
import Slider from "react-slick";

// IMAGES DATA FOR CAROUSEL
interface Data {
    imgSrc: string;
}

const data: Data[] = [
    {
        imgSrc: "/images/Companies/shopify.svg"
    },
    {
        imgSrc: "/images/Companies/prestashop.svg"
    },
    {
        imgSrc: "/images/Companies/magento.svg"
    },
    {
        imgSrc: "/images/Companies/wordpress.svg"
    },
]


// CAROUSEL SETTINGS
export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 4, // increase this to show more slides at a time
            slidesToScroll: 4,
            arrows: false,
            autoplay: true,
            speed: 100,
            autoplaySpeed: 1000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3, // increase this to show more slides at a time on larger screens
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2, // increase this to show more slides at a time on medium screens
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1, // increase this to show more slides at a time on small screens
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <section style={{marginTop: "0", paddingTop: "0"}}>
            <div className='text-center mb-12'>
            <h3 className='text-offwhite text-3xl md:text-5xl font-bold mb-3'>Integrations with major platforms</h3>
            </div>
            <Slider {...settings}>
                {data.map((item, index) => (
                    <div key={index} className="carousel-item">
                        <img src={item.imgSrc} className="icon" alt="icon" />
                    </div>
                ))}
            </Slider>
            </section>
        );
    }
}
