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
                                {"Name: " + customer.firstName}
                                {" " + customer.lastName}
                                {" | Age: " + customer.age}
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

export default CustomerList;