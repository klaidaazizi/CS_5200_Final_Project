import cartService from "./cart-service"
const {useState, useEffect} = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const cartAdderForm = () => {
    const {id} = useParams()
    const [cart, setCart] = useState({})
    useEffect(() => {}, []);
    const addCart = (cart, id) =>
        cartService.addCart(cart, id)
            .then(() => history.back())
    return (
        <div>
            <h2>Cart Editor</h2>
            <label>ID</label>
            <input value={cart.id}/><br/>
            <label>Payment Type</label>
            <input
                onChange={(e) =>
                    setCart(cart =>
                        ({...cart, payment: e.target.value}))}
                value={cart.payment}/>
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

            <button className="btn btn-success" onClick={() => addCart(cart, id)}>
                Add
            </button>

        </div>
    )
}

export default cartAdderForm