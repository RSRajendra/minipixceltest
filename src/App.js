import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import DashboardPage from "./layout/dashboard";
import LoginPage from "./pages/login";
function App() {
  let isAuthenticated = !!localStorage.getItem("isAuthenticated");
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) =>
              isAuthenticated ? <DashboardPage {...props} /> : <LoginPage />
            }
          ></Route>
          <Route
            path="/admin"
            render={(props) =>
              isAuthenticated ? (
                <DashboardPage {...props} />
              ) : (
                <Redirect to="/"></Redirect>
              )
            }
          ></Route>
          <Route path="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
