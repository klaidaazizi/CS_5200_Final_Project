import CustomersList from "./react/customers/customer-list";
import CustomerFormEditor from "./react/customers/customer-form-editor";
import CustomerFormEditorByCart from "./react/customers/customer-form-editor-by-cart"
import CartList from "./react/carts/cart-list";
import CartFormEditor from "./react/carts/cart-form-editor";
import CartListByCustomer from "./react/carts/cart-list-by-customer";
import ProductList from "./react/products/product-list";
import ProductFormEditor from "./react/products/product-form-editor";
import SellerList from "./react/sellers/seller-list";
import SellerFormEditor from "./react/sellers/seller-form-editor";
import HomePage from "./home.js"


const {HashRouter, Route} = window.ReactRouterDOM;
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path="/" exact={true}>
                    <HomePage/>
                </Route>
                <Route path={["/customers"]} exact={true}>
                    <CustomersList/>
                </Route>
                <Route path="/customers/:id" exact={true}>
                    <CustomerFormEditor/>
                </Route>
                <Route path={"/carts"} exact={true}>
                    <CartList/>
                </Route>
                <Route path="/carts/:id" exact={true}>
                    <CartFormEditor/>
                </Route>
                <Route path="/customerForCart/:id" exact={true}>
                    <CustomerFormEditorByCart/>
                </Route>
                <Route path="/cartsByCustomer/:id" exact={true}>
                    <CartListByCustomer/>
                </Route>
                <Route path={"/products"} exact={true}>
                    <ProductList/>
                </Route>
                <Route path="/products/:id" exact={true}>
                    <ProductFormEditor/>
                </Route>
                <Route path={"/sellers"} exact={true}>
                    <SellerList/>
                </Route>
                <Route path="/sellers/:id" exact={true}>
                    <SellerFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
