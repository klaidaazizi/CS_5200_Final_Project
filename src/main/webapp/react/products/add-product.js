import productService from "./product-service"
const {useState, useEffect} = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const AddProduct = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})
    const createProduct = (product, id) =>
        productService.createProduct(product, id)
            .then(() => history.back())
    return (
        <div>
            <h2>Product Creator</h2>
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
            <button className="btn btn-success" onClick={() => createProduct(product, id)}>
                Create
            </button>

        </div>
    )
}

export default AddProduct