import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Head from "next/head";
import { PieChart } from "react-minimal-pie-chart";

function student() {
  return (
    <div className="w-full h-screen">
      <Head>
        <title>AI Generator</title>
        <link rel="icon" href="/category1.gif" />
      </Head>
      <Header />
      <div className="flex-1  pt-20 ">
        <div className="p-10">
          <h1 className="text-5xl font-thin ">Hello, Subham kumar singh</h1>
          <div className="border w-full h-[300px] border-gray-800 mt-7">
            <h1 className="text-3xl font-bold p-2 -mt-8 ml-2 bg-white w-[100px]">
              Result
            </h1>
            <select className="p-2 ml-5 " name="Test" id="">
              <option value="Test 1">Test 1</option>
              <option value="Test 2">Test 2</option>
              <option value="Test 3">Test 3 </option>
            </select>
            <div className="  w-full flex px-10 justify-between items-center">
              <div>
                <PieChart
                  className="w-[200px]"
                  data={[
                    { title: "One", value: 10, color: "rgb(63, 244, 138)" },
                    { title: "Two", value: 15, color: "rgb(235, 243, 6)" },
                    { title: "Three", value: 20, color: "rgb(255, 0, 68)" },
                  ]}
                />
              </div>

              <div></div>
            </div>
          </div>

          <div className=" mt-5">
            <h1 className=" text-3xl font-thin">
              Live Test ----------------------------------------
            </h1>
            <div className="overflow-scroll  scrollbar-hide ">
              <div className="p-5 mt-4 flex w-[200%] justify-start items-center ">
                <div className="space-x-3 space-y-3  col-span-1 flex justify-center items-center flex-col w-[200px] h-[200px] border m-2 shadow-lg rounded-md shadow-purple-800">
                  <div className="flex justify-center items-center flex-col">
                    <h1 className="text-3xl font-light">Class Test</h1>
                    <p className=" text-gray-500 text-xs">
                      Sub: Computer Science
                    </p>
                    <p className="text-gray-500 text-xs">Duration: 2 hour </p>
                  </div>

                  <div className="mt-5 flex justify-center items-center flex-col">
                    <p className="text-sm text-gray-500 m-2">
                      Started 30 second Ago
                    </p>
                    <button className="rounded-lg shadow-lg bg-purple-800 text-white p-2">
                      Attempt
                    </button>
                  </div>
                </div>
                <div className="space-x-3 space-y-3  col-span-1 flex justify-center items-center flex-col w-[200px] h-[200px] border m-2 shadow-lg rounded-md shadow-purple-800">
                  <div className="flex justify-center items-center flex-col">
                    <h1 className="text-3xl font-light">Class Test</h1>
                    <p className=" text-gray-500 text-xs">
                      Sub: Computer Science
                    </p>
                    <p className="text-gray-500 text-xs">Duration: 2 hour </p>
                  </div>

                  <div className="mt-5 flex justify-center items-center flex-col">
                    <p className="text-sm text-gray-500 m-2">
                      Started 30 second Ago
                    </p>
                    <button className="rounded-lg shadow-lg bg-purple-800 text-white p-2">
                      Attempt
                    </button>
                  </div>
                </div>
                <div className="space-x-3 space-y-3  col-span-1 flex justify-center items-center flex-col w-[200px] h-[200px] border m-2 shadow-lg rounded-md shadow-purple-800">
                  <div className="flex justify-center items-center flex-col">
                    <h1 className="text-3xl font-light">Class Test</h1>
                    <p className=" text-gray-500 text-xs">
                      Sub: Computer Science
                    </p>
                    <p className="text-gray-500 text-xs">Duration: 2 hour </p>
                  </div>

                  <div className="mt-5 flex justify-center items-center flex-col">
                    <p className="text-sm text-gray-500 m-2">
                      Started 30 second Ago
                    </p>
                    <button className="rounded-lg shadow-lg bg-purple-800 text-white p-2">
                      Attempt
                    </button>
                  </div>
                </div>
                <div className="space-x-3 space-y-3  col-span-1 flex justify-center items-center flex-col w-[200px] h-[200px] border m-2 shadow-lg rounded-md shadow-purple-800">
                  <div className="flex justify-center items-center flex-col">
                    <h1 className="text-3xl font-light">Class Test</h1>
                    <p className=" text-gray-500 text-xs">
                      Sub: Computer Science
                    </p>
                    <p className="text-gray-500 text-xs">Duration: 2 hour </p>
                  </div>

                  <div className="mt-5 flex justify-center items-center flex-col">
                    <p className="text-sm text-gray-500 m-2">
                      Started 30 second Ago
                    </p>
                    <button className="rounded-lg shadow-lg bg-purple-800 text-white p-2">
                      Attempt
                    </button>
                  </div>
                </div>

                <div className="space-x-3 space-y-3  col-span-1 flex justify-center items-center flex-col w-[200px] h-[200px] border m-2 shadow-lg rounded-md shadow-purple-800">
                  <div className="flex justify-center items-center flex-col">
                    <h1 className="text-3xl font-light">Class Test</h1>
                    <p className=" text-gray-500 text-xs">
                      Sub: Computer Science
                    </p>
                    <p className="text-gray-500 text-xs">Duration: 2 hour </p>
                  </div>

                  <div className="mt-5 flex justify-center items-center flex-col">
                    <p className="text-sm text-gray-500 m-2">
                      Started 30 second Ago
                    </p>
                    <button className="rounded-lg shadow-lg bg-purple-800 text-white p-2">
                      Attempt
                    </button>
                  </div>
                </div>
                <div className="space-x-3 space-y-3  col-span-1 flex justify-center items-center flex-col w-[200px] h-[200px] border m-2 shadow-lg rounded-md shadow-purple-800">
                  <div className="flex justify-center items-center flex-col">
                    <h1 className="text-3xl font-light">Class Test</h1>
                    <p className=" text-gray-500 text-xs">
                      Sub: Computer Science
                    </p>
                    <p className="text-gray-500 text-xs">Duration: 2 hour </p>
                  </div>

                  <div className="mt-5 flex justify-center items-center flex-col">
                    <p className="text-sm text-gray-500 m-2">
                      Started 30 second Ago
                    </p>
                    <button className="rounded-lg shadow-lg bg-purple-800 text-white p-2">
                      Attempt
                    </button>
                  </div>
                </div>
                <div className="space-x-3 space-y-3  col-span-1 flex justify-center items-center flex-col w-[200px] h-[200px] border m-2 shadow-lg rounded-md shadow-purple-800">
                  <div className="flex justify-center items-center flex-col">
                    <h1 className="text-3xl font-light">Class Test</h1>
                    <p className=" text-gray-500 text-xs">
                      Sub: Computer Science
                    </p>
                    <p className="text-gray-500 text-xs">Duration: 2 hour </p>
                  </div>

                  <div className="mt-5 flex justify-center items-center flex-col">
                    <p className="text-sm text-gray-500 m-2">
                      Started 30 second Ago
                    </p>
                    <button className="rounded-lg shadow-lg bg-purple-800 text-white p-2">
                      Attempt
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-5">
            <h1 className=" text-3xl font-thin">
              Upcoming Test ----------------------------------------
            </h1>
            <div className="overflow-scroll scrollbar-hide  ">
              <div className="p-5 mt-4 flex w-[200%] justify-start items-center ">
                <div className="space-x-3 space-y-3  col-span-1 flex justify-center items-center flex-col w-[200px] h-[200px] border m-2 shadow-lg rounded-md shadow-purple-800">
                  <div className="flex justify-center items-center flex-col">
                    <h1 className="text-3xl font-light">Class Test</h1>
                    <p className=" text-gray-500 text-xs">
                      Sub: Computer Science
                    </p>
                    <p className="text-gray-500 text-xs">Duration: 2 hour </p>
                  </div>

                  <div className="mt-5 flex justify-center items-center flex-col">
                    <p className="text-sm text-gray-500 m-2">
                      Started 30 second Ago
                    </p>
                    <button className="rounded-lg shadow-lg bg-purple-800 text-white p-2">
                      Attempt
                    </button>
                  </div>
                </div>
                <div className="space-x-3 space-y-3  col-span-1 flex justify-center items-center flex-col w-[200px] h-[200px] border m-2 shadow-lg rounded-md shadow-purple-800">
                  <div className="flex justify-center items-center flex-col">
                    <h1 className="text-3xl font-light">Class Test</h1>
                    <p className=" text-gray-500 text-xs">
                      Sub: Computer Science
                    </p>
                    <p className="text-gray-500 text-xs">Duration: 2 hour </p>
                  </div>

                  <div className="mt-5 flex justify-center items-center flex-col">
                    <p className="text-sm text-gray-500 m-2">
                      Started 30 second Ago
                    </p>
                    <button className="rounded-lg shadow-lg bg-purple-800 text-white p-2">
                      Attempt
                    </button>
                  </div>
                </div>
                <div className="space-x-3 space-y-3  col-span-1 flex justify-center items-center flex-col w-[200px] h-[200px] border m-2 shadow-lg rounded-md shadow-purple-800">
                  <div className="flex justify-center items-center flex-col">
                    <h1 className="text-3xl font-light">Class Test</h1>
                    <p className=" text-gray-500 text-xs">
                      Sub: Computer Science
                    </p>
                    <p className="text-gray-500 text-xs">Duration: 2 hour </p>
                  </div>

                  <div className="mt-5 flex justify-center items-center flex-col">
                    <p className="text-sm text-gray-500 m-2">
                      Started 30 second Ago
                    </p>
                    <button className="rounded-lg shadow-lg bg-purple-800 text-white p-2">
                      Attempt
                    </button>
                  </div>
                </div>
                <div className="space-x-3 space-y-3  col-span-1 flex justify-center items-center flex-col w-[200px] h-[200px] border m-2 shadow-lg rounded-md shadow-purple-800">
                  <div className="flex justify-center items-center flex-col">
                    <h1 className="text-3xl font-light">Class Test</h1>
                    <p className=" text-gray-500 text-xs">
                      Sub: Computer Science
                    </p>
                    <p className="text-gray-500 text-xs">Duration: 2 hour </p>
                  </div>

                  <div className="mt-5 flex justify-center items-center flex-col">
                    <p className="text-sm text-gray-500 m-2">
                      Started 30 second Ago
                    </p>
                    <button className="rounded-lg shadow-lg bg-purple-800 text-white p-2">
                      Attempt
                    </button>
                  </div>
                </div>

                <div className="space-x-3 space-y-3  col-span-1 flex justify-center items-center flex-col w-[200px] h-[200px] border m-2 shadow-lg rounded-md shadow-purple-800">
                  <div className="flex justify-center items-center flex-col">
                    <h1 className="text-3xl font-light">Class Test</h1>
                    <p className=" text-gray-500 text-xs">
                      Sub: Computer Science
                    </p>
                    <p className="text-gray-500 text-xs">Duration: 2 hour </p>
                  </div>

                  <div className="mt-5 flex justify-center items-center flex-col">
                    <p className="text-sm text-gray-500 m-2">
                      Started 30 second Ago
                    </p>
                    <button className="rounded-lg shadow-lg bg-purple-800 text-white p-2">
                      Attempt
                    </button>
                  </div>
                </div>
                <div className="space-x-3 space-y-3  col-span-1 flex justify-center items-center flex-col w-[200px] h-[200px] border m-2 shadow-lg rounded-md shadow-purple-800">
                  <div className="flex justify-center items-center flex-col">
                    <h1 className="text-3xl font-light">Class Test</h1>
                    <p className=" text-gray-500 text-xs">
                      Sub: Computer Science
                    </p>
                    <p className="text-gray-500 text-xs">Duration: 2 hour </p>
                  </div>

                  <div className="mt-5 flex justify-center items-center flex-col">
                    <p className="text-sm text-gray-500 m-2">
                      Started 30 second Ago
                    </p>
                    <button className="rounded-lg shadow-lg bg-purple-800 text-white p-2">
                      Attempt
                    </button>
                  </div>
                </div>
                <div className="space-x-3 space-y-3  col-span-1 flex justify-center items-center flex-col w-[200px] h-[200px] border m-2 shadow-lg rounded-md shadow-purple-800">
                  <div className="flex justify-center items-center flex-col">
                    <h1 className="text-3xl font-light">Class Test</h1>
                    <p className=" text-gray-500 text-xs">
                      Sub: Computer Science
                    </p>
                    <p className="text-gray-500 text-xs">Duration: 2 hour </p>
                  </div>

                  <div className="mt-5 flex justify-center items-center flex-col">
                    <p className="text-sm text-gray-500 m-2">
                      Started 30 second Ago
                    </p>
                    <button className="rounded-lg shadow-lg bg-purple-800 text-white p-2">
                      Attempt
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-5">
            <h1 className=" text-3xl font-thin">
              Attempted Test ----------------------------------------
            </h1>
            <div className="overflow-scroll scrollbar-hide  ">
              <div className="p-5 mt-4 flex w-[200%] justify-start items-center ">
                <div className="space-x-3 space-y-3  col-span-1 flex justify-center items-center flex-col w-[200px] h-[200px] border m-2 shadow-lg rounded-md shadow-purple-800">
                  <div className="flex justify-center items-center flex-col">
                    <h1 className="text-3xl font-light">Class Test</h1>
                    <p className=" text-gray-500 text-xs">
                      Sub: Computer Science
                    </p>
                    <p className="text-gray-500 text-xs">Duration: 2 hour </p>
                  </div>

                  <div className="mt-5 flex justify-center items-center flex-col">
                    <p className="text-sm text-gray-500 m-2">
                      Started 30 second Ago
                    </p>
                    <button className="rounded-lg shadow-lg bg-purple-800 text-white p-2">
                      Attempt
                    </button>
                  </div>
                </div>
                <div className="space-x-3 space-y-3  col-span-1 flex justify-center items-center flex-col w-[200px] h-[200px] border m-2 shadow-lg rounded-md shadow-purple-800">
                  <div className="flex justify-center items-center flex-col">
                    <h1 className="text-3xl font-light">Class Test</h1>
                    <p className=" text-gray-500 text-xs">
                      Sub: Computer Science
                    </p>
                    <p className="text-gray-500 text-xs">Duration: 2 hour </p>
                  </div>

                  <div className="mt-5 flex justify-center items-center flex-col">
                    <p className="text-sm text-gray-500 m-2">
                      Started 30 second Ago
                    </p>
                    <button className="rounded-lg shadow-lg bg-purple-800 text-white p-2">
                      Attempt
                    </button>
                  </div>
                </div>
                <div className="space-x-3 space-y-3  col-span-1 flex justify-center items-center flex-col w-[200px] h-[200px] border m-2 shadow-lg rounded-md shadow-purple-800">
                  <div className="flex justify-center items-center flex-col">
                    <h1 className="text-3xl font-light">Class Test</h1>
                    <p className=" text-gray-500 text-xs">
                      Sub: Computer Science
                    </p>
                    <p className="text-gray-500 text-xs">Duration: 2 hour </p>
                  </div>

                  <div className="mt-5 flex justify-center items-center flex-col">
                    <p className="text-sm text-gray-500 m-2">
                      Started 30 second Ago
                    </p>
                    <button className="rounded-lg shadow-lg bg-purple-800 text-white p-2">
                      Attempt
                    </button>
                  </div>
                </div>
                <div className="space-x-3 space-y-3  col-span-1 flex justify-center items-center flex-col w-[200px] h-[200px] border m-2 shadow-lg rounded-md shadow-purple-800">
                  <div className="flex justify-center items-center flex-col">
                    <h1 className="text-3xl font-light">Class Test</h1>
                    <p className=" text-gray-500 text-xs">
                      Sub: Computer Science
                    </p>
                    <p className="text-gray-500 text-xs">Duration: 2 hour </p>
                  </div>

                  <div className="mt-5 flex justify-center items-center flex-col">
                    <p className="text-sm text-gray-500 m-2">
                      Started 30 second Ago
                    </p>
                    <button className="rounded-lg shadow-lg bg-purple-800 text-white p-2">
                      Attempt
                    </button>
                  </div>
                </div>

                <div className="space-x-3 space-y-3  col-span-1 flex justify-center items-center flex-col w-[200px] h-[200px] border m-2 shadow-lg rounded-md shadow-purple-800">
                  <div className="flex justify-center items-center flex-col">
                    <h1 className="text-3xl font-light">Class Test</h1>
                    <p className=" text-gray-500 text-xs">
                      Sub: Computer Science
                    </p>
                    <p className="text-gray-500 text-xs">Duration: 2 hour </p>
                  </div>

                  <div className="mt-5 flex justify-center items-center flex-col">
                    <p className="text-sm text-gray-500 m-2">
                      Started 30 second Ago
                    </p>
                    <button className="rounded-lg shadow-lg bg-purple-800 text-white p-2">
                      Attempt
                    </button>
                  </div>
                </div>
                <div className="space-x-3 space-y-3  col-span-1 flex justify-center items-center flex-col w-[200px] h-[200px] border m-2 shadow-lg rounded-md shadow-purple-800">
                  <div className="flex justify-center items-center flex-col">
                    <h1 className="text-3xl font-light">Class Test</h1>
                    <p className=" text-gray-500 text-xs">
                      Sub: Computer Science
                    </p>
                    <p className="text-gray-500 text-xs">Duration: 2 hour </p>
                  </div>

                  <div className="mt-5 flex justify-center items-center flex-col">
                    <p className="text-sm text-gray-500 m-2">
                      Started 30 second Ago
                    </p>
                    <button className="rounded-lg shadow-lg bg-purple-800 text-white p-2">
                      Attempt
                    </button>
                  </div>
                </div>
                <div className="space-x-3 space-y-3  col-span-1 flex justify-center items-center flex-col w-[200px] h-[200px] border m-2 shadow-lg rounded-md shadow-purple-800">
                  <div className="flex justify-center items-center flex-col">
                    <h1 className="text-3xl font-light">Class Test</h1>
                    <p className=" text-gray-500 text-xs">
                      Sub: Computer Science
                    </p>
                    <p className="text-gray-500 text-xs">Duration: 2 hour </p>
                  </div>

                  <div className="mt-5 flex justify-center items-center flex-col">
                    <p className="text-sm text-gray-500 m-2">
                      Started 30 second Ago
                    </p>
                    <button className="rounded-lg shadow-lg bg-purple-800 text-white p-2">
                      Attempt
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default student;
