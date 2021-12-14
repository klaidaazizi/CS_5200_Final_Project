import orderService, {findOrdersByProduct} from "./order-service"
const { useState, useEffect } = React;
const {Link,useParams, useHistory} = window.ReactRouterDOM;

const OrderListByProduct = () => {
    const history = useHistory()
    const {id} = useParams()
    const [orders, setOrders] = useState([])
    useEffect(() => {
        findOrdersByCart(id)
    }, [])
    const findOrdersByCart = (id) =>
        orderService.findOrdersByCart(id)
            .then(orders => setOrders(orders))
    return(
        <div>
            <h2>Products in Cart</h2>
            <button className="btn btn-primary" onClick={() => history.push("/orders/addOrder/" + id)}>
                Add Order
            </button>
            <ul className="list-group">
                {
                    orders.map(order =>
                        <li className="list-group-item"
                            key={order.id}>
                            <Link to={`/orders/${order.id}`}>
                                {"Product Name: " + order.product.name + " | "}
                                {"Quantity: " + order.quantity}
                            </Link>
                            <br/>
                            <Link to={`/products/${order.product.id}`}>
                                Link to Product
                            </Link>
                        </li>)
                }
            </ul>
            <br/>
            <Link to={`/`}>
                HOME
            </Link>
        </div>
    )
}

export default OrderListByProduct;