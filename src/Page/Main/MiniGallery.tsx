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
    <>
      <h2 className="font-bold">갤러리</h2>
  
        <Slider {...settings} className="px-9">
          <div className="pr-5" >
            <img 
              className="w-full"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Siberian-husky.jpg/280px-Siberian-husky.jpg"
            />
          </div>
          <div className="pr-5">
            <img
              className="w-full"
              src="data:image/webp;base64,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"
            />
          </div>
          <div className="pr-5">
            <img
              className="w-full"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Siberian-husky.jpg/280px-Siberian-husky.jpg"
            />
          </div>
        </Slider>
    </>
  );
};

export default MiniGallery;
