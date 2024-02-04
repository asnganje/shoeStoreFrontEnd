import Footer from "./Footer"
import Header from "./Header"

const StoreCreate = () => {
    return(
        <div className="relative h-screen mx-[5%]">
            <Header />
            <div className=" mx-[35%] mt-[10%] bg-pink-200 p-5 shadow-lg rounded-md w-[100%] md:w-[70vh]">
                        <form>
                            <div className="mb-3 flex gap-5">
                                <label className="mt-1">Name</label>
                                <input
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