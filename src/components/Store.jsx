import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { getStores } from "../redux/thunks/storeThunk";
import { getAllProducts, removeProduct, updateProduct } from "../redux/thunks/productsThunk";
import { useNavigate } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const Store = () => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [selectedStore, setSelectedStore] = useState("");
  const [editIndex, setEditIndex] = useState(null)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [id, setId] = useState('')

  const { data } = useSelector((store) => store.store);

  let { data: productsData } = useSelector((store) => store.products);

  const removeHandler = (shoe) => {
    // const store = {store: shoe._id}
    dispatch(removeProduct(shoe._id)).then(()=> {
        // setSelectedStore(shoe.name);
        // dispatch(getAllProducts(store))
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
            // setSelectedStore('')
            setEditIndex(null)

        })
  }

  let renderedShoes;
  if (productsData.length > 0) {
    renderedShoes = productsData.map((shoe, index) => {
      return (
        <li key={shoe._id}>
          {shoe.name}
          <button>
            <CiEdit onClick={()=>handleProductEdit(shoe, index)}/>
          </button>
          {editIndex === index && <div className=" mx-[35%] mt-[10%] bg-pink-200 p-5 shadow-lg rounded-md w-[100%] md:w-[70vh]">
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
                    </div>
                    }
          <button
            onClick={() => removeHandler(shoe)}
            className="border p-1 m-[2%] rounded-md bg-red-400 text-white"
          >
            <MdDelete />
          </button>
        </li>
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
      <button onClick={handleStoreCreate}>Add a Store</button>
      <div>
        <label htmlFor="selectStore">Select Store:</label>
        <select
          onClick={handleVisibility}
          id="selectStore"
          name="store"
          onChange={selectionHandler}
          value={selectedStore}
          required
        >
          <option value="" disabled hidden>Select a store</option>
          {renderedOptions}
        </select>
      </div>
      <div>{renderedShoes}</div>
      <Footer />
    </div>
  );
};

export default Store;
