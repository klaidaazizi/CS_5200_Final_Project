const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlineOrderEditor = ({order, deleteOrder, updateOrder}) => {
    const [orderCopy, setOrderCopy] = useState(order)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={orderCopy.createdDate}
                            onChange={(e)=>setOrderCopy(orderCopy => ({...orderCopy, createdDate: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={orderCopy.payment}
                            onChange={(e)=>setOrderCopy(orderCopy => ({...orderCopy, payment: e.target.value}))}/>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
    onClick={() => {
        setEditing(false)
        updateOrder(orderCopy.id, orderCopy)
    }}/>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
    onClick={() => setEditing(false)}/>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
    onClick={() => deleteOrder(order.id)}/>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/orders/${orderCopy.id}`}>
                            {orderCopy.createdDate}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/orders/${orderCopy.id}`}>
                            {orderCopy.payment}
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-cog fa-2x float-right"
    onClick={() => setEditing(true)}/>
                    </div>
                </div>
            }
        </div>
    )
}

export default InlineOrderEditor;