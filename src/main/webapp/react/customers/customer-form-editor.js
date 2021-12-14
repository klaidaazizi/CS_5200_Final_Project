import customerService from "./customer-service";
const {useState, useEffect} = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const CustomerFormEditor = () => {
    const {id} = useParams()
    const [customer, setCustomer] = useState({})
    useEffect(() => {
        if(id !== "new") {
            findCustomerById(id)
        }
    }, []);
    const createCustomer = (customer) =>
        customerService.createCustomer(customer)
            .then(() => history.back())
    const findCustomerById = (id) =>
        customerService.findCustomerById(id)
            .then(customer => setCustomer(customer))
    const deleteCustomer = (id) =>
        customerService.deleteCustomer(id)
            .then(() => history.back())
    const updateCustomer = (id, newCustomer) =>
        customerService.updateCustomer(id, newCustomer)
            .then(() => history.back())
    return (
        <div>
            <h2>Customer Editor</h2>
            <Link to={`/`}>
                HOME
            </Link>
            <br/>
            <Link to={`/cartsByCustomer/${customer.id}`}>
                Link to Carts
            </Link>
            <br/>
            <Link to={`/follows/byCustomer/${customer.id}`}>
                Link to Followed Sellers
            </Link>
            <br/>
            <br/>
            <label>ID</label>
            <input value={customer.id}/><br/>
            <label>First Name</label>
            <input onChange={(e) =>
                setCustomer(customer =>
                    ({...customer, firstName: e.target.value}))}
                   value={customer.firstName}/>
            <br/>
            <label>Last Name</label>
            <input
                onChange={(e) =>
                    setCustomer(customer =>
                        ({...customer, lastName: e.target.value}))}
                value={customer.lastName}/>
            <br/>
            <label>Age</label>
            <input
                onChange={(e) =>
                    setCustomer(customer =>
                        ({...customer, age: e.target.value}))}
                value={customer.age}/>
            <br/>
            <label>Profile Picture</label>
            <input
                onChange={(e) =>
                    setCustomer(customer =>
                        ({...customer, profilePicture: e.target.value}))}
                value={customer.profilePicture}/>
            <br/>
            <label>Username</label>
            <input
                onChange={(e) =>
                    setCustomer(customer =>
                        ({...customer, username: e.target.value}))}
                value={customer.username}/>
            <br/>
            <label>Password</label>
            <input
                onChange={(e) =>
                    setCustomer(customer =>
                        ({...customer, password: e.target.value}))}
                value={customer.password}/>
            <br/>
            <label>Email</label>
            <input
                onChange={(e) =>
                    setCustomer(customer =>
                        ({...customer, email: e.target.value}))}
                value={customer.email}/>
            <br/>
            <label>Date Of Birth</label>
            <input
                onChange={(e) =>
                    setCustomer(customer =>
                        ({...customer, dateOfBirth: e.target.value}))}
                value={customer.dateOfBirth}/>
            <br/>
            <label>Street Address</label>
            <input
                onChange={(e) =>
                    setCustomer(customer =>
                        ({...customer, streetAddress: e.target.value}))}
                value={customer.streetAddress}/>
            <br/>
            <label>City</label>
            <input
                onChange={(e) =>
                    setCustomer(customer =>
                        ({...customer, city: e.target.value}))}
                value={customer.city}/>
            <br/>
            <label>State</label>
            <input
                onChange={(e) =>
                    setCustomer(customer =>
                        ({...customer, state: e.target.value}))}
                value={customer.state}/>
            <br/>
            <label>Zip Code</label>
            <input
                onChange={(e) =>
                    setCustomer(customer =>
                        ({...customer, zipCode: e.target.value}))}
                value={customer.zipCode}/>
            <br/>
            <label>Phone Number</label>
            <input
                onChange={(e) =>
                    setCustomer(customer =>
                        ({...customer, phoneNumber: e.target.value}))}
                value={customer.phoneNumber}/>
            <br/>
            <br/>
            <button className="btn btn-warning"
                onClick={() => {
                    history.back()}}>
                Cancel
            </button>
            <button className="btn btn-danger"
                    onClick={() => deleteCustomer(customer.id)}>
                Delete
            </button>
            <button className="btn btn-success"
                onClick={() => updateCustomer(customer.id, customer)}>
                Save
            </button>

            <button className="btn btn-success" onClick={() => createCustomer(customer)}>
                Create
            </button>

        </div>
    )
}

export default CustomerFormEditor;