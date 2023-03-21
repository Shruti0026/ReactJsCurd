import axios from "axios";
import React, { useState ,useEffect} from "react";
import Button from 'react-bootstrap/Button';
import { Container, Row , Col} from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";
import DeleteConform from "../components/common/DeleteConform";

const Demo = () => {
    const navigate = useNavigate();
    const [allStudent, setAllStudent]= useState([]);
    const [showModal, setShowModal] = useState(false);
    const [itemIDToDelete, setItemIDToDelete] = useState(0)

    useEffect(()=>{
        axios.get("http://localhost:4000/student").then((response)=>{
            setAllStudent(response.data)
            console.log(response.data)
        });
    },[]);

    const openDeleteModal =(id)=>{
        setItemIDToDelete(id);
        setShowModal(true);
    }
    const closeDeleteModal =()=>{
        setItemIDToDelete(0);
        setShowModal(false);

    }

    const confirmDelete=()=>{
        axios.delete(`http://localhost:4000/student/${itemIDToDelete}`).then((response)=>{
            setAllStudent((existingData)=>{
                return existingData.filter(_=> _._id !== itemIDToDelete);
            });
            setItemIDToDelete(0);
            setShowModal(false);
          
        });
        setItemIDToDelete(0);
        setShowModal(false);
        window.location.reload(false);
       
    }

    return (
        <>
        <DeleteConform title="Delete Confirmation" body="Are You sure to delete this item"
        showModal={showModal}
        closeDeleteModal={closeDeleteModal}
        confirmDelete={confirmDelete}>
        </DeleteConform>
            <Container className="mt-2">
                <Row>
                    <Col className="col-md-4 offset-md-4"></Col>
                    <Button variant="primary" type="button" onClick={()=>{
                        navigate("/form");
                    }}>Add New Student</Button>
                </Row> 
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Roll Number</th>
                        <th>Standard</th>
                        <th>Gender</th>
                        <th>Marks</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allStudent.map((stud)=>{
                            return (
                            <tr key={stud._id}>
                                <td>{stud.name}</td>
                                <td>{stud.rollNumber}</td>
                                <td>{stud.Standard}</td>
                                <td>{stud.gender}</td>
                                <td>{stud.marks}</td>
                                <td>
                                    <Button variant="primary" type="button" onClick={()=>{
                                        navigate(`/edit/${stud._id}`)
                                    }}>Edit</Button>
                                    <Button variant="danger" type="button" onClick={()=>{
                                        openDeleteModal(stud._id)
                                    }}>Delete</Button>
                                </td>
                            </tr>
                            )
                           
                        })}
                    </tbody>
                </Table>
            </Container>
        </>
        );
}
export default Demo;
