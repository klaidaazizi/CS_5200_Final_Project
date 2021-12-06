import customerService from "./customer-service"
const { useState, useEffect } = React;
const {Link, useHistory} = window.ReactRouterDOM;

const CustomerList = () => {
    const history = useHistory()
    const [customer, setCustomers] = useState([])
    useEffect(() => {
        findAllCustomers()
    }, [])
    const findAllCustomers = () =>
        customerService.findAllCustomers()
            .then(customer => setCustomers(customer))
    return(
        <div>
            <h2>Customer List</h2>
            <button className="btn btn-primary" onClick={() => history.push("/customers/new")}>
                Add Customer
            </button>
            <ul className="list-group">
                {
                    customer.map(customer =>
                        <li className="list-group-item"
                            key={customer.id}>
                            <Link to={`/customers/${customer.id}`}>
                                {customer.firstName},
                                {customer.lastName},
                                {customer.age},
                                {customer.profilePicture}
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default CustomerList;