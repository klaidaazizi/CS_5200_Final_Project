
const {Link} = window.ReactRouterDOM;

const Home = () => {
    return (
        <div className="container-fluid">
            <h1>E-Commerce Database</h1>
            <br/>
            <h3>Log-in as Seller or Customer</h3>
            <Link to={`/customers`}><button type="button" className="btn btn-outline-danger">
                Customers
            </button>
            </Link>

            <br/>
            <Link to={`/sellers`}><button type="button" className="btn btn-outline-success">
                Sellers
            </button></Link>
            <br/>
            <br/>
            <h3>View All Products</h3>
            <Link to={`/products`}><button type="button" className="btn btn-outline-primary">
                Products
            </button>
            </Link>
            <br/>
        </div>
    );
}

export default Home;