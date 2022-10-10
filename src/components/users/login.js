
import {useHistory} from 'react-router-dom';

import { Container,Row,Col } from 'react-bootstrap';

const Login = () =>{
    const history=useHistory();
    
return(
    <Container>
	        <div className="signin">
	            <div className="text-center">
		            <h2>Log in</h2>
                    <div className="other">
                        <input className="" placeholder="User name/Email"/>   
                        <input className="" placeholder="Password"/>
                        <ul className="d-flex test-ul">
                        <li className="test-li">
                            <ul className="d-flex">
                                <li><input type="checkbox" className="check"/></li>
                                <li>Remember me</li>
                            </ul></li>
                        <li className="test-li">Forgot password?</li>
                        </ul>
                    </div>
			        <div className="col-12">
			            <button className="btn btn-login">Login</button>
			        </div>
                    <hr/>
                    <div className="col-12">
                        <span><span>Not a member yet? </span><a href="/signup">Sign up</a></span>
                    </div>
		        </div>
	        </div>
    </Container>
);



}

export default Login;