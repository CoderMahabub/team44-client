import React from "react";
import Slider from "react-slick";

const AboutUsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    <div className="aboutSliderContainer">
      <h2 className="ourTeamTitle">Our Team Members</h2>
      <Slider {...settings}>
        <div className="teamCardContainer">
          <img
            className="sliderImg"
            src="https://i.ibb.co/BCc9GfM/IMG20210514184103copafafy.jpg"
            alt=""
          />
          <h3 className="sliderName">Muhammad Jahid</h3>
          <h6 className="sliderDes">Full Stack MERN Developer</h6>
          <button className="sliderBtn">Know More</button>
        </div>
        <div>
          <img
            className="sliderImg"
            src="https://shrouded-peak-33287.herokuapp.com/images/1639815076891IMG_5560-removebg-preview.png"
            alt=""
          />
          <h3 className="sliderName">Mahabub Azam</h3>
          <h6 className="sliderDes">Full Stack MERN Developer</h6>
          <button className="sliderBtn">Know More</button>
        </div>
        <div>
          <img
            className="sliderImg"
            src="https://scontent.fdac7-1.fna.fbcdn.net/v/t31.18172-8/18673225_1289378181171402_7658441160911183210_o.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_eui2=AeECg3bSQ3TbzfCuMr6mYJU4c5WcbUQsUThzlZxtRCxROEonS03LhcFYnxnIXohKczJWlPmWrpcGX5sTckC59l0N&_nc_ohc=ZxoWf6vv5hcAX8MEknF&_nc_ht=scontent.fdac7-1.fna&oh=00_AT9YQjsR1MupXLDwV5IAFgArnXeapD248AKpP9O8gAQ7kA&oe=61FB1F11"
            alt=""
          />
          <h3 className="sliderName">Azad Tamal</h3>
          <h6 className="sliderDes">Full Stack MERN Developer</h6>
          <button className="sliderBtn">Know More</button>
        </div>
        <div>
          <img
            className="sliderImg"
            src="https://scontent.fdac7-1.fna.fbcdn.net/v/t1.6435-9/136118089_1687812148063675_5298673141892725966_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFnBo4EkI7nGr7RaEv7drvbazyJiPad4qZrPImI9p3ipuArSG7vl_YusevtDzS9Gu4pyjNwqvJrs8mFUFYB3OQC&_nc_ohc=3jUlkpubB3UAX9vMkaA&_nc_ht=scontent.fdac7-1.fna&oh=00_AT8I55ZHBeIMmePvqC6krzcTPyMHqzYkRxKSs4WY06K4sA&oe=61FC9A7B"
            alt=""
          />
          <h3 className="sliderName">Mahabub Azam</h3>
          <h6 className="sliderDes">Full Stack MERN Developer</h6>
          <button className="sliderBtn">Know More</button>
        </div>
      </Slider>
    </div>
  );
};

export default AboutUsSlider;
