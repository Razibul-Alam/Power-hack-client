import React,{useState} from 'react';
import { Modal } from 'react-bootstrap';
import AddBilling from '../Billing/AddBilling';
const CustomModal = ({show,setShow,handleClose}) => {
    
    return (
        <>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Delivery Item Information</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>

                 <AddBilling  handleClose={handleClose} show={show} setShow={setShow}/>
                  </Modal.Body>
                  <Modal.Footer>
                  </Modal.Footer>
                </Modal>
              </>
    );
};

export default CustomModal;