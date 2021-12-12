import cartService from "./cart-service"
const { useState, useEffect } = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const CartListByCustomer = () => {
    const {id} = useParams()
    const history = useHistory()
    const [carts, setCarts] = useState([])
    useEffect(() => {
        findCartsByCustomer(id)
    }, [])
    const findCartsByCustomer = (id) =>
        cartService.findCartsByCustomer(id)
            .then(carts => setCarts(carts))
    return(
        <div>
            <h2>Cart List By Customer</h2>
            <button className="btn btn-primary" onClick={() => history.push("/carts/new")}>
                Add Cart
            </button>
            <ul className="list-group">
                {
                    carts.map(cart =>
                        <li className="list-group-item"
                            key={cart.id}>
                            <Link to={`/carts/${cart.id}`}>
                                {cart.createdDate},
                                {cart.payment}
                            </Link>
                            <br/>
                            <Link to={`/customerForCart/${cart.id}`}>
                                Link to Customer
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default CartListByCustomer;