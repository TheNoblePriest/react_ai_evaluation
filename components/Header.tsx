import {
  AcademicCapIcon,
  Bars3BottomLeftIcon,
  ChartBarIcon,
  HomeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

function Header() {
  const router = useRouter();
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className=" w-full fixed bg-purple-800 ">
      <div className=" relative px-5 w-full flex duration-200  h-[80px] justify-between items-center ">
        <div className="">
          {sidebar ? (
            <div className=" grid  grid-cols-5 absolute   top-0 left-0  w-full h-screen ">
              <div className="md:col-span-1 col-span-4 px-4 h-full bg-white opacity-90">
                <div className=" flex px-5 justify-start items-center h-[80px] w-full">
                  <XMarkIcon
                    onClick={() => setSidebar(!sidebar)}
                    className=" w-8 "
                  />
                  <Image
                    className="ml-6"
                    src="/logo2.gif"
                    height={50}
                    width={50}
                    alt="..."
                  />
                </div>
                <div className="px-2 h-[70%] mb-10 space-y-2">
                  <div className="flex  hover:scale-105  justify-start items-center  font-bold text-sm mt-2 bg-purple-800 cursor-pointer w-full   duration-200 px-2 rounded-lg   ">
                    <Image
                      className="mr-3"
                      width={20}
                      height={20}
                      src="/search1.gif"
                      alt=".."
                    />
                    <input
                      placeholder="Search"
                      className="p-2 text-white bg-transparent flex-1 outline-none"
                      type="text"
                    />
                  </div>
                  <h1
                    onClick={() => router.push("/")}
                    className="flex  hover:scale-105  justify-start items-center  font-bold text-xs  cursor-pointer w-full   duration-200 p-2 rounded-lg   "
                  >
                    <Image
                      className="mr-3"
                      width={20}
                      height={20}
                      src="/home1.gif"
                      alt=".."
                    />
                    {""}
                    Home
                  </h1>
                  <h1 className="flex hover:scale-105 items-center   font-bold text-xs  cursor-pointer w-full   duration-200 rounded-lg p-2 ">
                    <Image
                      className="mr-3"
                      width={20}
                      height={20}
                      src="/chart1.gif"
                      alt=".."
                    />
                    {""}
                    Teacher
                  </h1>
                  <h1 className="flex hover:scale-105   justify-start items-center  font-bold text-xs  cursor-pointer w-full   duration-200 p-2 rounded-lg  ">
                    <Image
                      className="mr-4"
                      width={20}
                      height={20}
                      src="/setting1.gif"
                      alt=".."
                    />
                    {""}
                    Setting
                  </h1>
                  <h1
                    onClick={() => router.push("/student/dashboard")}
                    className="flex hover:scale-105   justify-start items-center  font-bold text-xs  cursor-pointer w-full   duration-200 p-2 rounded-lg  "
                  >
                    <Image
                      className=" mr-5"
                      width={20}
                      height={20}
                      src="/user1.gif"
                      alt=".."
                    />
                    {""}
                    Student
                  </h1>
                  <h1 className="flex hover:scale-105  justify-start items-center  font-bold text-xs  cursor-pointer w-full   duration-200 p-2 rounded-lg  ">
                    <Image
                      className=" mr-5"
                      width={20}
                      height={20}
                      src="/message.gif"
                      alt=".."
                    />{" "}
                    Message
                  </h1>
                  <h1 className="flex hover:scale-105  justify-start items-center  font-bold text-xs  cursor-pointer w-full   duration-200 p-2 rounded-lg  ">
                    <Image
                      className=" mr-5"
                      width={20}
                      height={20}
                      src="/notif.gif"
                      alt=".."
                    />{" "}
                    Notification
                  </h1>
                </div>
                <div className=" mt-10 space-y-4 text-white flex justify-center items-center flex-col  ">
                  <button className=" w-[200px] text-xs border-2 rounded-xl text-white px-10 py-3 bg-purple-800">
                    Login
                  </button>
                  {/* <button className=" w-[200px] text-xs  px-10 py-3 border-2 text-white bg-purple-800   rounded-xl ">
                    Sign Up
                  </button> */}
                </div>
              </div>

              <div
                onClick={() => setSidebar(!sidebar)}
                className="col-span-1 md:col-span-4 opacity-20 bg-black"
              ></div>
            </div>
          ) : (
            <div></div>
          )}

          <div className="flex justify-center p-4 w-full items-center">
            {/* <div className=""> */}
            <Bars3BottomLeftIcon
              onClick={() => setSidebar(!sidebar)}
              className=" cursor-pointer text-white w-6"
            />

            <Image
              className=" ml-6"
              src="/logo2.gif"
              height={50}
              width={50}
              alt="..."
            />
            {/* </div> */}
          </div>
        </div>

        <div className=" text-white space-x-2">
          <button
            onClick={() => router.push("/login/signin")}
            className=" text-sm w-[100px] border-2 rounded-xl py-1 px-2"
          >
            Login
          </button>
          {/* <button className=" text-sm border-2 w-[100px] bg-white text-blue-500 rounded-xl px-2 py-1">
            Sign Up
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
