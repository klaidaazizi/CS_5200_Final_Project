import customerService from "../customers/customer-service.js"
const { useState, useEffect } = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const FollowNewCustomer = () => {
    const {sellerId} = useParams()
    const [customer, setCustomers] = useState([])
    useEffect(() => {
        findAllCustomers()
    }, [])
    const findAllCustomers = () =>
        customerService.findAllCustomers()
            .then(customer => setCustomers(customer))
    const createFollow = (sellerId, customerId) =>
        fetch(`http://localhost:8080/api/follows/newFollow/${sellerId}/${customerId}`, {
            method: 'POST',
        }).then(() => history.back())
    return(
        <div>
            <h2>Customer List</h2>
            <ul className="list-group">
                {
                    customer.map(customer =>
                        <li className="list-group-item" key={customer.id}>
                            <button onClick={() => createFollow(sellerId, customer.id)}>
                                {"ID: " + customer.id + " | "}
                                {customer.firstName + " | "}
                                {customer.lastName + " | "}
                                {customer.age + " | "}
                                {customer.profilePicture}
                            </button>
                        </li>)
                }
            </ul>
            <Link to={`/`}>
                HOME
            </Link>
        </div>
    )
}

export default FollowNewCustomer;