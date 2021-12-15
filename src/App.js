import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomeMain from "./pages/Home/HomeMain/HomeMain";
import Error from "./pages/Error/Error";
import Header from "./pages/Shared/Header/Header";
import DashboardMain from "./pages/Dashboard/DashboardMain/DashboardMain";
import MyBooking from "./pages/Dashboard/MyBooking/MyBooking";
import ServiceReview from "./pages/Dashboard/ServiceReview/ServiceReview";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomeMain />}></Route>
          <Route path="/Home" element={<HomeMain />}></Route>
          <Route path="/Home" element={<HomeMain />}></Route>
          <Route path="/Dashboard" element={<DashboardMain />}>
            <Route path="MyBooking" element={<MyBooking />} />
            <Route path="ServiceReview" element={<ServiceReview />} />
          </Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
