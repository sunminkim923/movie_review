import { Carousel } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";

export default function Home() {
  const posterBaseUrl = "https://image.tmdb.org/t/p/original";
  const [popularList, setPopularList] = useState([]);

  useEffect(() => {
    getPopularList();
  }, []);

  console.log("popularList", popularList);

  async function getPopularList() {
    try {
      const result = await axios({
        method: "get",
        url: "/movie/popular",
      });
      console.log(result);

      setPopularList(result.data.results);
    } catch (error) {
      console.log(error, "error");
    }
  }

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: false,
    variableWidth: true,
  };

  return (
    <div>
      <div className="w-[100%] h-[500px] bg-black ">
        <Slider {...settings}>
          {popularList?.map((data) => (
            <div className="w-[100%] h-[500px]">
              <img
                className="h-[100%]"
                src={posterBaseUrl + data.poster_path}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* <div className="w-[200px] h-[300px]">
        <img
          className="h-[100%]"
          src={posterBaseUrl + popularList[7]?.poster_path}
        />
      </div> */}

      <div className="bg-red-400 flex justify-center min-h-screen">
        <div className=" w-[70%] h-[300px] bg-neutral-700">테스트</div>
      </div>
    </div>
  );
}
