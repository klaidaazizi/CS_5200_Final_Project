import discountService from "./discount-service"
const {useState, useEffect} = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const discountAdderForm = () => {
    const {id} = useParams()
    const [discount, setDiscount] = useState({})
    useEffect(() => {}, []);
    const addDiscount = (discount, id) =>
        discountService.addDiscount(discount, id)
            .then(() => history.back())
    return (
        <div>
            <h2>Discount Editor</h2>
            <label>ID</label>
            <input value={discount.id}/><br/>
            <label>Payment Type</label>
            <input
                onChange={(e) =>
                    setDiscount(discount =>
                        ({...discount, title: e.target.value}))}
                value={discount.title}/>
            <br/>
            <Link to={`/`}>
                <button type="button" className="btn btn-outline-danger">HOME</button>
            </Link>
            <br/>
            <button className="btn btn-warning"
                    onClick={() => {
                        history.back()}}>
                Cancel
            </button>

            <button className="btn btn-success" onClick={() => addDiscount(discount, id)}>
                Add
            </button>

        </div>
    )
}

export default discountAdderForm;