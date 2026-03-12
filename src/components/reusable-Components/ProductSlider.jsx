import React from "react";
import Slider from "react-slick";
import "./ProductCarousel.css";

const ProductSlider = ({ data }) => {

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: { slidesToShow: 3 }
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1 }
    }
  ]
};

return (

<Slider {...settings}>

{data.map((item) => (

<div key={item.id} className="product-card">

<img src={item.image} alt={item.title} />

<h6>{item.title}</h6>

<p>₹{item.price}</p>

</div>

))}

</Slider>

);
};

export default ProductSlider;