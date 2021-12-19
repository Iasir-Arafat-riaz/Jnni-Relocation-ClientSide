import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomeMain from "./pages/Home/HomeMain/HomeMain";
import Error from "./pages/Error/Error";
import Header from "./pages/Shared/Header/Header";
import DashboardMain from "./pages/Dashboard/DashboardMain/DashboardMain";
import MyBooking from "./pages/Dashboard/MyBooking/MyBooking";
import ServiceReview from "./pages/Dashboard/ServiceReview/ServiceReview";
import AllServices from "./pages/Services/AllServices/AllServices";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/UserSignin/Login/Login";
import Register from "./pages/UserSignin/Register/Register";
import DashboardDefault from "./pages/Dashboard/DashboardDefault/DashboardDefault";
import Payment from "./pages/Payment/Payment";
import ContextApiProvider from "./ContextApiProvider/ContextApiProvider";
import AddService from "./pages/Dashboard/AddService/AddService";
import PrivateRoute from "./Private/PrivateRoute";
import Booking from "./Booking/Booking";

function App() {
  return (
    <div >
      <ContextApiProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomeMain />}></Route>
          <Route path="/Home" element={<HomeMain />}></Route>
          <Route path="/Home" element={<HomeMain />}></Route>
          <Route path="/Services"element={<AllServices/>}/>
          <Route path="/Service/:id" element={<Booking></Booking>} />
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/AboutUs" element={<AboutUs/>}/>
          <Route path="Login" element={<Login/>} />
          <Route path="Register" element={<Register/>} />
          <Route path="/Dashboard" element={<DashboardMain />}>
            <Route exact path="/Dashboard" element={<PrivateRoute><DashboardDefault/></PrivateRoute>} />
            <Route path="MyBooking" element={<MyBooking />} />
            <Route path="ServiceReview" element={<ServiceReview />} />
            <Route path="Payment" element={<Payment/>} />
            <Route path="AddService" element={<AddService/>} />
          </Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </Router>
      </ContextApiProvider>
      
    </div>
  );
}

export default App;


//thanks