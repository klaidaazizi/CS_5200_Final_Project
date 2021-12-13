import sellerService from "./seller-service"
const {useState, useEffect} = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const SellerFormEditor = () => {
    const {id} = useParams()
    const [seller, setSeller] = useState({})
    useEffect(() => {
        if(id !== "new") {
            findSellerById(id)
        }
    }, []);
    const createSeller = (seller) =>
        sellerService.createSeller(seller)
            .then(() => history.back())
    const findSellerById = (id) =>
        sellerService.findSellerById(id)
            .then(seller => setSeller(seller))
    const deleteSeller = (id) =>
        sellerService.deleteSeller(id)
            .then(() => history.back())
    const updateSeller = (id, newSeller) =>
        sellerService.updateSeller(id, newSeller)
            .then(() => history.back())
    return (
        <div>
            <h2>Seller Editor</h2>
            <Link to={`/`}>
                HOME
            </Link>
            <br/>
            <Link to={`/follows/bySeller/${seller.id}`}>
                Link to Followed Customers
            </Link>
            <br/>
            <label>ID</label>
            <input value={seller.id}/><br/>
            <label>Company Name</label>
            <input
                onChange={(e) =>
                    setSeller(seller =>
                        ({...seller, companyName: e.target.value}))}
                value={seller.companyName}/>
            <br/>
            <label>Year Founded</label>
            <input
                onChange={(e) =>
                    setSeller(seller =>
                        ({...seller, yearFounded: e.target.value}))}
                value={seller.yearFounded}/>
            <br/>
            <label>First Name</label>
            <input onChange={(e) =>
                setSeller(seller =>
                    ({...seller, firstName: e.target.value}))}
                   value={seller.firstName}/>
            <br/>
            <label>Last Name</label>
            <input
                onChange={(e) =>
                    setSeller(seller =>
                        ({...seller, lastName: e.target.value}))}
                value={seller.lastName}/>
            <br/>
            <label>Username</label>
            <input
                onChange={(e) =>
                    setSeller(seller =>
                        ({...seller, username: e.target.value}))}
                value={seller.username}/>
            <br/>
            <label>Password</label>
            <input
                onChange={(e) =>
                    setSeller(seller =>
                        ({...seller, password: e.target.value}))}
                value={seller.password}/>
            <br/>
            <label>Email</label>
            <input
                onChange={(e) =>
                    setSeller(seller =>
                        ({...seller, email: e.target.value}))}
                value={seller.email}/>
            <br/>
            <label>Date Of Birth</label>
            <input
                onChange={(e) =>
                    setSeller(seller =>
                        ({...seller, dateOfBirth: e.target.value}))}
                value={seller.dateOfBirth}/>
            <br/>
            <label>Street Address</label>
            <input
                onChange={(e) =>
                    setSeller(seller =>
                        ({...seller, streetAddress: e.target.value}))}
                value={seller.streetAddress}/>
            <br/>
            <label>City</label>
            <input
                onChange={(e) =>
                    setSeller(seller =>
                        ({...seller, city: e.target.value}))}
                value={seller.city}/>
            <br/>
            <label>State</label>
            <input
                onChange={(e) =>
                    setSeller(seller =>
                        ({...seller, state: e.target.value}))}
                value={seller.state}/>
            <br/>
            <label>Zip Code</label>
            <input
                onChange={(e) =>
                    setSeller(seller =>
                        ({...seller, zipCode: e.target.value}))}
                value={seller.zipCode}/>
            <br/>
            <label>Phone Number</label>
            <input
                onChange={(e) =>
                    setSeller(seller =>
                        ({...seller, phoneNumber: e.target.value}))}
                value={seller.phoneNumber}/>
            <br/>
            <br/>
            <button className="btn btn-warning"
                onClick={() => {
                    history.back()}}>
                Cancel
            </button>
            <button className="btn btn-danger"
                    onClick={() => deleteSeller(seller.id)}>
                Delete
            </button>
            <button className="btn btn-success"
                onClick={() => updateSeller(seller.id, seller)}>
                Save
            </button>

            <button className="btn btn-success" onClick={() => createSeller(seller)}>
                Create
            </button>

        </div>
    )
}

export default SellerFormEditor