import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

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
    dots: false,
    infinite: true,
    speed: 500,
    // autoplay: true,
    // autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    variableWidth: true,
    vertical: false,
  };

  return (
    <>
      <Slider {...settings} width={"50%"}>
        {popularList?.map((data) => (
          <div className="p-[10px]">
            <div className="w-[100%] h-[100%] flex justify-center items-center">
              <Image
                src={posterBaseUrl + data.poster_path}
                alt={""}
                quality={50}
                width={400}
                height={300}
              />
            </div>
          </div>
        ))}
      </Slider>
      <div className="bg-red-400 flex justify-center min-h-screen">
        <div className=" w-[70%] h-[300px] bg-neutral-700">테스트</div>
      </div>
    </>
  );
}
