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
                                {"Company Name: " + seller.companyName}
                                {" | Owner: " + seller.firstName}
                                {" " + seller.lastName}
                                {" | Year Founded: " + seller.yearFounded + "  "}
                            <Link to={`/sellers/${seller.id}`}>
                                <button type="button" className="btn btn-outline-info">Edit</button>
                            </Link>
                        </li>)
                }
            </ul>
<br/>
            <Link to={`/`}>
                <button type="button" className="btn btn-outline-danger">HOME</button>
            </Link>
        </div>
    )
}

export default SellerList;