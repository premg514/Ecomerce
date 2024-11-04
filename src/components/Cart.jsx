import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import cartSlice from '../redux/cartSlice'

export default function Cart() {
    const some = useSelector(store => store.cartState)
    const cartIems = (some.cartItems)
    console.log(cartIems)
    const dispatch = useDispatch()

    const handleDelete = (item) => {
     
        dispatch(cartSlice.actions.removeUser(item))
    }
    return (
        <div>
            {
                cartIems.length == 0 ? <h4>Empty</h4> : (
                    cartIems.map(item => (
                        <div key={item.id} >
                            <img className="product-image" src={item.image} alt="product" />
                            <h5>{item.title}</h5>
                            <p>Category: {item.category}</p>
                            <p>Price: {item.price}rs</p>
                            <p>Rating: {item.rating.rate} | Stock: {item.rating.count}</p>
                            <div>
                                <h1>Quantity: {item.indQunatity}</h1>
                            </div>
                            <button onClick={() => { handleDelete(item) }} >Delete</button>
                        </div>
                    ))
                )
            }
        </div>
    )
}
