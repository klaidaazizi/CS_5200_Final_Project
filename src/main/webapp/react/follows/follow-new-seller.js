import sellerService from "./seller-service"
const { useState, useEffect } = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const FollowNewSeller = () => {
    const {customerId} = useParams()
    const [sellers, setSellers] = useState([])
    useEffect(() => {
        findAllSellers()
    }, [])
    const findAllSellers = () =>
        sellerService.findAllSellers()
            .then(sellers => setSellers(sellers))
    const createFollow = (sellerId, customerId) =>
        fetch(`http://localhost:8080/api/follows/newFollow/${sellerId}/${customerId}`, {
            method: 'POST',
        }).then(() => history.back())
    return(
        <div>
            <h2>Seller List</h2>
            <ul className="list-group">
                {
                    sellers.map(seller =>
                        <li className="list-group-item" key={seller.id}>
                            <button onClick={() => createFollow(seller.id, customerId)}>
                                {"ID: " + seller.id + " | "}
                                {seller.firstName + " | "}
                                {seller.lastName + " | "}
                                {seller.companyName}
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

export default FollowNewSeller;