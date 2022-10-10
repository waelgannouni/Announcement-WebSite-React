import React,{useState,useEffect} from 'react';
import './Advert.css';
import {useHistory} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron  from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {List,Tag,Search} from 'react-bootstrap-icons';
import APIAdverts from '../../api/adverts_api';
import Advert from './Advert';
const Adverts = () => {
    const history=useHistory();
    const [data,setData]=useState({keyword:'',categorie:''});
    const [display,setdisplay]=useState();
    const clear =()=>{
      setData({keyword:'',categorie:''});
    }
    const SearchHandler = async (e)=>{
      e.preventDefault();
        APIAdverts.findByCategoriesAdverts(data.categorie);
      clear();
    }
    useEffect(()=>
    APIAdverts.getAllAdverts()
    .then((res)=>
    {setdisplay(res.data);}
    ),[]);
    return (
        <>
        <Jumbotron className="text-center justify-content-center">
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
        <Container>
          <Row>
            {display!==undefined?
            display.map((ads)=>(
              <Col xs={3}><Advert ads={ads}/></Col>
            ))
            :
            ""
            }
          </Row>
        </Container>
        </>
    )
}

export default Adverts;