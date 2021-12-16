import discountService from "./discount-service"
const {useState, useEffect} = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const discountFormEditor = () => {
    const {id} = useParams()
    const [discount, setDiscount] = useState({})
    useEffect(() => {
        if(id !== "new") {
            findDiscountById(id)
        }
    }, []);
    const createDiscount = (discount) =>
        discountService.createDiscount(discount)
            .then(() => history.back())
    const findDiscountById = (id) =>
        discountService.findDiscountById(id)
            .then(discount => setDiscount(discount))
    const deleteDiscount = (id) =>
        discountService.deleteDiscount(id)
            .then(() => history.back())
    const updateDiscount = (id, newDiscount) =>
        discountService.updateDiscount(id, newDiscount)
            .then(() => history.back())
    return (
        <div>
            <Link to={`/`}>
                <button type="button" className="btn btn-outline-danger">HOME</button>
            </Link>
            <br/>
            <h2>Discount Editor</h2>
            <label>ID</label>
            <input value={discount.id}/><br/>
            <label>Title</label>
            <input
                onChange={(e) =>
                    setDiscount(discount =>
                        ({...discount, title: e.target.value}))}
                value={discount.title}/>
            <br/>
            <label>Start Date</label>
            <input
                onChange={(e) =>
                    setDiscount(discount =>
                        ({...discount, startDate: e.target.value}))}
                value={discount.startDate}/>
            <br/>
            <label>End Date</label>
            <input
                onChange={(e) =>
                    setDiscount(discount =>
                        ({...discount, endDate: e.target.value}))}
                value={discount.endDate}/>
            <br/>
            <br/>
            <button className="btn btn-warning"
                onClick={() => {
                    history.back()}}>
                Cancel
            </button>
            <button className="btn btn-danger"
                    onClick={() => deleteDiscount(discount.id)}>
                Delete
            </button>
            <button className="btn btn-success"
                onClick={() => updateDiscount(discount.id, discount)}>
                Save
            </button>

            <button className="btn btn-primary" onClick={() => createDiscount(discount)}>
                Create
            </button>

        </div>
    )
}

export default discountFormEditor;