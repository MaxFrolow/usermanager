import React, {useContext, useEffect, useState} from 'react'
import Context from '../context'

import Nav from 'react-bootstrap/Nav'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'


 export default function Create(){
        const {createUser} = useContext(Context)
        const [show, setShow] = useState(false)
          
        const [type, setType] = useState("user")
        const [name, setName] = useState("")
        const [gender, setGender] = useState("Male")
        const [lastname, setLastname] = useState("")
        const [age, setAge] = useState("")

        function handleClose (){setShow(false)};
        function handleShow () {setShow(true)};
        function saveAndClose(type, name, lastname, age, gender){
            console.log("Creating")
            createUser(type, {"id": "13", "name":name, "lastname":lastname, "age": age, "gender": gender})
            console.log("Created")
            handleClose()
        }
        
        useEffect(()=>{
            console.log(type)
        }, [type])

        return(
            
            <React.Fragment>   
                <>
                    <Nav.Link href="#features" onClick={handleShow}>Create User</Nav.Link>

                    <Modal show={show} 
                           onHide={handleClose} 
                           animation={true}
                           size="lg" 
                           aria-labelledby="contained-modal-title-vcenter" 
                           centered className="modal-edited">
                        
                        <Modal.Body>
                            <Form>
                            <Col sm={10} className="downSpace" >
                                <div key={"inline-radio"} />
                                <Form.Check
                                inline
                                type="radio"
                                label="User"
                                value="user"
                                onClick ={setType.bind(null, "user")}
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                                />
                                <Form.Check
                                inline
                                type="radio"
                                label="Admin"
                                value="admin"
                                onClick ={setType.bind(null, "admin")}
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                                />
                                <Form.Check
                                inline
                                type="radio"
                                label="Superuser"
                                value="superUser"

                                onClick ={setType.bind(null, "superUser")}
                                name="formHorizontalRadios"
                                id="formHorizontalRadios3"
                                />
                            </Col>

                                <Form.Row>    
                                    <Form.Group as={Col} controlId="formBasicName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" defaultValue={name} onChange={event => setName(event.target.value)}/>
                                        <Form.Text className="text-muted">
                                        
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formBasicName">
                                        <Form.Label>Lastname</Form.Label>
                                        <Form.Control type="text" defaultValue={lastname} onChange={event => setLastname(event.target.value)}/>
                                        <Form.Text className="text-muted">
                                        
                                        </Form.Text>
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="formBasicName">
                                        <Form.Label>Age</Form.Label>
                                        <Form.Control type="text" defaultValue={age} onChange={event => setAge(event.target.value)}/>
                                        <Form.Text className="text-muted">
                                        
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formBasicName">
                                        <Form.Label>Gender</Form.Label>
                                        <Form.Control as="select" defaultValue={gender} onChange={event => setGender(event.target.value)}>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Something Else</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form.Row>
                                </Form>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={saveAndClose.bind(null, type, name, lastname, age, gender)}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal>
                    </>
                
            </React.Fragment>
        )
    }

