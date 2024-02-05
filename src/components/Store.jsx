import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { getStores } from "../redux/thunks/storeThunk";
import { getAllProducts, removeProduct, updateProduct } from "../redux/thunks/productsThunk";
import { useNavigate } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import shoe1 from '../assets/shoe1.png'
import shoe2 from '../assets/shoe2.png'
import shoe3 from '../assets/shoe3.png'
import shoe4 from '../assets/shoe4.png'
import shoe5 from '../assets/shoe5.png'
import shoe6 from '../assets/shoe6.png'
import shoe7 from '../assets/shoe7.png'
import shoe8 from '../assets/shoe8.png'
import shoe9 from '../assets/shoe9.png'
import shoe10 from '../assets/shoe10.png'


const Store = () => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [selectedStore, setSelectedStore] = useState("");
  const [editIndex, setEditIndex] = useState(null)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [id, setId] = useState('')
  
  const activeUser = localStorage.getItem('user')

  const { data } = useSelector((store) => store.store);

  let { data: productsData } = useSelector((store) => store.products);

  const removeHandler = (shoe) => {
    dispatch(removeProduct(shoe._id)).then(()=> {
    })
  }

  const handleProductEdit = (shoe, index) => {
    setEditIndex(index)
    setName(shoe.name)
    setPrice(shoe.price)
    setId(shoe._id)
  }

  const nameChangeHandler = (e)=> {
    setName(e.target.value)
  }

  const priceChangeHandler = (e)=> {
    setPrice(e.target.value)
  }

  const updatedProduct = {id, name, price}

  const editHandler = (e) => {
        e.preventDefault()
        dispatch(updateProduct(updatedProduct)).then(()=> {
            setEditIndex(null)

        })
  }

  const handleBack = () => {
    setEditIndex(null)
  }

  const shoedata = [
    {name: shoe1},
    {name: shoe2},
    {name: shoe3},
    {name: shoe4},
    {name: shoe5},
    {name: shoe6},
    {name: shoe7},
    {name: shoe8},
    {name: shoe9},
    {name: shoe10},
  ]
  const getRandomShoeDisplay = (index) => {
    if (index >= 0 && index < shoedata.length) {
      return shoedata[index].name;
    } else {
      console.error("Index out of bounds");
      return null; 
    }
  };

  let renderedShoes;
  if (productsData.length > 0) {
    renderedShoes = productsData.map((shoe, index) => {
      const shoeDisplay = getRandomShoeDisplay(index);

      return (
        <div key={shoe._id} className="border shadow-lg relative rounded-md">
          <div className="flex">
              <div className="flex flex-col p-[2%]">
              <span>Name: {shoe.name}</span> 
              <span>Price: ₺{shoe.price}</span> 
              </div>
              <div>
                <img src={shoeDisplay} alt="shoe"/>
              </div>
          </div>
          <div>
              <button>
                <CiEdit onClick={()=>handleProductEdit(shoe, index)}/>
              </button>
              <button
                  onClick={() => removeHandler(shoe)}
                  className="border p-1 m-[2%] rounded-md bg-red-400 text-white"
                  >
                <MdDelete />
              </button>
          </div>
                {editIndex === index && <div className="absolute top-0 rounded-md w-full h-full flex items-center justify-center backdrop-blur-md backdrop-filter bg-opacity-30 bg-gray-500">
                  <form>
                      <div className="mb-3 flex gap-5">
                        <label className="mt-1">Name</label>
                          <input
                          value={name}
                                onChange={nameChangeHandler}
                                type="text"
                                className="w-full rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300" 
                                />
                            </div>
                            <div className="mb-3 flex gap-5">
                                <label className="mt-1">Price</label>
                                <input
                                value={price}
                                onChange={priceChangeHandler}
                                type="text" 
                                className="w-full ml-2.5 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                                />
                            </div>
                            <button onClick={editHandler} className="text-white rounded-md w-[50%] mx-[35%] bg-gray-400 hover:bg-gray-500 p-2">Edit Product</button>
                    </form>
                  <div 
                    onClick={handleBack}
                    className="cursor-pointer flex items-center justify-right hover:text-blue-500"
                    >
                    <IoMdArrowRoundBack/> <span>Back</span>
                    </div>
                </div>
              }

        </div>
      );
    });
  }
  const navigate = useNavigate();
  const handleStoreCreate = () => {
    navigate("/storecreate");
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStores());
  }, []);

  useEffect(() => {
    if (data && data.length > 0) setLoading(false);
  }, [data]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const selectionHandler = (e) => {
    const chosenStore = e.target.value;
    setSelectedStore(chosenStore);
    const el = data.find((item) => item.name === chosenStore);
    if (el) {
      const store = { store: el._id };
      dispatch(getAllProducts(store));
    }
  };

  const renderedOptions = data.map((item) => {
    return <option key={item.name}>{item.name}</option>;
  });

  const handleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className="relative h-screen mx-[5%]">
      <Header />
      <div className="mt-[2%]">
                <h1 className="uppercase font-mono font-bold text-pink-500 text-2xl">WELCOME TO THE TURKISH products list per store</h1>
      </div>

      <div className="flex justify-between">
            <div
              className="flex gap-10 text-black rounded-md sm:w-[30%] w-[50%] bg-gray-400 hover:bg-gray-500 p-2"
              >
              <label htmlFor="selectStore">Store name:</label>
              <select
                onClick={handleVisibility}
                id="selectStore"
                name="store"
                className="w-[60%] text-xl rounded-md"
                onChange={selectionHandler}
                value={selectedStore}
                required
              >
                <option value="" disabled hidden>Select a store</option>
                {renderedOptions}
              </select>
            </div>
            {activeUser && <button 
              onClick={handleStoreCreate}
              className="text-white text-xl rounded-md sm:w-[10%] w-[25%] bg-gray-400 hover:bg-gray-500 p-2"
            >
              Add a Store
            </button>}
      </div>

      

      <div className="grid grid-cols-3 gap-[5%] mt-[5%]">
        {renderedShoes}
      </div>
      <Footer />
    </div>
  );
};

export default Store;
