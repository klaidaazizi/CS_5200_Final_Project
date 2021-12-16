import orderService from "./order-service"
const {useState, useEffect} = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const orderFormEditor = () => {
    const {id} = useParams()
    const [order, setOrder] = useState({})
    useEffect(() => {
        if(id !== "new") {
            findOrderById(id)
        }
    }, []);
    const createOrder = (order) =>
        orderService.createOrder(order)
            .then(() => history.back())
    const findOrderById = (id) =>
        orderService.findOrderById(id)
            .then(order => setOrder(order))
    const deleteOrder = (id) =>
        orderService.deleteOrder(id)
            .then(() => history.back())
    const updateOrder = (id, newOrder) =>
        orderService.updateOrder(id, newOrder)
            .then(() => history.back())
    return (
        <div>
            <Link to={`/`}>
                <button type="button" className="btn btn-outline-danger">HOME</button>
            </Link>
            <br/>
            <br/>
            <h2>Order Editor</h2>
            <label>ID</label>
            <input value={order.id}/><br/>
            <label>Order Date</label>
            <input
                onChange={(e) =>
                    setOrder(order =>
                        ({...order, createdDate: e.target.value}))}
                value={order.createdDate}/>
            <br/>
            <label>Quantity</label>
            <input
                onChange={(e) =>
                    setOrder(order =>
                        ({...order, shippedDate: e.target.value}))}
                value={order.shippedDate}/>
            <br/>
            <input
                onChange={(e) =>
                    setOrder(order =>
                        ({...order, quantity: e.target.value}))}
                value={order.quantity}/>
            <br/>
            <br/>
            <button className="btn btn-warning"
                onClick={() => {
                    history.back()}}>
                Cancel
            </button>
            <button className="btn btn-danger"
                    onClick={() => deleteOrder(order.id)}>
                Delete
            </button>
            <button className="btn btn-success"
                onClick={() => updateOrder(order.id, order)}>
                Save
            </button>

            <button className="btn btn-primary" onClick={() => createOrder(order)}>
                Create
            </button>

        </div>
    )
}

export default orderFormEditor