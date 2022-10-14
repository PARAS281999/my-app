import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase:"linear",
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 500,
    pauseOnHover: false,
  };
  return (
    <div className="card-wrapper">
         <Slider {...settings}>
      <div className="card-image">
        <img src="https://media.zigcdn.com/media/model/2018/May/porsche-carrera-gt-right_320x160.jpg" />
      </div>
      <div className="card-image">
        <img src="https://m.atcdn.co.uk/a/media/8e47b229373043e8b13ebbbbbafa93cf.jpg" />
      </div>
      <div className="card-image">
        <img src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F01%2F2005-porsche-carrera-gt-bring-a-trailer-auction-record-2m-usd-tw.jpg?w=960&cbr=1&q=90&fit=max" />
      </div>
      <div className="card-image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8yz3x6M9_cSVouUx8X1AfTilGDZ8jaVxG8g&usqp=CAU" />
      </div>
      <div className="card-image">
        <img src="https://www.yenikoymotors.com/img/araclar/1856/73.jpg" />
      </div>
      <div className="card-image">
        <img src="https://c8.alamy.com/comp/2DE5MB8/yellow-ferrari-458-italia-spider-at-raf-benson-oxfordshire-uk-2DE5MB8.jpg" />
      </div>
    </Slider>
    </div>
 
  );
}