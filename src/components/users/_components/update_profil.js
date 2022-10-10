import APIUsers from '../../../api/users_api';
import { Container,Row,Col } from 'react-bootstrap';
const Settings =()=>{

    return(
        <Container className="signup">
            <Row className="text-center">
                <Col xs={12} className="mb-5"><h2>Profil</h2></Col>
                <Col xs={6}><input className="" placeholder="User Name"/></Col>
                <Col xs={6}><input className="" placeholder="First Name"/></Col>
                <Col xs={6}><input className="" placeholder="Last name"/></Col> 
                <Col xs={6}><input className="" placeholder="Email"/></Col>
                <Col xs={6}><input className="" placeholder="Mobile number"/></Col>
                <Col xs={6}><input className="" placeholder="Whatsapp number"/></Col>
                <Col xs={6}><input className="" placeholder="Facebook Link"/></Col>
                <Col xs={6}><input className="" placeholder="Instagram Link"/></Col>
                <Col xs={12}><button className="btn btn-signup">Save</button></Col>
            </Row>
        </Container>
    )
} 
export default Settings;