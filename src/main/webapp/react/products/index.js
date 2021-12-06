import ProductList from "./product-list";
import ProductFormEditor from "./products/product-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/product", "/"]} exact={true}>
                    <ProductList/>
                </Route>
                <Route path="/product/:id" exact={true}>
                    <ProductFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
