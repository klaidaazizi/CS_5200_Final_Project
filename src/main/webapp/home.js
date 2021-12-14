
const {Link} = window.ReactRouterDOM;

const Home = () => {
    return (
        <div className="container-fluid">
            <h1>E-Commerce Database</h1>
            <br/>
            <h3>Log-in as Seller or Customer</h3>
            <Link to={`/customers`}>
                Customers
            </Link>
            <br/>
            <Link to={`/sellers`}>
                Sellers
            </Link>
            <br/>
            <br/>
            <h3>View All Products</h3>
            <Link to={`/products`}>
                Products
            </Link>
            <br/>
        </div>
    );
}

export default Home;