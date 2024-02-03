import shoeTypes from '../assets/shoegroup.png'

const Home = () => {
    return (
            <div className="flex flex-col lg:flex-row sm:gap-[5vh] sm:my-[5%] gap-[5vh] justify-between bg-white">
                <div className="flex flex-col w-[100%] gap-[1vh]  bg-blue-300 rounded-md">
                    <h2 className="text-white text-2xl font-bold font-mono p-1">
                        Your quick online provider of top quality shoe products.
                    </h2>
                    <p className="text-white text-xl italic p-1">
                        The Gateway to smooth purchase of your desired shoe products ranging from sports wear, pure leather, loafers, sneakers to sandals.
                    </p>
                    <div className='flex items-center justify-center'>
                        <button className="text-blue-500 mb-[5%] bg-white rounded-md text-xl font-bold p-2">Contact Us</button>
                    </div>
                </div>
                    <div className="w-[100%] flex items-center justify-center">
                        <img className="w-[80%] h-[50vh] sm:h-[40vh] rounded-full" src={shoeTypes} alt="shoe types" />
                    </div>
                </div>
    )
}

export default Home;