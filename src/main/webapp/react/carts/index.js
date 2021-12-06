import CartList from "./cart-list";
import CartFormEditor from "./cart-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/carts", "/"]} exact={true}>
                    <CartList/>
                </Route>
                <Route path="/carts/:id" exact={true}>
                    <CartFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
