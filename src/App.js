import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Headers from './components/Headers/Headers';
import AuthProvider from './contexts/AuthProvider';
import Dashboard from './pages/Dashboard/Dashboard';
import ExploreProducts from './pages/ExploreProducts/ExploreProducts';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import LoginRoute from './pages/LoginRoute/LoginRoute';
import NotFound from './pages/NotFound/NotFound';
import Purchase from './pages/Purchase/Purchase';
import Register from './pages/Register.js/Register';
import PrivateRoute from './pages/Routes/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Headers></Headers>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <LoginRoute path="/login">
              <Login></Login>
            </LoginRoute>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route exact path="/explore">
              <ExploreProducts></ExploreProducts>
            </Route>
            
            <PrivateRoute path="/products/:id">
              <Purchase></Purchase>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
