import React, {useContext, useState} from 'react'
import Context from '../context'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'


 function Edit(props){
    const {editUser} = useContext(Context)
    const [show, setShow] = useState(false)
    
    let edditedUser= {
        id: props.dataItem.id,
        name: props.dataItem.first_name,
        lastname: props.dataItem.last_name,
        age: props.dataItem.age,
        gender: props.dataItem.gender,
    };
        function handleClose (){setShow(false)};
        function handleShow (){setShow(true)};
        function saveAndClose (userObj){
            editUser(userObj)
            handleClose()
        }
        function handleShowAndStatus(){
            handleShow()
        console.log(edditedUser)}
        return(
            <React.Fragment>   
                <>
                    <Button variant="btn btn-success my-button" onClick={handleShowAndStatus}>
                        Edit
                    </Button>

                    <Modal show={show} 
                           onHide={handleClose} 
                           animation={true}
                           size="lg" 
                           aria-labelledby="contained-modal-title-vcenter" 
                           centered className="modal-edited">
                        
                        <Modal.Body>
                            <Form>
                                <Form.Row>    
                                    <Form.Group as={Col} controlId="formBasicName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" defaultValue={edditedUser.name} onChange={event => edditedUser.name = event.target.value}/>
                                        <Form.Text className="text-muted">
                                        
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formBasicName">
                                        <Form.Label>Lastname</Form.Label>
                                        <Form.Control type="text" defaultValue={edditedUser.lastname} onChange={event => edditedUser.lastname = event.target.value}/>
                                        <Form.Text className="text-muted">
                                        
                                        </Form.Text>
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="formBasicName">
                                        <Form.Label>Age</Form.Label>
                                        <Form.Control type="text" defaultValue={edditedUser.age} onChange={event => edditedUser.age = event.target.value}/>
                                        <Form.Text className="text-muted">
                                        
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formBasicName">
                                        <Form.Label>Gender</Form.Label>
                                        <Form.Control as="select" defaultValue={edditedUser.gender} onChange={event => edditedUser.gender = event.target.value}>
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
                        <Button variant="primary" onClick={saveAndClose.bind(null, edditedUser)}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal>
                    </>
                
            </React.Fragment>
)
}

export default Edit