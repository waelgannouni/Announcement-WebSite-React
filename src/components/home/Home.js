import React , {useState,useEffect} from 'react';
import APIAdverts from '../../api/adverts_api';
import Advert from '../adverts/Advert';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Jumbotron  from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import {List,Tag,Search} from 'react-bootstrap-icons';
import './Home.css';
const Home = () => {
  const [display,setdisplay]=useState();

  useEffect(()=>
    APIAdverts.getAllAdverts()
    .then((res)=>
    {setdisplay(res.data);}
    ),[]);
    return (
        <>
        <Jumbotron className="text-center justify-content-center jumbo  ">
            <h1>Hi hello hello hi</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, modi. Accusamus veritatis odio illo sunt placeat! Eum, ullam beatae fugiat aliquam quo dolorem, doloremque corporis tempora facilis a dolores voluptatum.</p>
            <Form className="row d-flex flex-row justify-content-center form-back">
              <Row>

              <Col xs={5} className="justify-content-center form-group">
                <span><Tag size={24} className="keywordicon"/></span>
                <input type="text" className="search-slt" placeholder="Enter Product Keyword"/>
              </Col>
              <Col xs={5} className="justify-content-center form-group">
                <span><List size={24} className="keywordicon"/></span>
                <select name="" id="" className="search-slt" >
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
              </select>
              </Col>
              <Col xs={2}>
                <button className="btn btn-search" type='submit'>{<Search/>} Search</button>
              </Col>
              </Row>
            </Form>
        
        </Jumbotron>
        <Container className="text-center">
            <Col className="my-5"><h1>Categories</h1></Col>
            <Row>
                <Col xs={3} className="Categories"><p>cat 1</p></Col>
                <Col xs={3} className="Categories"><p>cat 2</p></Col>
                <Col xs={3} className="Categories"><p>cat 3</p></Col>
                <Col xs={3} className="Categories"><p>cat 4</p></Col>
                <Col xs={3} className="Categories"><p>cat 5</p></Col>
                <Col xs={3} className="Categories"><p>cat 6</p></Col>
                <Col xs={3} className="Categories"><p>cat 7</p></Col>
                <Col xs={3} className="Categories"><p>cat 8</p></Col>
            </Row>
            <Row>
                <Col className="my-5"><h1>LATEST PRODUCTS</h1></Col>
                <Row className="justify-content-center">
                  {display!==undefined?
                    display.map((ads)=>(
                    <Col xs={3}><Advert ads={ads}/></Col>
                  ))
                  :
                  ""
                  }
          </Row>
            </Row>
        </Container>
        </>
    )
};

export default Home;