import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { FaSquareMinus } from "react-icons/fa6";
import { FaSquarePlus } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import cartSlice from "../redux/cartSlice";
const actions = cartSlice.actions

function ProductDetails() {
    const [item, setData] = useState(null)
    const params = useParams()
    const countt = useSelector(store => store.cartState.cartCount)
    
    const dispatch = useDispatch()

    useEffect(() => {
        (async () => {

            const request = await fetch(`https://fakestoreapi.com/products/${params.id}`)
            const response = await request.json()
            setData(response)
        })()
    }, [])

    const handleCart = () => {
        let qunatityAdding = {...item,count:countt}
        dispatch(cartSlice.actions.setUser(qunatityAdding))
    }   
    const handleInc = () =>{
        dispatch(actions.increment())
    }
    const handleDec = () =>{
        dispatch(actions.decrement())
    }
    return (
        <div>
            <h1>Products</h1>
            {
                item === null ? <h1>Loading...</h1> : (

                    <div>
                        <img className="product-image" src={item.image} alt="product" />
                        <h5>{item.title}</h5>
                        <p>Description: {item.description}</p>
                        <p>Category: {item.category}</p>
                        <p>Price: {item.price}rs</p>
                        <p>Rating: {item.rating.rate} | Stock: {item.rating.count}</p>
                        <button onClick={handleCart} >Add to cart</button>
                        <div className="quantity_container" >
                            <button onClick={handleDec} ><FaSquareMinus fontSize="large" /></button>

                            <div>
                                <h4>{countt}</h4>
                            </div>
                            <button onClick={handleInc} >   <FaSquarePlus fontSize="large" /></button>

                        </div>
                    </div>
                )
            }

        </div>
    )
}
export default ProductDetails