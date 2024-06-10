import Layout from "../../Layout/Layout";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MiniGallery = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <Layout>
      <h2 className="font-bold">갤러리</h2>
      <Slider {...settings} className="">
        <div className="bg-blue-2 h-48 pr-5">1</div>
        <div className="bg-blue-2 h-48">2</div>
        <div className="bg-blue-2 h-48">3</div>
        <div>d
          <h3>더보dd기</h3>
        </div>
      </Slider>
      
    </Layout>
  );
};

export default MiniGallery;
