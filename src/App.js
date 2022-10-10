import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home/Home";
import Adverts from "./components/adverts/Adverts";
import Advert_details from "./components/adverts/Advert_details";
import Profil from "./components/users/profil";
import Login from "./components/users/login";
import Signup from "./components/users/signup";
import Categories from "./components/categories/Categories";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect } from 'react';
import Logo from './download.jpg';
const App = () => {
  const [windowLink,setwindowLink]=useState();
  useEffect(()=>{

    switch(window.location.pathname){
      case '/adverts':
        setwindowLink("2");
        break;
        case '/categories':
          setwindowLink("3");
          break;
    case '/Profil':
      setwindowLink("4");
      break;
    case '/Login':
      setwindowLink("5");
      break;
      case '/Signup':
        setwindowLink("6");
        break;
        default : setwindowLink("1");
        
      }
    },[]);
  return (
    <Router>
      <Navbar bg="light" expand="md" sticky='top'>
      <Navbar.Brand href="/"><img src={Logo}  className="logo" alt="Logo" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav activeKey={windowLink}  className="justify-content-around w-100">
          <Nav.Item>
            <Nav.Link eventKey="1" href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="2" href="/adverts">Adverts</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="3" href="/categories">Categories</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="4" href="/Profil">Profil</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
      </Navbar>  
      

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Signup" component={Signup}/>
        <Route exact path="/categories" component={Categories}/>
        <Route exact path="/Profil" component={Profil}/>
        <Route exact path="/adverts"component={Adverts}/>
        <Route exact path='/adverts/:id' component={Advert_details}/>
        
      </Switch>
    </Router>
  )
}

export default App;
