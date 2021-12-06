import sellerService from "./seller-service"
const { useState, useEffect } = React;
const {Link, useHistory} = window.ReactRouterDOM;

const SellerList = () => {
    const history = useHistory()
    const [sellers, setSellers] = useState([])
    useEffect(() => {
        findAllSellers()
    }, [])
    const findAllSellers = () =>
        sellerService.findAllSellers()
            .then(sellers => setSellers(sellers))
    return(
        <div>
            <h2>Seller List</h2>
            <button className="btn btn-primary" onClick={() => history.push("/sellers/new")}>
                Add Seller
            </button>
            <ul className="list-group">
                {
                    sellers.map(seller =>
                        <li className="list-group-item"
                            key={seller.id}>
                            <Link to={`/sellers/${seller.id}`}>
                                {seller.companyName},
                                {seller.yearFounded},
                                {seller.firstName},
                                {seller.lastName},

                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default SellerList;