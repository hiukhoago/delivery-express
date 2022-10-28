import Image from 'next/image';
import React from 'react'
import Slider from "react-slick";
import banner1 from '../../../assets/images/banner/1.jpeg'
import banner2 from '../../../assets/images/banner/2.jpeg'

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <div>
        <Slider {...settings}>
          <div>
            <Image 
              src={banner1}
              width={1920}
              height={900}
              layout='responsive'
              alt='banner'
            />
          </div>
          <div>
            <Image 
              src={banner2}
              width={1920}
              height={900}
              layout='responsive'
              alt='banner'
            />
          </div>

        </Slider>
      </div>
    </>
  )
}

export default Banner