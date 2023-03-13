import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './App.css';

function App() {
  var arr=[{Name:"Fancy Product",
        Rate:"$40.00 - $80.00",
        options:"View options",
        options2:"coming soon..",
        type:""},
        {Name:"Special Item",
        Rate:"$20.00 $18.00",
        options:"Add to cart",
        options2:"Remove item",
        type:"Sale"},
        {Name:"Sale Item",
        Rate:"$50.00 $25.00 ",
        options:"Add to cart",
        options2:"Remove item",
        type:"Sale"},
        {Name:"Popular Item",
        Rate:"$40.00",
        options:"Add to cart",
        options2:"Remove item",
        type:""},
        {Name:"Sale Item",
        Rate:"$50.00 $25.00",
        options:"Add to cart",
        options2:"Remove item",
        type:"Sale"},
        {Name:"Fancy Product",
        Rate:"$120.00 - $280.00",
        options:"View options",
        options2:"coming soon..",
        type:""},
        {Name:"Special Item",
        Rate:"$20.00 $18.00",
        options:"Add to cart",
        options2:"Remove item",
        type:"Sale"},
        {Name:"Popular Item",
        Rate:"$40.00",
        options:"Add to cart",
        options2:"Remove item",
        type:""}]

        const [count, setCount]=useState(0)
        
  return (
      <div className="App">
        <div><Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Start-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">All Products</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Popular Items
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">New Arrivals</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Button variant="light" id="cart">
      🛒 cart <Badge bg="secondary">{count}</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
    </Navbar></div>
    <div> <Card style={{ width: '100%' }}  className="bg-dark text-white">
      
      <Card.Body>
        <Card.Title>Shop in style</Card.Title>
        <Card.Text>
        With this shop hompeage template
        </Card.Text>
        
      </Card.Body>
    </Card></div>
        
        <div className='card-container'>
          {arr.map((value,idx)=>(
          <Detail Name={value.Name} Rate={value.Rate} options={value.options} options2={value.options2} type={value.type} key={idx} setCount={setCount} count={count}/>
          ))}
        </div>
      
      
    </div>
  );
}

export default App;

function Detail(props){

  const [show, setshow] = useState(true);

  
  function addtocart(){
    if(props.options=='Add to cart'){
      setshow(!show)
      props.setCount(props.count + 1)
    }else{
      setshow(!show)
    }
    // console.log(props.options)
  }
  function removefromcart(){
    
    if(props.options2=='Remove item'){
      setshow(!show)
      props.setCount(props.count - 1)
    }else{
      setshow(!show)
    }    
  }
 
  return (
    <Card key="props.key" style={{ width: '18rem' }}>
      
      <Card.Img variant="top" src="holder.js/100px180?text=450*300"/>
      <Card.Body>
        <Card.Title>{props.Name}</Card.Title>
        <Card.Text>
          {props.Rate}
        </Card.Text>
        {show ? <Button variant="primary" onClick={addtocart}>{props.options}</Button> : ""}
        {!show ? <Button variant="primary" onClick={removefromcart}>{props.options2}</Button> : ""}
        
        
      </Card.Body>
    </Card>
  )
}

