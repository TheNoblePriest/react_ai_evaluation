import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Image from "next/image";
import Head from "next/head";

function SignIn() {
  const router = useRouter();
  return (
    <div className="w-full h-screen ">
      <Head>
        <title>AI Generator</title>
        <link rel="icon" href="/category1.gif" />
      </Head>
      <Header />
      <div className="h-full  pt-24 flex justify-around items-center">
        <Image
          src="/ai banner.gif"
          className=" hidden md:inline-flex"
          width={500}
          height={600}
          alt="..."
        />
        <div className=" shadow-2xl shadow-purple-800 w-[500px] bg-gray-50 h-[500px] flex-col  flex  items-center ">
          <div>
            <h1 className=" text-3xl mt-6 font-thin font-mono">
              Login with AI{" "}
            </h1>
          </div>
          {/* <div className=" p-5 flex justify-around w-full items-center">
            <h1 className=" text-2xl shadow-lg cursor-pointer  rounded-lg shadow-purple-800 p-2 w-[50%] text-center font-mono">
              Student
            </h1>
            <h1 className=" text-2xl shadow-lg cursor-pointer  rounded-lg shadow-white mx-2 font-mono w-[50%] p-2 text-white text-center bg-purple-800">
              Teacher
            </h1>
          </div> */}

          <div className="flex mt-5 justify-center items-center flex-col w-full">
            <div className=" bg-white px-4 py-2 w-[250px] my-2 items-center flex justify-center shadow-xl rounded-xl">
              <Image
                className=" mr-2"
                width={20}
                height={20}
                src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/640px-Facebook_f_logo_%282021%29.svg.png"
                alt=".."
              />
              <h1>Continue with facebook</h1>
            </div>

            <div className=" bg-white px-4 py-2 w-[250px] m-2 items-center flex justify-center shadow-xl rounded-xl">
              <Image
                className=" mr-2"
                width={20}
                height={20}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png"
                alt=".."
              />
              <h1>Continue with google</h1>
            </div>

            <div className=" my-5 border-t-2 w-[60%]"></div>
            <div className="flex justify-center mt-4 w-[300px] m-2 p-2 bg-white shadow-md rounded-lg items-center">
              <Image
                className=" mr-2"
                width={20}
                height={20}
                src="/user1.gif"
                alt=".."
              />
              <input
                className=" flex-1 outline-none text-sm px-2"
                placeholder="Enter userId"
                type="text"
              />
            </div>
            <div className="flex  w-[300px] justify-center m-3 p-2 bg-white shadow-md rounded-lg items-center">
              <Image
                className=" mr-2"
                width={20}
                height={20}
                src="/pass.gif"
                alt=".."
              />
              <input
                className=" outline-none flex-1 text-sm px-2 "
                placeholder="Enter passcode"
                type="password"
              />
            </div>
            <div className="w-[400] py-2">
              <h1 className="text-blue-500 hover:underline cursor-pointer">
                Forget password
              </h1>
            </div>
            <div className="space-x-2 mt-2 p-3">
              <button
                onClick={() => router.push("/login/signin")}
                className=" text-sm w-[150px] bg-purple-800 text-white border-2 rounded-xl p-2"
              >
                Login
              </button>
              <button
                onClick={() => router.push("/login/register")}
                className=" text-sm w-[150px] bg-purple-800 text-white border-2 rounded-xl p-2"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignIn;
