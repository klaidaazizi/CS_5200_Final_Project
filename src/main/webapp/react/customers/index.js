import CustomersList from "./customer-list";
import CustomerFormEditor from "./customer-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/customers", "/"]} exact={true}>
                    <CustomersList/>
                </Route>
                <Route path="/customers/:id" exact={true}>
                    <CustomerFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
