import { useEffect, useState } from "react"
import Footer from "./Footer"
import Header from "./Header"
import { useDispatch, useSelector } from "react-redux"
import { getStores } from "../redux/thunks/storeThunk"
import { getAllProducts } from "../redux/thunks/productsThunk"
import { useNavigate } from "react-router-dom"


const Store = () => {
    
    const [loading, setLoading] = useState(false)
    const [visible, setVisible] = useState(false)
    const [selectedStore, setSelectedStore] = useState('');

    const {data} = useSelector((store)=>store.store)

    const {data: productsData} = useSelector((store)=>store.products)

    let renderedShoes;
    if(productsData.length > 0) {
        renderedShoes = productsData.map((shoe)=> {
            return(
                <li key={shoe._id}>{shoe.name}</li>
            )
        })
    }
    const navigate = useNavigate()    
    const handleStoreCreate = () => {
            navigate('/storecreate')
    }


    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getStores())
    }, [])

    useEffect(()=> {
        if(data && data.length > 0)
        setLoading(false)
    }, [data])

    if (loading) {
        return <p>Loading...</p>
    }

    const selectionHandler = (e) => {
        const chosenStore = e.target.value;
        setSelectedStore(chosenStore)
        const el = data.find((item)=>item.name === chosenStore)
        if (el) {
            const store = {store: el._id}
            dispatch(getAllProducts(store))            
        }
    }


    const renderedOptions = data.map((item)=> {
        
        return(
            <option key={item.name}>{item.name}</option>
        )
    })

    const handleVisibility = ()=> {
        setVisible(!visible)
    }

    return(
        <div className="relative h-screen mx-[5%]">
            <Header />
            <button onClick={handleStoreCreate}>Add a Store</button>
            <div>
                <label htmlFor="selectStore">Select Store:</label>
                <select onClick={handleVisibility}
                 id="selectStore" 
                 name="store"
                 onChange={selectionHandler} 
                 value={selectedStore} 
                 required
                 >
                <option value="">Select a store</option>
                    {renderedOptions}
                </select>
            </div>
            <div>
                {renderedShoes}
            </div>
            <Footer />
        </div>
    )
}

export default Store;