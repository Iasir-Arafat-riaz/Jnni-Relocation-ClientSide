import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const navigate=useNavigate()
    const goHome=()=>{
        navigate("/Home")
    }
  return (
    <div className="jinniHeder">
      <div className="text-center">
        <h1 onClick={goHome} className="company-name ">
          <img
            src="https://i.ibb.co/8XdkcQr/jinni-Logo-removebg-preview.png"
            alt="logo"
          />

          <b>Jinni Relocation</b>
        </h1>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="secondary"
          variant="dark"
          className="text-center"
        >
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="m-auto">
                <Navbar.Brand>
                  <NavLink
                 
                    to="/home"
                    style={({ isActive }) => ({
                      color: isActive ? "navy" : "beige",
                    })}
                    className="header-link"
                  >
                    <h4>
                      <b>Home</b>
                    </h4>
                  </NavLink>
                </Navbar.Brand>

                <Navbar.Brand>
                  {""}
                  <NavLink
                    to="/Services"
                    style={({ isActive }) => ({
                      color: isActive ? "navy" : "beige",
                    })}
                    className="header-link"
                  >
                    <h4>
                      <b>Services</b>
                    </h4>
                  </NavLink>
                </Navbar.Brand>

                <Navbar.Brand>
                  {""}
                  <NavLink
                    to="/dashboard"
                    style={({ isActive }) => ({
                      color: isActive ? "navy" : "beige",
                    })}
                    className="header-link"
                  >
                    {/* {user.email&&<b>Dashboard</b>} */}
                    <h4>
                      <b> DashBoard</b>
                    </h4>
                  </NavLink>
                </Navbar.Brand>

                <Navbar.Brand>
                  {" "}
                  <NavLink
                    to="/Contact"
                    style={({ isActive }) => ({
                      color: isActive ? "navy" : "beige",
                    })}
                    className="header-link"
                  >
                    <h4>
                      {" "}
                      <b>Contact</b>
                    </h4>
                  </NavLink>
                </Navbar.Brand>

                {/* <Navbar.Brand>
                  {" "}
                  <NavLink
                    to="/GetQote"
                    style={({ isActive }) => ({
                      color: isActive ? "navy" : "beige",
                    })}
                    className="header-link"
                  >
                    <h4>
                      {" "}
                      <b>GetQote </b>
                    </h4>
                  </NavLink>
                </Navbar.Brand> */}

                <Navbar.Brand>
                  {" "}
                  <NavLink
                    to="/AboutUs"
                    style={({ isActive }) => ({
                      color: isActive ? "navy" : "beige",
                    })}
                    className="header-link"
                  >
                    <h4>
                      <b>About Us</b>
                    </h4>
                  </NavLink>
                </Navbar.Brand>
              </Nav>
            </Navbar.Collapse>
            {/* {user.email && (
              <img className="header-img" src={user.photoURL} alt="" />
            )}
            {user.email && (
              <span className="text-light mx-1">{user?.displayName}</span>
            )}
            {user.email ? (
              <button onClick={logout} className="btn btn-warning">
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="btn btn-success">Login</button>
              </Link>
            )} */}
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
