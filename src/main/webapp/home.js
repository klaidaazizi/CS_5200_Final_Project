
const {Link} = window.ReactRouterDOM;
const Home = () => {
    return (
        <div className="container-fluid">
            <Link to={`/products`}>
                Products
            </Link>
            <br/>
            <Link to={`/customers`}>
                Customers
            </Link>
            <br/>
            <Link to={`/sellers`}>
                Sellers
            </Link>
            <br/>
            <Link to={`/carts`}>
                Carts
            </Link>
            <br/>
        </div>
    );
}

export default Home;