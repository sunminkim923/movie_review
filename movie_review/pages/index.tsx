import { Carousel } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

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

  return (
    <>
      <div className="flex">
        {popularList?.map((data) => (
          <div className=" w-[200px] h-[200px]">
            <img
              src={posterBaseUrl + data.poster_path}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        ))}
      </div>

      <div className="bg-red-400 flex justify-center min-h-screen">
        <div className=" w-[70%] h-[300px] bg-neutral-700">테스트</div>
      </div>
    </>
  );
}
