// slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";

const ImgSlider = ({images, togglePostModal}) => {
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    width: "100%",
  };
  return (
    <Slider {...sliderSettings}>
      {images.map((img, i) => (
        <div className={"postImg"} key={"image_" + i}>
          <img onClick={togglePostModal} src={img} alt={"image_" + i} />
        </div>
      ))}
    </Slider>
  );
};

export default ImgSlider;
