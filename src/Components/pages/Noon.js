import React from 'react';
import noon from '../pictures/noon.jpg';
import Image from 'react-bootstrap/Image';
import {Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const style= {
  width: '300px',
  height: '200px',
  margin: ' 20px'
}

const Noon = (props) => {

    return(
<div>
  <Container>
  <Row>
    <Col >
      <Image src={noon} rounded style={style}/>
    </Col>
  </Row>
  <Row>
  <Col>
  <div>Hi I'm Noon!</div>
  </Col>
  </Row>
  <Row>
  <Col>
  <div>I am a software developer. I like travel, I like spicy food. I am ready to drive in to coding world</div>
  </Col>
  </Row>
  <div className="align-items-center">
    <Link to='/'>Go Back Home</Link>
  </div>

</Container>
</div>
    )
}

export default Noon;
