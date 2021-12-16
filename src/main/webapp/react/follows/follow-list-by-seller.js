const { useState, useEffect } = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const FollowListBySeller = () => {
    const history = useHistory()
    const {id} = useParams()
    const [follows, setFollows] = useState([])
    useEffect(() => {
        findFollowsBySellerId(id)
    }, [])
    const findFollowsBySellerId = (id) =>
        fetch(`http://localhost:8080/api/follows/bySeller/${id}`)
            .then(response => response.json())
            .then(follows => setFollows(follows))
    return(
        <div>
            <h2>Follow List By Seller</h2>
            <button className="btn btn-primary" onClick={() => history.push("/follow/followNewCustomer/" + id)}>
                Follow New Customer
            </button>
            <ul className="list-group">
                {
                    follows.map(follow =>
                        <li className="list-group-item"
                            key={follow.id}>
                            <Link to={`/sellers/${follow.seller.id}`}>
                                {follow.seller.companyName}
                            </Link>
                            {" <--> "}
                            <Link to={`/customers/${follow.customer.id}`}>
                                {follow.customer.firstName}
                                {" " + follow.customer.lastName}
                            </Link>
                            {" | Date Created: " + follow.dateCreated}
                            <br/>
                        </li>)
                }
            </ul>
            <Link to={`/`}>
                <button type="button" className="btn btn-outline-danger">HOME</button>
            </Link>
        </div>
    )
}

export default FollowListBySeller;