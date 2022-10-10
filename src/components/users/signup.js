
import React,{useState,useEffect} from "react";
import { Container,Row,Col } from "react-bootstrap";

const Signup = () =>{



    return(
        <Container className="signup">
            <div className="text-center">
              <h2>sign up</h2>
              <h6>Become a part of our community !</h6>
          <div className="other">
          <input placeholder="User Name"/> 
          <input placeholder="First Name"/>
          <input placeholder="Last name"/> 
          <input placeholder="Email"/>
          <input placeholder="mobile number"/>
          <input placeholder="Password"/>
          <input placeholder="Confirm Password"/>
          </div>
                <div className="col-12 text-center">
                  <button className="btn btn-signup">Sign up</button>
                </div>
          <hr/>
          <div className="col-12">
            <span><span>Already a member? </span><a href="/login">Sign in</a></span>
          </div>
            </div>
    </Container>
    );
}

export default Signup;