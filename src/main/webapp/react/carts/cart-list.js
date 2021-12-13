import cartService from "./cart-service"
const { useState, useEffect } = React;
const {Link, useHistory} = window.ReactRouterDOM;

const CartList = () => {
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
                            <Link to={`/carts/${cart.id}`}>
                                {cart.createdDate},
                                {cart.payment}
                            </Link>
                            <br/>
                            <Link to={`/customers/${cart.customer.id}`}>
                                Link to Customer
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

export default CartList;