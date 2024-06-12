import Slider from "react-slick";
import Image from "next/image";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      <Image
        src="/images/arrow-right.png"
        alt="Next Arrow"
        width={30} 
        height={30}
      />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      <Image
        src="/images/arrow-left.png"
        alt="Previous Arrow"
        width={30}
        height={30}
      />
    </div>
  );
};

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 750,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="carousel-container bg-black"> {/* Menambahkan kelas bg-black */}
      <Slider {...settings}>
        <div className="carousel-slide">
          <Image
            src="/images/image2.jpg"
            alt="Image 1"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            className="carousel-image"
          />
        </div>
        <div className="carousel-slide">
          <Image
            src="/images/imagee3.png"
            alt="Image 2"
            objectPosition="top"
            layout="fill"
            objectFit="cover"
            className="carousel-image"
          />
        </div>
        <div className="carousel-slide">
          <Image
            src="/images/image4.png"
            alt="Image 3"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            className="carousel-image"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;