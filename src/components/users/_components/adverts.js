import React,{useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import APIAdverts from '../../../api/adverts_api';
import { Row,Col } from 'react-bootstrap';
import Add_Advert from './add_advert';
import { PlusCircle } from 'react-bootstrap-icons';
const Adverts = (props) => {
    const history=useHistory();
    let id;
    const Delete=(id)=>{
        
    }
    const [data, setData] = useState();
    useEffect(() =>{
        APIAdverts.getAllAdverts()
        .then(response =>{
            setData(response.data);
        })
        .catch(e =>{
            console.log(e);
        })
    },[data])
    const Update =(id)=>{
        props.view("Modify"); //sending data from child to parent
        props.advertid(id); //sending data from child to parent
    }
    return (
        <>
        <Row className="justify-content-end w-100">
            <Col xs={1}>
                <a className="btn" href="#add-advert"><PlusCircle size={24} color={"rgb(9, 220, 248)"}/></a>
            </Col>
            <Add_Advert/>
        </Row>
        <Row className="Profil">
        <Col xs={6} className="Advert justify-content-center">
            <img className="Advert-img" src="https://picsum.photos/200/300" alt="" />
            <div className="desc-block">
                <h6 className="Advert-title">Advert 1</h6>
                <p className="Advert-description">waww a,sa,msa, sk asl lk </p>
                <div className="Advert-price">100dt</div>
                <div className="btn-profil">
                    <button className="btn btn-update" onClick={()=>Update("Hecheckbechek")}>Update</button>
                    <button className="btn btn-delete" onClick={()=>Delete(id)}>Delete</button>
                </div>
            </div>  
        </Col>            
        </Row>
        </>
    )
}

export default Adverts;