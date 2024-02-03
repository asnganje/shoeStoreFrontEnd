import Footer from "../Footer";
import Header from "../Header";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const Login = () => {
    return(
        <section className="relative h-screen">
        <Header />
        <div className="flex flex-col gap-5 items-center text-xl font-mono justify-center mt-10">
          <div className="bg-pink-200 p-5 shadow-lg rounded-md h-full w-[100%] md:w-[70vh] mt-10">
            <form>
              <div className="mb-3 flex gap-11 w-[100%]">
                <label className="text-gray-600">Email</label>
                <input
                  type="text"
                  className="w-[100%] mr-[8%] rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div className="mb-3 flex gap-2 w-[100%]">
                <label className="text-gray-600">Password</label>
                <input
                  className="w-[100%] rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
                
                <span className="">
                {<FaRegEye className="text-2xl cursor-pointer mt-2"/>}
                
                {<FaRegEyeSlash className="text-2xl cursor-pointer mt-2"/>}
                
                </span>
                
              </div>
              <button className="text-white font-bold rounded-md w-[40%] mx-[35%] bg-gray-400 hover:bg-gray-500 p-2">
                Login
              </button>
            </form>
            {<p className="text-red-500 mt-2 animate-pulse"></p>}
            <div className="flex gap-5 mt-5">
              <p className="text-gray-600 italic">Not registered?</p>
              <Link
                to="/signup"
                className="text-gray-600 hover:text-blue-500 hover:underline"
              >
                SignUp here!
              </Link>
            </div>
          </div>
          <Link to="/">
            <p className="flex items-center cursor-pointer hover:underline hover:text-blue-400 mb-[15vh]">
              <IoMdArrowRoundBack />
              Back to home
            </p>
          </Link>
        </div>
        <Footer />
      </section>
    );
  }

export default Login;