import orderService, {findOrdersByProduct} from "./order-service"
const { useState, useEffect } = React;
const {Link,useParams, useHistory} = window.ReactRouterDOM;

const OrderListByProduct = () => {
    const history = useHistory()
    const {id} = useParams()
    const [orders, setOrders] = useState([])
    useEffect(() => {
        findOrdersByProduct(id)
    }, [])
    const findOrdersByProduct = (id) =>
        orderService.findOrdersByProduct(id)
            .then(orders => setOrders(orders))
    return(
        <div>
            <h2>Order List By Product</h2>
            <button className="btn btn-primary" onClick={() => history.push("/orders/new" + id)}>
                Add Order
            </button>
            <ul className="list-group">
                {
                    orders.map(order =>
                        <li className="list-group-item"
                            key={order.id}>
                            <Link to={`/orders/${order.id}`}>
                                {order.createdDate},
                                {order.shippedDate}
                            </Link>
                            <br/>
                            <Link to={`/products/${order.product.id}`}>
                                Link to Product
                            </Link>
                        </li>)
                }
            </ul>
            <Link to={`/`}>
                HOME
            </Link>
        </div>
    )
}

export default OrderListByProduct;