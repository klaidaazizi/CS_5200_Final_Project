import orderService from "./order-service"
const {useState, useEffect} = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const orderAdderForm = () => {
    const {id} = useParams()
    const [order, setOrder] = useState({})
    useEffect(() => {}, []);
    const addOrder = (order, id) =>
        orderService.addOrder(order, id)
            .then(() => history.back())
    return (
        <div>
            <h2>Order Editor</h2>
            <label>ID</label>
            <input value={order.id}/><br/>
            <label>Payment Type</label>
            <input
                onChange={(e) =>
                    setOrder(order =>
                        ({...order, payment: e.target.value}))}
                value={order.payment}/>
            <br/>
            <Link to={`/`}>
                HOME
            </Link>
            <br/>
            <button className="btn btn-warning"
                    onClick={() => {
                        history.back()}}>
                Cancel
            </button>

            <button className="btn btn-success" onClick={() => addOrder(order, id)}>
                Add
            </button>

        </div>
    )
}

export default orderAdderForm;