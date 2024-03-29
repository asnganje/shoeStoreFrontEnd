import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../redux/thunks/productsThunk";
import { getStores } from "../redux/thunks/storeThunk";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [visible, setVisible] = useState(false);
  const [storeName, setStoreName] = useState("");
  const [store, setStore] = useState("");
  const { data } = useSelector((store) => store.store);

  useEffect(() => {
    dispatch(getStores());
  }, []);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleVisibility = () => {
    setVisible(!visible);
  };

  const selectionHandler = (e) => {
    const selectedStoreName = e.target.value;
    setStoreName(selectedStoreName);

    const el = data.find((item) => item.name === selectedStoreName);
    if (el) {
      setStore(el._id);
    }
  };

  const product = { name, price, store };

  const renderedOptions = data.map((item) => {
    return <option key={item.name}>{item.name}</option>;
  });

  const handleProductSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct(product)).then(() => {
      navigate("/store");
    });
  };

  return (
    <div className="relative h-screen mx-[5%]">
      <Header />
      <div className="mt-[2%]">
        <h1 className="uppercase font-mono font-bold text-pink-500 text-2xl">Manage addition of new Products to a store</h1>
      </div>
      <div className=" sm:mx-[35%] mt-[5%] bg-pink-500 p-5 shadow-lg rounded-md w-[60%] sm:w-[70vh]">
        <form onSubmit={handleProductSubmit} className="space-y-5">
          <div className="mb-3 flex gap-5">
            <label className="mt-1">Name</label>
            <input
              value={name}
              onChange={handleNameChange}
              type="text"
              className="w-full rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-3 flex gap-5">
            <label className="mt-1">Price</label>
            <input
              value={price}
              onChange={handlePriceChange}
              type="text"
              className="w-full ml-2.5 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="flex gap-6">
            <label htmlFor="selectStore">Store:</label>
            <select
              onClick={handleVisibility}
              id="selectStore"
              name="store"
              className="w-[90%] rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
              onChange={selectionHandler}
              value={storeName}
              required
            >
              <option value="">Select a store</option>
              {renderedOptions}
            </select>
          </div>
          <button className=" mx-[25%] text-white rounded-md w-[50%] bg-gray-400 hover:bg-gray-500 p-2">
            Add Product
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
