import cartService from "./cart-service"
const {useState, useEffect} = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const cartFormEditor = () => {
    const {id} = useParams()
    const [cart, setCart] = useState({})
    useEffect(() => {
        if(id !== "new") {
            findCartById(id)
        }
    }, []);
    const createCart = (cart) =>
        cartService.createCart(cart)
            .then(() => history.back())
    const findCartById = (id) =>
        cartService.findCartById(id)
            .then(cart => setCart(cart))
    const deleteCart = (id) =>
        cartService.deleteCart(id)
            .then(() => history.back())
    const updateCart = (id, newCart) =>
        cartService.updateCart(id, newCart)
            .then(() => history.back())
    return (
        <div>
            <Link to={`/`}>
                HOME
            </Link>
            <br/>
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
            <br/>
            <button className="btn btn-warning"
                onClick={() => {
                    history.back()}}>
                Cancel
            </button>
            <button className="btn btn-danger"
                    onClick={() => deleteCart(cart.id)}>
                Delete
            </button>
            <button className="btn btn-success"
                onClick={() => updateCart(cart.id, cart)}>
                Save
            </button>

            <button className="btn btn-success" onClick={() => createCart(cart)}>
                Create
            </button>

        </div>
    )
}

export default cartFormEditor