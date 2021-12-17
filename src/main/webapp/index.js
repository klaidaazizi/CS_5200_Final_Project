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
import FollowList from "./react/follows/follow-list.js";
import FollowListByCustomer from "./react/follows/follow-list-by-customer.js";
import FollowListBySeller from "./react/follows/follow-list-by-seller.js";
import FollowNewCustomer from "./react/follows/follow-new-customer.js";
import FollowNewSeller from "./react/follows/follow-new-seller.js";
import SellerFormEditorByProduct from "./react/sellers/seller-form-editor-by-product";
import ProductListBySeller from "./react/products/product-list-by-seller";
import ProductFormEditorByOrder from "./react/products/product-form-editor-by-order";
import HomePage from "./home.js"
import OrderList from "./react/orders/order-list";
import OrderFormEditor from "./react/orders/order-form-editor";
import OrderListByProduct from "./react/orders/order-list-by-product";
import DiscountList from "./react/discounts/discount-list";
import DiscountFormEditor from "./react/discounts/discount-form-editor";
import ProductFormEditorByDiscount from "./react/products/product-form-editor-by-discount";
import DiscountByProduct from "./react/discounts/discount-by-product";
import DiscountAdderForm from "./react/discounts/add-discount";
import OrderListByCart from "./react/orders/order-list-by-cart";
import OrderAdderForm from "./react/orders/add-order";
import ProductAdder from "./react/products/add-product";

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
                <Route path="/products/new/:id" exact={true}>
                    <ProductAdder/>
                </Route>
                <Route path={"/orders"} exact={true}>
                    <OrderList/>
                </Route>
                <Route path="/orders/:id" exact={true}>
                    <OrderFormEditor/>
                </Route>
                <Route path="/orders/addOrder/:id" exact={true}>
                    <OrderAdderForm/>
                </Route>
                <Route path="/productForOrder/:id" exact={true}>
                    <ProductFormEditorByOrder/>
                </Route>
                <Route path="/ordersByProduct/:id" exact={true}>
                    <OrderListByProduct/>
                </Route>
                <Route path="/ordersByCart/:id" exact={true}>
                    <OrderListByCart/>
                </Route>
                <Route path={"/discounts"} exact={true}>
                    <DiscountList/>
                </Route>
                <Route path="/discounts/:id" exact={true}>
                    <DiscountFormEditor/>
                </Route>
                <Route path="/discounts/addDiscount/:id" exact={true}>
                    <DiscountAdderForm/>
                </Route>
                <Route path="/discountByProduct/:id" exact={true}>
                    <DiscountByProduct/>
                </Route>
                <Route path="/productForDiscount/:id" exact={true}>
                    <ProductFormEditorByDiscount/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
