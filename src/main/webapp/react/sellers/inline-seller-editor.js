const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlineSellerEditor = ({seller, deleteSeller, updateSeller}) => {
    const [sellerCopy, setSellerCopy] = useState(seller)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={sellerCopy.firstName}
                            onChange={(e)=>setSellerCopy(sellerCopy => ({...sellerCopy, firstName: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={sellerCopy.lastName}
                            onChange={(e)=>setSellerCopy(sellerCopy => ({...sellerCopy, lastName: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={sellerCopy.username}
                            onChange={(e)=>setSellerCopy(sellerCopy => ({...sellerCopy, username: e.target.value}))}/>
                    </div>
                    <div className="col-1">
                        <Link to={`/sellers/${sellerCopy.id}/follows`}>
                            Follows
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateSeller(sellerCopy.id, sellerCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteSeller(seller.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/sellers/${sellerCopy.id}`}>
                            {sellerCopy.firstName}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/sellers/${sellerCopy.id}`}>
                            {sellerCopy.lastName}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/sellers/${sellerCopy.id}`}>
                            {sellerCopy.username}
                        </Link>
                    </div>
                    <div className="col-1">
                        <Link to={`/sellers/${sellerCopy.id}/blogs`}>
                            Blogs
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

export default InlineSellerEditor;