import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Mid2 = () => {
  var data = [
    {
      id: 1,
      image:
        "https://www.sephora.com/productimages/sku/s2619096-main-zoom.jpg?imwidth=166",
      title: "HUDA BEAUTY",
    },
    {
      id: 2,
      image:
        "https://www.sephora.com/productimages/sku/s2596039-main-zoom.jpg?imwidth=166",
      title: "Hourglass",
    },
    {
      id: 3,
      image:
        "https://www.sephora.com/productimages/sku/s2619096-main-zoom.jpg?imwidth=166",
      title: "NARS",
    },
    {
      id: 4,
      image:
        "https://www.sephora.com/productimages/sku/s2622660-main-zoom.jpg?imwidth=166",
      title: "Armani Beauty",
    },
    {
      id: 5,
      image:
        "https://www.sephora.com/productimages/sku/s2594364-main-zoom.jpg?imwidth=166",
      title: "SEPHORA COLLECTION",
    },
    {
      id: 6,
      image:
        "https://www.sephora.com/productimages/sku/s2555811-main-zoom.jpg?imwidth=166",
      title: "RARE BEAUTY OF SELENA ",
    },
    {
      id: 7,
      image:
        "https://www.sephora.com/productimages/sku/s2492023-main-zoom.jpg?imwidth=166",
      title: "Too Faced",
    },
    {
      id: 8,
      image:
        "https://www.sephora.com/productimages/sku/s2624872-main-zoom.jpg?imwidth=166",
      title: "Natasha denona",
    },
    {
      id: 9,
      image:
        "https://www.sephora.com/product/pillow-talk-beautifying-lip-set-P501333?icid2=homepage_productlist_chosenforyou_us_rwd_092022",
      title: "Sol de janerio",
    },
    {
      id: 10,
      image:
        "https://www.sephora.com/productimages/sku/s2614840-main-zoom.jpg?imwidth=166",
      title: "Kosas",
    },
    {
      id: 11,
      image:
        "https://www.sephora.com/productimages/sku/s2518959-main-zoom.jpg?pb=allure-2022-bestofbeauty-badge&imwidth=166",
      title: "Sephora Collection",
    },
    {
      id: 12,
      image:
        "https://www.sephora.com/productimages/sku/s2288090-main-zoom.jpg?imwidth=166",
      title: "Huda Beauty",
    },
    {     id: 13,
      image:
        "https://www.sephora.com/productimages/sku/s2614733-main-zoom.jpg?imwidth=166",
      title: "",
    },
    {       id: 14,
      image:
        "https://www.sephora.com/productimages/sku/s2514586-main-zoom.jpg?imwidth=166",
      title: "",
    },
    {       id: 15,
      image:
        "https://www.sephora.com/productimages/sku/s2619088-main-zoom.jpg?imwidth=166",
      title: "",
    },
    {       id: 16,
      image:
        "https://www.sephora.com/productimages/sku/s2563757-main-zoom.jpg?pb=2020-03-sephora-value-2020&imwidth=166",
      title: "",
    },
    {       id: 17,
      image:
        "https://www.sephora.com/productimages/sku/s2625747-main-zoom.jpg?imwidth=166",
      title: "",
    },
    {      id: 18,
      image:
        "https://www.sephora.com/productimages/sku/s2625747-main-zoom.jpg?imwidth=166",
      title: "",
    }]

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Heading fontSize={20} my={10}>Just Dropped</Heading>
      <div
        style={{
          backgroundColor: "wheat",
          padding: "20px",
          width: "99%",
          margin: "auto",
        }}
      >
        <Slider {...settings}>
          {data.map((e) => (
            <div
              className="card"
              style={{
                border: "10px solid White",
                justifyContent: "flex-start",
              }}
              key={e.id}
            >
              <div className="card-top">
                <img src={e.image} />
              </div>
              <div className="card-bottom">
                <h1>
                  <b>{e.title}</b>
                </h1>
                {/* <p>{e.t2}</p> */}
              </div>
              {/* <h2>
                <b>SHOP NOW▸</b>
              </h2> */}
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Mid2;
