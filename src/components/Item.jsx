import { Link } from "react-router-dom"
import '../index.css'
function Item({ item }) {
    return (
        <Link to={`products/${item.id}`} >
            <div className="product-card" >
                <img className="product-image" src={item.image} alt="product" />
                <h5>{item.title}</h5>
                <p>Price: {item.price}</p><p>Rating: {item.rating.rate} | Count: {item.rating.count}</p>
            </div>
        </Link>

    )
}
export default Item