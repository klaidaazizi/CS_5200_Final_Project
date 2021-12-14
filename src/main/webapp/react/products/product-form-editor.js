import productService from "./product-service"
const {useState, useEffect} = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const ProductFormEditor = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        if(id !== "new") {
            findProductById(id)
        }
    }, []);
    const createProduct = (product) =>
        productService.createProduct(product)
            .then(() => history.back())
    const findProductById = (id) =>
        productService.findProductById(id)
            .then(product => setProduct(product))
    const deleteProduct = (id) =>
        productService.deleteProduct(id)
            .then(() => history.back())
    const updateProduct = (id, newProduct) =>
        productService.updateProduct(id, newProduct)
            .then(() => history.back())
    return (
        <div>
            <h2>Product Editor</h2>

            <Link to={`/ordersByProduct/${product.id}`}>
                Link to Orders
            </Link>
            <br/>
            <label>ID</label>
            <input value={product.id}/><br/>
            <label>Name</label>
            <input onChange={(e) =>
                setProduct(product =>
                    ({...product, name: e.target.value}))}
                   value={product.name}/>
            <br/>
            <label>Category</label>
            <input
                onChange={(e) =>
                    setProduct(product =>
                        ({...product, category: e.target.value}))}
                value={product.category}/>
            <br/>
            <label>Price</label>
            <input
                onChange={(e) =>
                    setProduct(product =>
                        ({...product, price: e.target.value}))}
                value={product.price}/>
            <br/>
            <label>Inventory</label>
            <input
                onChange={(e) =>
                    setProduct(product =>
                        ({...product, inventory: e.target.value}))}
                value={product.inventory}/>
            <br/>
            <label>Weight</label>
            <input
                onChange={(e) =>
                setProduct(product =>
                ({...product, weight: e.target.value}))}
                value={product.weight}/>
            <br/>
            <label>Age Group</label>
                <input
                  onChange={(e) =>
                    setProduct(product =>
                       ({...product, ageGroup: e.target.value}))}
                       value={product.ageGroup}/>
                        <br/>
            <br/>
            <label>Discount</label>
            <input
                onChange={(e) =>
                    setProduct(product =>
                        ({...product, discount: e.target.value}))}
                value={product.discount}/>
            <br/>
            <br/>
               <br/>
            <button className="btn btn-warning"
                onClick={() => {
                    history.back()}}>
                Cancel
            </button>
            <button className="btn btn-danger"
                    onClick={() => deleteProduct(product.id)}>
                Delete
            </button>
            <button className="btn btn-success"
                onClick={() => updateProduct(product.id, product)}>
                Save
            </button>

            <button className="btn btn-success" onClick={() => createProduct(product)}>
                Create
            </button>

        </div>
    )
}

export default ProductFormEditor