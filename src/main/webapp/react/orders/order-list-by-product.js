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
            <h2>Order List for Product - Carts</h2>
            <button className="btn btn-primary" onClick={() => history.push("/orders/addOrder/" + id)}>
                Add Order
            </button>
            <ul className="list-group">
                {
                    orders.map(order =>
                        <li className="list-group-item"
                            key={order.id}>
                                {"Cart Name: " + order.cart.name}
                                {" | Payment Type: " + order.cart.payment + ' '}
                            {/*{" | Created Date: " + order.createdDate + ' '}*/}
                            {/*{" | Customer Name: " + order.cart.customer.firstName}*/}
                                {" " + order.cart.customer.lastName}
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

export default OrderListByProduct;