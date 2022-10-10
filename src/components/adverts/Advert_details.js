
import React , {useState,useEffect} from 'react';
import { useParams } from 'react-router';
import { Container,Row, Col,Jumbotron } from 'react-bootstrap';
import {Telephone,Facebook,Instagram,Whatsapp,Check2Circle,List,Tags} from'react-bootstrap-icons';
import Adverts_api from '../../api/adverts_api';
import User_api from '../../api/users_api';
const Advert_details = ()=>{
    const params=useParams();
    const [contact,setContact]=useState(false);
    const [data,setdata]=useState();
     useEffect (() => (
       Adverts_api.getAdvert(params.id)
       .then((res)=>{
        setdata(res.data);
       })
    ),[data]);
    const [user,setUser]=useState();
    useEffect (() => (
        data!==undefined ??  User_api.getUser(data.id)
        .then((res)=>{
            setUser(res.data);
        })
     ),[]);
    return(
        <>
        <Jumbotron className="text-center jumbo">
            <h1>Details</h1>
            <div className="text-left"><a href="/">Home</a><a href={data!==undefined ?`adverts/${data.id}`: "#"}>/adverts/{data!==undefined ?? data.title}</a></div>
        </Jumbotron>
        <Container>
            <Row className="advert-details">
                <Col xs={6} className="advert-pp">
                    <img className="advert-photo" src={data!==undefined ?? data.img} alt="" />
                    <div className="advert-price">
                        <span>{data!==undefined ?? data.price} DT</span>
                    </div>
                </Col>
                <Col xs={6}>
                    <Row>
                        <Col xs={6}><h4 className="advert-Title">Title:</h4></Col>
                        <Col xs={6}><h4 className="advert-Title">{data!==undefined ?? data.title}</h4></Col>
                        <Col xs={6}><span className="advert-span">Description:</span></Col>
                        <Col xs={6}>
                            <p className="advert-description">{data!==undefined ?? data.Description}</p>
                        </Col>
                        <Col xs={6}><h5 className="advert-date">Date</h5></Col>
                        <Col xs={6}><h5 className="advert-date">{data!==undefined ?? data.Date}</h5></Col>
                        <Col xs={12} className="my-3"><span className="advert-span">Specifications:</span></Col>
                        <Col xs={12}>
                            <p className="advert-specification">{data!==undefined ?? data.Specifications}</p>
                        </Col>
                        <Col>
                            <Row>
                                <Col xs={4} className="advert-cat"><span><List size={20} color={"aqua"}/> Categorie:</span><span>{data!==undefined ?? data.Categorie}</span></Col>
                                <Col xs={4} className="advert-con"><span><Check2Circle size={20} color={"aqua"}/> Condition:</span><span>{data!==undefined ?? data.Conditions}</span></Col>
                                <Col xs={4} className="advert-brand"><span><Tags size={20} color={"aqua"}/> Brand:</span><span>{data!==undefined ?? data.Brands}</span></Col>
                            </Row>
                        </Col>
                        {contact===false ?
                        <Col xs={12}><button className="btn btn-contact" onClick={()=>setContact(true)}>Contact</button></Col>
                        :
                        <Col xs={12}>
                            <Row className="my-5">
                                <Col xs={6} className="p-2 advert-contact-info"><Telephone size={20} color={"aqua"}/><span>{user!==undefined ?? user.phonenumber}</span></Col>
                                <Col xs={6} className="p-2 advert-contact-info"><Facebook size={20} color={"blue"}/><a href={user!==undefined ?? `${user.facebook}`} target="_blank">{user!==undefined ?? user.username}</a></Col>
                                <Col xs={6} className="p-2 advert-contact-info"><Instagram size={20} color={"purple"}/><a href={user!==undefined ?? `${user.instagram}`} target="_blank">{user!==undefined ?? user.username}</a></Col>
                                <Col xs={6} className="p-2 advert-contact-info"><Whatsapp size={20} color={"green"}/><span> {user!==undefined ?? user.Whatsapp}</span></Col>
                            </Row>
                        </Col>
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
        </>
    );
};
export default Advert_details;