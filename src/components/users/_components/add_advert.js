import React ,{useState,useEffect} from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import {XCircle} from 'react-bootstrap-icons';
import FileBase from 'react-file-base64';



const Add_Advert =()=>{
    const [img,setimg]=useState();
return(
    <Container fluid className="overlay" id="add-advert">
        <form className=" row add-advert">
            <Col xs={12} className="my-2 text-right"><a href="#"><XCircle size={24} color={"rgb(9, 220, 248)"}/></a></Col>
            <Col xs={6}><input className="inputs" type="text" placeholder="Title"/></Col>
            <Col xs={6}><input className="inputs" type="text" placeholder="Description"/></Col>
            <Col xs={6}>
                <FileBase 
                    type="file" 
                    inputProps={{ accept: 'image/*' }} 
                    multiple={false} 
                    onDone={({ base64 }) => setimg(base64)}/>
            </Col>
            <Col xs={6}><img className="preview" src={img}/></Col>
            <Col xs={6}><input className="inputs" type="text" placeholder="Date"/></Col>
            <Col xs={6}><input className="inputs" type="text" placeholder="Specifications"/></Col>
            <Col xs={6}><input className="inputs" type="text" placeholder="Condition"/></Col>
            <Col xs={6}><input className="inputs" type="text" placeholder="Brand"/></Col>
            <Col xs={6}><input className="inputs" type="text" placeholder="Price"/></Col>
            <Col xs={6}><select className="select" name="" id="">
                <option value="cat1">cat1</option>
                <option value="cat1">cat1</option>
                <option value="cat1">cat1</option>
                <option value="cat1">cat1</option>
            </select></Col>
            <Col xs={12} className="text-center"><button className="btn add-btn">ADD</button></Col>
        </form>
    </Container>
    )
} 
export default Add_Advert;