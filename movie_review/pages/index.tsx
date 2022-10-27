import axios from "axios";

export default function Home() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  async function getPopularList() {
    console.log(apiKey);
    try {
      const result = await axios({
        method: "get",
        url: "https://api.themoviedb.org/3/movie/popular",
        params: {
          api_key: apiKey,
          language: "ko",
        },
      });
      console.log(result);
    } catch (error) {
      console.log(error, "error");
    }
  }

  //localhost:3000/api/movie/popular?api_key=b0b3f86ffd2bec222e6c58bdde742697&language=ko

  http: return (
    <>
      <div className="bg-red-400 flex justify-center min-h-screen">
        <button onClick={getPopularList}>불러오기</button>
        <div className=" w-[70%] h-[300px] bg-neutral-700">테스트</div>
        <button>불러오기2</button>
      </div>
    </>
  );
}
