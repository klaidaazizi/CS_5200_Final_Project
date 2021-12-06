const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlineCartEditor = ({cart, deleteCart, updateCart}) => {
    const [cartCopy, setCartCopy] = useState(cart)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={cartCopy.createdDate}
                            onChange={(e)=>setCartCopy(cartCopy => ({...cartCopy, createdDate: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={cartCopy.payment}
                            onChange={(e)=>setCartCopy(cartCopy => ({...cartCopy, payment: e.target.value}))}/>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateCart(cartCopy.id, cartCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteCart(cart.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/carts/${cartCopy.id}`}>
                            {cartCopy.createdDate}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/carts/${cartCopy.id}`}>
                            {cartCopy.payment}
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

export default InlineCartEditor;