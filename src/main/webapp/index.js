import CustomersList from "./react/customers/customer-list";
import CustomerFormEditor from "./react/customers/customer-form-editor";
import CustomerFormEditorByCart from "./react/customers/customer-form-editor-by-cart"
import CartList from "./react/carts/cart-list";
import CartFormEditor from "./react/carts/cart-form-editor";
import CartListByCustomer from "./react/carts/cart-list-by-customer";
import CartAdderForm from "./react/carts/add-cart.js"
import ProductList from "./react/products/product-list";
import ProductFormEditor from "./react/products/product-form-editor";
import SellerList from "./react/sellers/seller-list";
import SellerFormEditor from "./react/sellers/seller-form-editor";
import FollowList from "./react/follows/follow-list.js"
import FollowListByCustomer from "./react/follows/follow-list-by-customer.js"
import FollowListBySeller from "./react/follows/follow-list-by-seller.js"
import FollowNewCustomer from "./react/follows/follow-new-customer.js"
import FollowNewSeller from "./react/follows/follow-new-seller.js"
import SellerFormEditorByProduct from "./react/sellers/seller-form-editor-by-product"
import ProductListBySeller from "./react/products/product-list-by-sellers";
import HomePage from "./home.js"

const {HashRouter, Route} = window.ReactRouterDOM;
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/","../home"]} exact={true}>
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
                <Route path="/carts/addCart/:id" exact={true}>
                    <CartAdderForm/>
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
                <Route path={"/follows"} exact={true}>
                    <FollowList/>
                </Route>
                <Route path={"/follows/byCustomer/:id"} exact={true}>
                    <FollowListByCustomer/>
                </Route>
                <Route path={"/follows/bySeller/:id"} exact={true}>
                    <FollowListBySeller/>
                </Route>
                <Route path={"/follow/followNewCustomer/:sellerId"} exact={true}>
                    <FollowNewCustomer/>
                </Route>
                <Route path={"/follow/followNewSeller/:customerId"} exact={true}>
                    <FollowNewSeller/>
                </Route>
                <Route path="/sellerForProduct/:id" exact={true}>
                    <SellerFormEditorByProduct/>
                </Route>
                <Route path="/productsBySeller/:id" exact={true}>
                    <ProductListBySeller/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
