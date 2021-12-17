import discountService, {findDiscountByProduct} from "./discount-service"
const { useState, useEffect } = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const DiscountByProduct = () => {
    const history = useHistory()
    const {id} = useParams()
    const [discounts, setDiscounts] = useState([])
    useEffect(() => {
        findDiscountByProduct(id)
    }, [])
    const findDiscountByProduct = (id) =>
        discountService.findDiscountByProduct(id)
            .then(discounts => setDiscounts(discounts))
    return(
        <div>
            <h2>Discount for Product</h2>

            <ul className="list-group">
                {
                    discounts.map(discount =>
                        <li className="list-group-item"
                            key={discount.id}>
                                {" Title: " + discount.title}
                                {" | Start date: " + discount.startDate},
                                {" | End date: " + discount.endDate + ' '}
                                <Link to={`/discounts/${discount.id}`}> <button type="button" className="btn btn-outline-info">Edit</button></Link>
                            <Link to={`/products/${discount.product.id}`}>
                                <button type="button" className="btn btn-outline-success">Go to Product</button>
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

export default DiscountByProduct;