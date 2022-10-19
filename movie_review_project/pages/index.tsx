import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Radio } from "antd";

interface BoxOfficeList {
  nation: string;
}

export default function Home() {
  const apiKey = "b001a74fb346c75e6f384f6e8ca1a3a7";
  const [boxOfficeList, setBoxOfficeList] = useState([]);

  useEffect(() => {
    getBoxOfficeList(null);
  }, []);

  async function getBoxOfficeList(nation: string | null) {
    try {
      const result = await axios({
        method: "GET",
        url: "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",
        params: {
          key: apiKey,
          targetDt: dayjs(new Date()).format("20221018"),
          repNationCd: nation,
        },
      });

      setBoxOfficeList(result.data.boxOfficeResult.dailyBoxOfficeList);
    } catch (error) {
      console.log(error, "error");
    }
  }

  console.log(boxOfficeList);

  function onChangeNation(event: string | null) {
    getBoxOfficeList(event.target.value);
  }

  return (
    <div>
      <Radio.Group defaultValue={null} onChange={onChangeNation}>
        <Radio value={null}>전체</Radio>
        <Radio value="K">국내</Radio>
        <Radio value="F">해외</Radio>
      </Radio.Group>
      {boxOfficeList?.map((data) => (
        <div>{data?.movieNm}</div>
      ))}
    </div>
  );
}
