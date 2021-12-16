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
                                {"Created Date: " + order.createdDate}
                                {" | Shipped Date: " + order.shippedDate + ' '}
                            {" | Quantity: " + order.quantity + ' '}
                                {/*{" | Customer Name: " + order.cart.customer.firstName}*/}
                                {/*{" " + order.cart.customer.lastName}*/}
                                <Link to={`/orders/${order.id}`}><button type="button" className="btn btn-outline-info">Edit</button>
                                </Link>
                                <Link to={`/products/${order.product.id}`}><button type="button" className="btn btn-outline-success">Go to Product</button>
                                </Link>
                        </li>)
                }
            </ul>
            <Link to={`/`}>
                <button type="button" className="btn btn-outline-danger">HOME</button>
            </Link>
        </div>
    )
}

export default OrderList;