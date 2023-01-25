import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import Header from "../components/Header";
import Body from "../components/Body";

const Home: NextPage = () => {
  return (
    <div className="w-full overflow-hidden  ">
      <Head>
        <title>AI Generator</title>
        <link rel="icon" href="/category1.gif" />
      </Head>

      <main className=" flex flex-col  h-full">
        <Header />
        <div className="flex-1 ">
          <Body />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
