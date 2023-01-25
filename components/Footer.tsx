import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="bg-purple-800  w-full p-6">
      <div className=" flex justify-between items-center w-full  h-[300px] md:h-[200px] rounded-tl-lg rounded-tr-lg flex-col md:flex-row ">
        <div className="md:w-[50%] p-6 text-white">
          <h1 className=" text-4xl p-2 font-bold">B.I.T Mesra Extention</h1>
          <p className=" p-2">Ranchi Off Campus, 829104</p>
          <p className=" px-2"> Near Lalpur Chock</p>
        </div>
        <div className=" flex justify-center h-full items-center space-x-4 p-4">
          <Image
            className=" cursor-pointer "
            src="/yt.png"
            height={40}
            width={80}
            alt="..."
          />
          <Image
            className=" bg-white rounded-full"
            src="/linkedin.png"
            height={50}
            width={50}
            alt="..."
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
