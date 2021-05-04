import React, {useContext, useState} from 'react'
import Context from '../context'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'


 function Login(){

        const [email, setEmail] = useState("")
        const [password, setPassword] = useState('')
        const {authorization} = useContext(Context)

        const [show, setShow] = useState(false)
        function handleClose (){setShow(false)};
        function handleShow (){setShow(true)};
        function saveAndClose (){
            console.log(email, password)
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: ({'email' : email, 'password': password})
            };
            console.log(requestOptions)
            fetch('http://0.0.0.0:8080/auth/token/login/', requestOptions)
             .then(response => response.json())
             .then(newToken => authorization(newToken.auth_token))

        }
        function handleShowAndStatus(){
            handleShow()
        }
        return(
            <React.Fragment>   
                <>
                <Nav>
                    <Nav.Link href="#deets" onClick={handleShowAndStatus}>Log In</Nav.Link>
                    
                </Nav>

                    <Modal show={show} 
                           onHide={handleClose} 
                           animation={true}
                           size="lg" 
                           aria-labelledby="contained-modal-title-vcenter" 
                           centered className="modal-edited">
                        
                        <Modal.Body>
                            <Form>
                                
                                    <Form.Group  controlId="formBasicName">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="text" onChange={event => setEmail(event.target.value)}/>

                                    </Form.Group>

                                    <Form.Group  controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" onChange={event => setPassword(event.target.value)}/>

                                    </Form.Group>

                                   
                                    
                                </Form>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={saveAndClose.bind(null, email, password)}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal>
                    </>
                
            </React.Fragment>
)
}

export default Login