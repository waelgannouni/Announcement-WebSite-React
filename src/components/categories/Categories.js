import React , {useState,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Search} from 'react-bootstrap-icons';
import APIAdverts from '../../api/adverts_api';
import Api_categories from '../../api/categories';
import Advert from '../adverts/Advert';
const Categories = () => {
    const [data,setData]=useState();
    const [cat,setcat]=useState("cat1");
    const [cats,setcats]=useState();
    useEffect(()=>{
        APIAdverts.getAllAdverts()
        .then((res)=>{
            setData(res.data);
        })
    });
    useEffect(()=>{
        Api_categories.getAllcategories()
        .then((res)=>{
            setcats(res.data);
        })
    });
    const searchHandler = (val)=>{
        APIAdverts.findByCategoriesAdverts(val)
        .then((res)=>{
            setData(res.data);
        })
        setcat(val);
    }
    return (
       <Container>
           <Row>
               <Col xs={3}>
                   <Row className="d-block">    
                       <Col>All Categories</Col>
                       {
                           cats!==undefined ?
                            cats.map((catsq)=>(

                                <Col><button classxName="btn" onClick={()=>searchHandler(catsq.id)}>{catsq.name}</button></Col>
                            ))
                           
                           :
                           ""
                       }
                   </Row>
               </Col>
               <Col xs={9}>
                    <Row>
                        {
                            data===undefined?"":
                                data.filter().map((ad)=>(
                                <>
                                    <Col xs={4}><Advert data={ad}/></Col>
                                    {cat==="cat1" && <Col xs={4}><Advert ads={ad}/></Col>}
                                    {cat==="cat2" && <Col xs={4}><Advert ads={ad}/></Col>}
                                    {cat==="cat3" && <Col xs={4}><Advert ads={ad}/></Col>}
                                    {cat==="cat4" && <Col xs={4}><Advert ads={ad}/></Col>}
                                    {cat==="cat5" && <Col xs={4}><Advert ads={ad}/></Col>}
                                    </>
                                ))
                        }
                       
                   </Row>
               </Col>
           </Row>
       </Container>
    )
};

export default Categories;