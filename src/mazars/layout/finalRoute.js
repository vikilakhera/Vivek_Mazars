import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {withRouter} from "react-router";
import Final from "./final";

function FinalRoute(){
    return(
        <Router>
            <Switch>
                <Route path="/:userType" component={Final}/>
                {/* <Route render={() => <Redirect to="/customer/dashboard"/>}/> */}
            </Switch>
        </Router>
    );
}

export default withRouter(FinalRoute);