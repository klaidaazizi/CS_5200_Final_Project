import orderService from "./order-service"
import productService from "./product-service"
const { useState, useEffect } = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const orderAdderForm = () => {
    const {id} = useParams()
    const [products, setProducts] = useState([])
    const [quantity, setQuantity] = useState([])
    useEffect(() => {
        findAllProducts()
    }, [])
    const findAllProducts = () =>
        productService.findAllProducts()
            .then(products => setProducts(products))
    const addOrder = (productId, id, quantity) =>
        orderService.addOrder(productId, id, quantity)
            .then(() => history.back())
    return (
        <div>
            <h2>Product List</h2>
            <br/>
            <label>Quantity</label>
            <input
                onChange={(e) =>
                    setQuantity(quantity =>
                        ({...quantity, quantity: e.target.value}))}/>
            <br/>
            <br/>
            <ul className="list-group">
                {
                    products.map(product =>
                        <li className="list-group-item"
                            key={product.id}>
                            <button onClick={() => addOrder(product.id, id, quantity.quantity)}>
                                {product.name},
                                {product.category},
                                {product.price},
                                {product.inventory},
                                {product.weight},
                                {product.ageGroup},
                                {product.discount}
                            </button>
                            <br/>
                        </li>)
                }
            </ul>
            <Link to={`/`}>
                <button type="button" className="btn btn-outline-danger">HOME</button>
            </Link>
            <br/>
            <button className="btn btn-warning"
                    onClick={() => {
                        history.back()}}>
                Cancel
            </button>
        </div>
    )
}

export default orderAdderForm;