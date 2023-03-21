import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React ,{useRef} from "react";
import {Container, Row, Col} from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";


const EditStud =()=>{

    const {id}= useParams();
    // const [name, setName] = useState;
    // const [rollNumber, setRollNumber] = useState;
    // const [Standard, setStandard] = useState;
    // const [gender, setGender] = useState;
    // const [marks, setMarks] = useState;
    const name = useRef("");
    const rollNumber = useRef("");
    const Standard =useRef("");
    const gender = useRef("");
    const marks = useRef("");
    const navigate = useNavigate;
 


    useEffect(()=>{
        axios.get(`http://localhost:4000/student/${id}`).then((response)=>{
            let data = response.data;
            const _temp  = data?.existingStudent;
            console.log("temp",_temp)
            name.current.value = _temp.name;
            rollNumber.current.value= _temp.rollNumber;
            Standard.current.value = _temp.Standard;
            gender.current.value = _temp.gender;
            marks.current.value = _temp.marks;
        })
    });


    const updateStudHandler=()=>{
        let payload={
            name: name.current.value,
            rollNumber: Number(rollNumber.current.value),
            Standard: Number(Standard.current.value),
            gender: gender.current.value,
            marks: Number(marks.current.value),
        };
        axios.put(`http://localhost:4000/student/${id}`,payload).then(()=>{
            navigate("/")
        })
        navigate("/")
        window.location.reload(false);
    }
    return<>
    <Container className="mt-2">
        <Row>
            <Col className="col-md-8 offset-md-2">
                <legend>Update Student Details</legend>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label> Update Student Name</Form.Label>
                    <Form.Control type="name" ref={name}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formRollNumber">
                    <Form.Label>Update Student Roll Number</Form.Label>
                    <Form.Control type="rollNumber" ref={rollNumber} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formStandard">
                    <Form.Label>Update Student Class</Form.Label>
                    <Form.Control type="Standard" ref={Standard}  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGender">
                    <Form.Label>Update Student Gender</Form.Label>
                    <Form.Control type="gender" ref={gender}  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMarks">
                    <Form.Label>Update Student marks</Form.Label>
                    <Form.Control type="marks" ref={marks}  />
                </Form.Group>
                <Button variant="primary" type="button " onClick={updateStudHandler}>Update</Button>
            </Col>
        </Row>

    </Container>
    </>
}

export default EditStud;
