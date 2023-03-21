import React ,{useRef} from "react";
import {Container, Row, Col} from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddForm(){

    const name = useRef('');
    const rollNumber = useRef('');
    const Standard =useRef('');
    const gender = useRef('');
    const marks = useRef('');
   
    const navigate = useNavigate();
    const addStudentHandler=()=>{
        let payload={
            name: name.current.value,
            rollNumber: Number(rollNumber.current.value),
            Standard: Number(Standard.current.value),
            gender: gender.current.value,
            marks: Number(marks.current.value),
        };
        axios.post("http://localhost:4000/student",payload).then(()=>{
            navigate("/");
        })
    }

    return<>
    <Container className="mt-2">
        <Row>
            <Col className="col-md-8 offset-md-2">
                <legend>Add new Student Details</legend>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Student Name</Form.Label>
                    <Form.Control type="name" ref={name} placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formRollNumber">
                    <Form.Label>Student Roll Number</Form.Label>
                    <Form.Control type="rollNumber" ref={rollNumber} placeholder="Enter Roll Number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formStandard">
                    <Form.Label>Student Class</Form.Label>
                    <Form.Control type="Standard" ref={Standard} placeholder="Enter Standard" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGender">
                    <Form.Label>Student Gender</Form.Label>
                    <Form.Control type="gender" ref={gender} placeholder="Enter gender" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMarks">
                    <Form.Label>Student marks</Form.Label>
                    <Form.Control type="marks" ref={marks} placeholder="Enter marks" />
                </Form.Group>
                <Button variant="primary" type="button " onClick={addStudentHandler}>Submit</Button>
            </Col>
        </Row>

    </Container>
    </>
}


export default AddForm;