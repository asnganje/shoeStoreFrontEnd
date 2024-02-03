import Footer from "../Footer";
import Header from "../Header";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/thunks/userThunk";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [visible, setVisible] = useState(false)

    const dispatch = useDispatch()

    let textType;
    if(visible) {
      textType = "text"
    } else {
      textType = "password"
    }
    const visibilityHandler = () => {
      setVisible(!visible)
    }

    const emailCHandler = (e) => {
      setEmail(e.target.value)
    }

    const passwordCHandler = (e) => {
      setPassword(e.target.value)
    }

    const user = {email, password}

    const loginHandler = (e) => {
      e.preventDefault()
      dispatch(loginUser(user))
    }


    return(
        <section className="relative mx-[5%] h-screen">
        <Header />
        <div className="flex flex-col gap-5 items-center text-xl font-mono justify-center mt-10">
          <div className="bg-pink-200 p-5 shadow-lg rounded-md h-full w-[100%] md:w-[70vh] mt-10">
            <form onSubmit={loginHandler}>
              <div className="mb-3 flex gap-11 w-[100%]">
                <label className="text-gray-600">Email</label>
                <input
                  value={email}
                  onChange={emailCHandler}
                  type="text"
                  className="w-[100%] mr-[8%] rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div className="mb-3 flex gap-2 w-[100%]">
                <label className="text-gray-600">Password</label>
                <input
                  value={password}
                  type={textType}
                  onChange={passwordCHandler}
                  className="w-[100%] rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
                
                <span className="">
                {visible &&<FaRegEye className="text-2xl cursor-pointer mt-2" onClick={visibilityHandler}/>}
                
                {!visible &&<FaRegEyeSlash className="text-2xl cursor-pointer mt-2" onClick={visibilityHandler}/>}
                
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