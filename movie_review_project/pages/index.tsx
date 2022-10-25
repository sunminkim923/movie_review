import axios, { Method } from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { Button, Input } from "antd";

export default function Home() {
  useEffect(() => {
    getMovieList();
  }, []);

  async function getMovieList() {
    try {
      const result = await axios({
        method: "get",
        url: `/v1/search/movie.json/`,
        headers: {
          "X-Naver-Client-Id": process.env.NEXT_PUBLIC_CLIENT_ID,
          "X-Naver-Client-Secret": process.env.NEXT_PUBLIC_CLIENT_SECRET,
        },
        params: {
          query: "",
        },
      });

      console.log(result, "result");
    } catch (error) {
      console.log(error, "error");
    }
  }

  return (
    <div className="bg-red-400 flex justify-center min-h-screen">
      <div className=" w-[70%] h-[300px] bg-neutral-700">테스트</div>
    </div>
  );
}
