import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../src/layout";
import "antd/dist/antd.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
