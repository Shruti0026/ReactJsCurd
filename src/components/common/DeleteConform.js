import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DeleteConform=(props)=>{
    return (<>
        <Modal show={props.showModal} onHide={()=>{
            props.closeDeleteModal();
        }}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{props.closeDeleteModal();}}>
            Close
          </Button>
          <Button variant="danger" onClick={()=>{props.confirmDelete();}}>
           Confirm Delete
          </Button>
        </Modal.Footer>
      </Modal>
    
    </>)
};

export default DeleteConform;