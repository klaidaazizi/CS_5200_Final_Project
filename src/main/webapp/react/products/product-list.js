import productService from "./product-service"
const { useState, useEffect } = React;
const {Link, useHistory} = window.ReactRouterDOM;

const ProductList = () => {
    const history = useHistory()
    const [products, setProducts] = useState([])
    useEffect(() => {
        findAllProducts()
    }, [])
    const findAllProducts = () =>
        productService.findAllProducts()
            .then(products => setProducts(products))
    return(
        <div>
            <h2>Product List</h2>
            <button className="btn btn-primary" onClick={() => history.push("/products/new")}>
                Add Product
            </button>
            <br/>
            <ul className="list-group">
                {
                    products.map(product =>
                        <li className="list-group-item"
                            key={product.id}>
                            <Link to={`/products/${product.id}`}>
                                {"Product Name: " + product.name}
                                {" | Category: " + product.category}
                                {" | Price: $" + product.price}
                                {" | Inventory: " + product.inventory}
                            </Link>
                             <br/>
                            <Link to={`/sellers/${product.seller.id}`}>
                                Link to Seller
                            </Link>
                        </li>)
                }
            </ul>
            <Link to={`/`}>
                HOME
            </Link>
        </div>
    )
}

export default ProductList;