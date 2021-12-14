import followService from "./follow-service"
const { useState, useEffect } = React;
const {Link, useHistory} = window.ReactRouterDOM;

const FollowList = () => {
    const [follows, setFollows] = useState([])
    useEffect(() => {
        findAllFollows()
    }, [])
    const findAllFollows = () =>
        fetch("http://localhost:8080/api/follows")
            .then(response => response.json())
            .then(follows => setFollows(follows))
    return(
        <div>
            <h2>Follow List</h2>
            <button className="btn btn-primary" onClick={() => history.push("/customers/new")}>
                Add Follow
            </button>
            <ul className="list-group">
                {
                    follows.map(follow =>
                        <li className="list-group-item"
                            key={follow.id}>
                            <Link to={`/follows/bySeller/${follow.seller.id}`}>
                                {follow.seller.companyName}
                            </Link>
                            {" <--> "}
                            <Link to={`/follows/byCustomer/${follow.customer.id}`}>
                                {follow.customer.firstName}
                                {" " + follow.customer.lastName}
                            </Link>
                            {" | Date Created: " + follow.dateCreated}
                            <br/>
                        </li>)
                }
            </ul>
            <Link to={`/`}>
                HOME
            </Link>
        </div>
    )
}

export default FollowList;