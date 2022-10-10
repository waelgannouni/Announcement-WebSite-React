
import React,{useState,useEffect} from 'react';
import Myads from './_components/adverts';
import Modify from './_components/modify_advert';
import Settings from './_components/update_profil';
import {useHistory,useParams} from 'react-router-dom';
import Users_api from '../../api/users_api';
import { Container,Row,Col } from 'react-bootstrap';
import {Journal, Gear,BoxArrowInRight} from 'react-bootstrap-icons';
import './Users.css';
const Profil = () => {
    const params=useParams();
    const history=useHistory();
    const [view,setview]=useState("Myads");
    const [advertid,setadvertid]=useState();
    const [data,setdata]=useState();
    useEffect(()=>{
        Users_api.getUser(params.id)
        .then((res)=>{
            setdata(res.data);
        })
        if(!localStorage.getItem('token')){
            history.push('/login');
        }
    });
    const logoutHandler = () => {
        localStorage.removeItem("token");
        history.push("/login");
    };    
    return (
        <Container>
            <Row>
                <Col xs={3} className="d-block text-center">
                    <h2>My Profil</h2>
                    <div className="d-block">
                        <img className="user-photo" src="https://picsum.photos/200/300" alt="" />
                        <h6 className="user-name mt-3">User Name</h6>
                    </div>
                    <div className="d-block my-5">
                        <div><button className="btn" onClick={()=>setview("Myads")}>{<Journal size={24}/>} Myads</button></div>
                        <div><button className="btn" onClick={()=>setview("Settings")}>{<Gear size={24}/>} Settings</button></div>
                        <div><button className="btn" onClick={()=>logoutHandler()}>{<BoxArrowInRight size={24}/>} Logout</button></div>
                    </div>
                </Col>
                <Col xs={9}>
                    {view==="Myads" && <Myads view={setview} advertid={setadvertid}/>} 
                    {/*sending data from parent to child */}
                    {view==="Modify" && <Modify id={advertid}/>} 
                    {/*sending data from parent to child */}
                    {view==="Settings" && <Settings/>}
                </Col>
            </Row>       
        </Container>
        
    )
};

/*
{(() => {
                    switch (view) {
                    case 'Myads':
                        return (<Myads/>)
                    case 'Modify':
                        return (<Modify/>)
                    default:
                        return (<div>You are a User.</div>)
                    }
                    })()}
*/
export default Profil; 