import axios from "axios";
import dayjs from "dayjs";
import { ChangeEvent, useEffect, useState } from "react";
import { Button, Input, Radio } from "antd";

interface BoxOfficeList {
  nation: string;
}

export default function Home() {
  const clientId = "HfFdJg8CoER4nIqrd6pL";
  const clientSecret = "TsmSf6MrKl";

  const apiKey = "b001a74fb346c75e6f384f6e8ca1a3a7";
  const [boxOfficeList, setBoxOfficeList] = useState([]);

  const [name, setName] = useState("");

  useEffect(() => {
    getMovieList();
  }, []);

  async function getMovieList() {
    try {
      const result = await axios({
        method: "get",
        url: "https://openapi.naver.com/v1/search/movie.json",
        headers: {
          "X-Naver-Client-Id": clientId,
          "X-Naver-Client-Secret": clientSecret,
          Host: "openapi.naver.com",
          Accept: "*/*",
          "User-Agent": "curl/7.49.1",
          "Access-Control-Allow-Origin": "*",
        },
        params: {
          query: decodeURIComponent("괴물"),
        },
      });

      console.log(result);
    } catch (error) {
      console.log(error, "error");
    }
  }

  function onChangeName(event: ChangeEvent) {
    setName(decodeURIComponent(event.target.value));
  }
  return (
    <div>
      {/*<Radio.Group defaultValue={null} onChange={onChangeNation}>*/}
      {/*  <Radio value={null}>전체</Radio>*/}
      {/*  <Radio value="K">국내</Radio>*/}
      {/*  <Radio value="F">해외</Radio>*/}
      {/*</Radio.Group>*/}
      <Input onChange={onChangeName} />
      <Button onClick={() => getMovieList()}>검색</Button>
    </div>
  );
}
