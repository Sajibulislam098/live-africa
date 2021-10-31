import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import AuthProvider from "./context/AuthProvider";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import BookOffer from "./components/BookOffer/BookOffer";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import MyBookings from "./components/MyBookings/MyBookings";
import AllBookings from "./components/AllBookings/AllBookings";
import AddService from "./components/AddService/AddService";
import ManageAllOffers from "./components/ManageAllOffers/ManageAllOffers";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signUp">
            <SignUp></SignUp>
          </Route>
          <PrivateRoute path="/offers/:id">
            <BookOffer></BookOffer>
          </PrivateRoute>
          <PrivateRoute path="/myBookings">
            <MyBookings></MyBookings>
          </PrivateRoute>
          <PrivateRoute path="/allBookings">
            <AllBookings></AllBookings>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/allOffers">
            <ManageAllOffers></ManageAllOffers>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
