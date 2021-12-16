import discountService from "./discount-service"
const { useState, useEffect } = React;
const {Link, useHistory} = window.ReactRouterDOM;

const DiscountList = () => {
    const history = useHistory()
    const [discounts, setDiscounts] = useState([])
    useEffect(() => {
        findAllDiscounts()
    }, [])
    const findAllDiscounts = () =>
        discountService.findAllDiscounts()
            .then(discounts => setDiscounts(discounts))
    return(
        <div>
            <h2>Discount List</h2>
            <button className="btn btn-primary" onClick={() => history.push("/discounts/new")}>
                Add Discount
            </button>
            <ul className="list-group">
                {
                    discount.map(discount =>
                        <li className="list-group-item"
                            key={discount.id}>
                                {discount.title},
                                {discount.description}
                                <Link to={`/discounts/${discount.id}`}><button type="button" className="btn btn-outline-info">Edit</button>
                            </Link>

                            <Link to={`/products/${discount.product.id}`}><button type="button" className="btn btn-outline-success">Go to Product</button>
                            </Link>
                        </li>)
                }
            </ul>
            <Link to={`/`}>
                <button type="button" className="btn btn-outline-danger">HOME</button>
            </Link>
        </div>
    )
}

export default DiscountList;