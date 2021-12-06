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
            <ul className="list-group">
                {
                    products.map(product =>
                        <li className="list-group-item"
                            key={product.id}>
                            <Link to={`/products/${product.id}`}>
                                {product.name},
                                {product.category},
                                {product.price},
                                {product.inventory},
                                {product.weight},
                                {product.ageGroup},
                                {product.discount},


                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default ProductList;