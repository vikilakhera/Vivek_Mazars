import './App.css';
import Login from "./mazars/login/login";
import Final from "./mazars/layout/final";
import ProtectedRoute from  "./mazars/login/protectedRoute";
import {
  Switch,
  Route,
  Redirect  
} from "react-router-dom";

function App() {
  return (

      <Switch>
        <Route path="/:userType/login">
          <Login/>
        </Route>
        <ProtectedRoute path="/:userType" component={Final} />
        <Route path="*">
          <Redirect from="/" to="/customer/dashboard"/>
        </Route>
      </Switch>

  );
}

export default App;
