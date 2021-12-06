const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlineProductEditor = ({product, deleteProduct, updateProduct}) => {
    const [productCopy, setProductCopy] = useState(product)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={productCopy.name}
                            onChange={(e)=>setProductCopy(productCopy => ({...productCopy, name: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={productCopy.category}
                            onChange={(e)=>setProductCopy(productCopy => ({...productCopy, category: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={productCopy.price}
                            onChange={(e)=>setProductCopy(productCopy => ({...productCopy, price: e.target.value}))}/>
                    </div>

                    <div className="col">
                       <input
                          className="form-control"
                          value={productCopy.inventory}
                          onChange={(e)=>setProductCopy(productCopy => ({...productCopy, inventory: e.target.value}))}/>
                        </div>

                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateProduct(productCopy.id, productCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteProduct(product.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/products/${productCopy.id}`}>
                            {productCopy.name}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/products/${productCopy.id}`}>
                            {productCopy.category}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/products/${productCopy.id}`}>
                            {productCopy.price}
                        </Link>
                    </div>
                    <div className="col-1">
                        <Link to={`/products/${productCopy.id}/orders`}>
                            Orders
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-cog fa-2x float-right"
                           onClick={() => setEditing(true)}></i>
                    </div>
                </div>
            }
        </div>
    )
}

export default InlineProductEditor;