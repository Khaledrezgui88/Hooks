import React, { useRef } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Filter = ({setFilterRating,setFilterTitle}) => {
  const inputRefTitle = useRef(null)
  const inputRefRating  = useRef (null)
  return (

    <Navbar className="bg-body-tertiary" style={{paddingLeft:'38px'}}>
      <h4> Filter </h4>
      <Form inline style={{marginLeft:"10px"}}>
        <InputGroup>
          <InputGroup.Text id="basic-addon1"></InputGroup.Text>
          <Form.Control
            placeholder="Title"
            aria-label="Username"
            aria-describedby="basic-addon1"
            ref={inputRefTitle}
            onChange={()=>setFilterTitle(inputRefTitle.current.value)}
          />
        </InputGroup>
      </Form>
      <Form inline  style={{marginLeft:"20px"}} >
        <Row>
          <Col xs="auto">
            <Form.Control
              type="Number"
              placeholder="Rating"
              className=" mr-sm-2"
              ref={inputRefRating}
              onChange={()=>setFilterRating ( Number (inputRefRating.current.value))}
            />
          </Col>

        </Row>
      </Form>
    </Navbar>
  );
}
export default Filter