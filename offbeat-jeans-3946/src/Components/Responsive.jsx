import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const Responsive = () => {
  var data = [
    {
      image:
        "https://www.sephora.com/contentimages/2022-11-11-slotting-value-size-nov-jumbo-standard-site-rwd-home-page-hero-banner-tubes-us-handoff_011.jpg?imwidth=545",

        title:"Fragrance Gifts $75 & Under"
        ,t2:"Sets for everyone on your list (including you!)"
    },
    {
      image:
        "https://www.sephora.com/contentimages/2022-fragrance-q4-site-home-page-rwd-hero-banner-holiday-value-sets-75-under-us-01..jpg?imwidth=545",
        title:"Best of Dior"
        ,t2:"Luxe beauty for everyone on your list. "
    },
   
    {
      image:
        "https://www.sephora.com/contentimages/2022-holiday-launch-general-site-desktop-home-page-hero-banner-rwd-v1-product-us-release-1000x750.jpg?imwidth=545",
        title:"In With the New"
        ,t2:"The latest beauty from the hottest brands. "
    },
    {
      image:
        "https://www.sephora.com/contentimages/2022-holiday-launch-general-site-desktop-home-page-hero-banner-rwd-v1-product-us-release-1000x750.jpg?imwidth=545",
        title:"Value Sets? Obsessed!"
        ,t2:"Limited edition and packed full of products⁠—fun to give, even better to get."
    },
  ];
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
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
          <div className="card" style={{ border: "10px solid White",justifyContent:"flex-start"}}>
            <div className="card-top">
              <img src={e.image} />
            </div>
            <div className="card-bottom">
              <h1><b>{e.title}</b></h1>
              <p>{e.t2}</p>
            </div>
            <h2><b>SHOP NOW▸</b></h2>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Responsive;
