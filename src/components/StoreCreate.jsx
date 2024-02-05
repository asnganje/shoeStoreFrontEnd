import { useState } from "react"
import Footer from "./Footer"
import Header from "./Header"
import { useDispatch } from "react-redux"
import { createStore, getStores } from "../redux/thunks/storeThunk"
import { useNavigate } from "react-router-dom"

const StoreCreate = () => {

    const [name, setName] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleNameChange = (e)=> {
        setName(e.target.value)
    }

    const newStore = {name}

    const handleStoreNameSubmit = (e)=> {
        e.preventDefault();
        dispatch(createStore(newStore)).then(()=> {
            dispatch(getStores())
        })
        setName('')
        navigate('/store')
    }

    return(
        <div className="relative h-screen mx-[5%]">
            <Header />
            <div className="mt-[2%]">
                <h1 className="uppercase font-mono font-bold text-pink-500 text-2xl">Manage creation of a new store</h1>
            </div>
            <div className=" mx-[35%] mt-[5%] bg-pink-500 p-5 shadow-lg rounded-md w-[60%] md:w-[70vh]">
                        <form onSubmit={handleStoreNameSubmit}>
                            <div className="mb-3 flex gap-5">
                                <label className="mt-1">Name</label>
                                <input
                                value={name}
                                onChange={handleNameChange}
                                type="text"
                                className="w-full rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300" 
                                />
                            </div>
                            <button className="text-white rounded-md w-[50%] mx-[35%] bg-gray-400 hover:bg-gray-500 p-2">Create a store</button>
                        </form>
                    </div>
            <Footer />
        </div>
    )
}

export default StoreCreate;