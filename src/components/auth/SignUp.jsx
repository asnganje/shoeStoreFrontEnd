import Footer from "../Footer";
import Header from "../Header";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../redux/thunks/userThunk";

const SignUp = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const {isActive} = useSelector((store)=>store.user)

    const fNameHandler = (e) => {
        setFirstName(e.target.value)
    }

    const lNameHandler = (e) => {
        setLastName(e.target.value)
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }

    const user = {firstName, lastName, email, password}

    const userCreateHandler = (e) => {
        e.preventDefault()
        dispatch(createUser(user))
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
    }

    return(
        <div className="relative mx-[5%] h-screen">
            <Header />
            {isActive && <p className="text-green-500 text-2xl mx-[40%] font-mono">Success...</p>}
            <div className="flex relative flex-col gap-3 items-center justify-center text-xl font-mono mt-10">
                    <div className="bg-pink-200 p-5 shadow-lg rounded-md w-[100%] md:w-[70vh]">
                        <form onSubmit={userCreateHandler}>
                            <div className="mb-3 flex gap-5">
                                <label className="mt-1">Firstname</label>
                                <input
                                value={firstName}
                                onChange={fNameHandler}
                                type="text"
                                required = "true"
                                className="w-full rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300" 
                                />
                            </div>
                            <div className="mb-3 flex gap-5">
                                <label className="mt-1">Lastname</label>
                                <input
                                value={lastName}
                                onChange={lNameHandler}
                                type="text"
                                required = "true" 
                                className="w-full ml-2.5 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                                />
                            </div>
                            <div className="mb-3 flex gap-5">
                                <label className="mt-1">Email</label>
                                <input
                                value={email}
                                onChange={emailHandler}
                                type="email"
                                required = "true"
                                className="w-full ml-11 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300" 
                                />
                            </div>
                            <div className="mb-3 flex gap-5">
                                <label className="mt-1">Password</label>
                                <input
                                value={password}
                                onChange={passwordHandler}
                                type="text"
                                required = "true"
                                className="w-full ml-2.5 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300" 
                                />
                            </div>
                            <button className="text-white rounded-md w-[50%] mx-[35%] bg-gray-400 hover:bg-gray-500 p-2">Register</button>
                        </form>
                        <div className="flex justify-center gap-5 mt-5">
                            <p className="text-gray-600 italic space-x-0">Already registered?</p><Link to='/login' className="text-gray-600 hover:text-blue-500 hover:underline">Login here!</Link>
                        </div>
                    </div>
                    
                    <Link to="/" className="h-[10%]">
                        <p className=" flex items-center cursor-pointer hover:underline hover:text-blue-400 mb-[5vh]">
                            <IoMdArrowRoundBack />Back to home
                        </p>
                    </Link>
                </div>
                <Footer/>
            </div>
    )
}

export default SignUp;