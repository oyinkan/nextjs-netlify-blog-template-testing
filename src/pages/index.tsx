import Head from "next/head";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Main from "../components/Main";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import Navbar from "../components/Navbar";
import { SocialList } from "../components/SocialList";

export default function Index() {
  return (
    <div className="root">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />

      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
