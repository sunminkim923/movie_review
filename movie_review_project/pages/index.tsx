import axios, { Method } from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { Button, Input } from "antd";

export default function Home() {
  useEffect(() => {
    getPopularMovieList();
  }, []);

  async function getPopularMovieList() {
    try {
      const result = await axios({
        method: "get",
        url: "/api/movie/popular",
      });

      console.log(result);
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
