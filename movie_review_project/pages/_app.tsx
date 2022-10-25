import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../src/layout/hader";
import "tailwindcss/tailwind.css";
import "antd/dist/antd.css";
import Layout from "../src/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
