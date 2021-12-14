import orderService from "./order-service"
const { useState, useEffect } = React;
const {Link, useHistory} = window.ReactRouterDOM;

const OrderList = () => {
    const history = useHistory()
    const [orders, setOrders] = useState([])
    useEffect(() => {
        findAllOrders()
    }, [])
    const findAllOrders = () =>
        orderService.findAllOrders()
            .then(orders => setOrders(orders))
    return(
        <div>
            <h2>Order List</h2>
            <button className="btn btn-primary" onClick={() => history.push("/orders/new")}>
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

export default OrderList;