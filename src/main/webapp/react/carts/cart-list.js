import cartService from "./cart-service"
const { useState, useEffect } = React;
const {Link, useHistory} = window.ReactRouterDOM;

const CartList = () => {
    const history = useHistory()
    const [carts, setCarts] = useState([])
    useEffect(() => {
        findAllCarts()
    }, [])
    const findAllCarts = () =>
        cartService.findAllCarts()
            .then(carts => setCarts(carts))
    return(
        <div>
            <h2>Cart List</h2>
            <button className="btn btn-primary" onClick={() => history.push("/carts/new")}>
                Add Cart
            </button>
            <ul className="list-group">
                {
                    carts.map(cart =>
                        <li className="list-group-item"
                            key={cart.id}>

                                {"Cart Name: " + cart.name}
                                {" | Date Created: " + cart.createdDate}
                                {" | Payment Type: " + cart.payment}
                            <Link to={`/carts/${cart.id}`}><button type="button" className="btn btn-outline-info">Edit</button>
                            </Link>

                            <Link to={`/customers/${cart.customer.id}`}>
                                <button type="button" className="btn btn-outline-success">Go to Customer</button>
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

export default CartList;