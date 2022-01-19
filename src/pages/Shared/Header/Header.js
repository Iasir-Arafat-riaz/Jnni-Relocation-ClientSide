import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useFirebase from "../../../hooks/useFirebase";
import "./Header.css";

const Header = () => {
    const navigate=useNavigate()
    const goHome=()=>{
        navigate("/Home")
    }
    // const {user,logOut}=useFirebase()
    const {user,logOut}=useAuth()
// const fullName = user?.displayName
// const firstChild = fullName.split(" ")
// const newDisplayName = firstChild[0]

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
          className=" jinni-navbar "
          sticky="top"
        >
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav >
                <Navbar.Brand>
                  <NavLink
                 
                    to="/home"
                    style={({ isActive }) => ({
                      color: isActive ? "navy" : "beige",
                    })}
                    className="header-link"
                  >
                    <h5>
                      <b>Home</b>
                    </h5>
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
                    <h5>
                      <b>Services</b>
                    </h5>
                  </NavLink>
                </Navbar.Brand>

               {user.email&&  <Navbar.Brand>
                  {""}
                  <NavLink
                    to="/Dashboard"
                    style={({ isActive }) => ({
                      color: isActive ? "navy" : "beige",
                    })}
                    className="header-link"
                  >
                    {/* {user.email&&<b>Dashboard</b>} */}
                    <h5>
                      <b> DashBoard</b>
                    </h5>
                  </NavLink>
                </Navbar.Brand>}

                <Navbar.Brand>
                  {" "}
                  <NavLink
                    to="/Contact"
                    style={({ isActive }) => ({
                      color: isActive ? "navy" : "beige",
                    })}
                    className="header-link"
                  >
                    <h5>
                      {" "}
                      <b>Contact</b>
                    </h5>
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
                    <h5>
                      <b>About Us</b>
                    </h5>
                  </NavLink>
                </Navbar.Brand>
              </Nav>
            </Navbar.Collapse>
            {user.email && (
              <img className="header-img" src={user.photoURL} alt="" />
            )}
            {user.email && (
              <span className="text-light mx-1">{user?.displayName}</span>
            )}
            {user.email ? (
              
              <button onClick={logOut}  className="logOutHdr">
               <b> <i class="fas fa-sign-out-alt"></i></b>
              </button>
            ) : (
              <Link to="/login">
                <button className="loginButtonHdr"><b>Login</b></button>
              </Link>
            )}
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
