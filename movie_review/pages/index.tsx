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
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div>
      <div className="flex justify-center bg-black h-[65px] items-center">
        <div className="w-[95%]  text-white text-[30px]">인기영화</div>
      </div>
      <div className="w-[100%] flex justify-center bg-black pb-[35px]">
        <div className="w-[95%]">
          <div className="w-[100%] h-[500px] bg-zinc-900">
            <Slider {...settings}>
              {popularList?.map((data) => (
                <div className="w-[100%] h-[500px] py-[4px] px-[2px] ">
                  <img
                    className="h-[100%]"
                    src={posterBaseUrl + data.poster_path}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className="bg-red-400 flex justify-center min-h-screen">
        <div className=" w-[80%] h-[300px] bg-neutral-700">테스트</div>
      </div>
    </div>
  );
}
