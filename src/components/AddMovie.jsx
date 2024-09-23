import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


const AddMovie = ({handleClose,handleShow,show,setNewMovie,newMovie,Add}) => {

  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const ratingRef= useRef(null)
  const imageRef= useRef (null)
    return (
        <>
        <div style={{paddingLeft:"38px", marginBottom:"10px"}}>
        <Button variant="danger" onClick={handleShow} >
            Add New Movie
          </Button>
        </div>


          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>AddMovie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Title"
                    autoFocus
                    ref={titleRef}
                    onChange={()=>setNewMovie({...newMovie, title:titleRef.current.value })}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows={3}
                ref={descriptionRef}
                 onChange={()=>setNewMovie({...newMovie, description:descriptionRef.current.value })}
                  />

                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Rating</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Rating"
                    autoFocus
                    ref={ratingRef}
                    onChange={()=>setNewMovie({...newMovie, rating:ratingRef.current.value })}
                  />
                </Form.Group>
   
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Image URL</Form.Label>

                  <Form.Control
                    type="text"
                    placeholder="URL"
                    autoFocus
                    ref={imageRef}
                    onChange={()=>setNewMovie({...newMovie, image:imageRef.current.value })}
                  />
                                  </Form.Group>

              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose} >
                Cancel
              </Button>
              <Button variant="primary" onClick={()=>{ Add() ; handleClose()}}>
                Add New Movie
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }

export default AddMovie