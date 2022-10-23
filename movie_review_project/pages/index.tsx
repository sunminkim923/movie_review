import axios from "axios";
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
  const url = "";

  const [name, setName] = useState("");

  useEffect(() => {
    // getMovieList();
  }, []);

  async function getMovieList() {
    console.log(process.env.NEXT_PUBLIC_URL, "url");
    try {
      const result = await axios({
        method: "get",
        url: `${process.env.NEXT_PUBLIC_URL}/search/movie.json`,
        headers: {
          "X-Naver-Client-Id": process.env.NEXT_PUBLIC_CLIENT_ID,
          "X-Naver-Client-Secret": process.env.NEXT_PUBLIC_CLIENT_SECRET,
        },
        params: {
          query: "%EB%A6%AC%EB%B7%B0",
        },
      });

      console.log(result, "result");
    } catch (error) {
      console.log(error, "error");
    }
  }

  function onChangeName(event: ChangeEvent<HTMLInputElement>) {
    setName(decodeURIComponent(event.currentTarget.value));
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
