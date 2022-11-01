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
        <img src="https://files.porsche.com/filestore/image/multimedia/none/992-gt3-modelimage-sideshot/model/765dfc51-51bc-11eb-80d1-005056bbdc38/porsche-model.png" />
      </div>
      <div className="card-image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx5zb8OoUs5XMuqZCj-HZ7kz1Fw_wFDVHe3mh54YZrYiiDdsDJXMQfwKtVpNyMk4Abww&usqp=CAU" />
      </div>
      <div className="card-image">
        <img src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Ferrari/Ferrari-458-Speciale/2585/1560763589554/front-left-side-47.jpg" />
      </div>
      <div className="card-image">
        <img src="https://360view.hum3d.com/zoom/W-Motors/W-Motors_Lykan_hypersport_2012_1000_0002.jpg" />
      </div>
      <div className="card-image">
        <img src="https://c8.alamy.com/comp/2DE5MB8/yellow-ferrari-458-italia-spider-at-raf-benson-oxfordshire-uk-2DE5MB8.jpg" />
      </div>
    </Slider>
    </div>
 
  );
}