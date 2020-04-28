import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import "./style.css";
import octocatImage from './images/GitHub-Mark-32px.png';
import inImage from './images/LI-In-Bug.png';


const imageStyles = { height: "32px" };


const TopNav = () => {
    return (
       

        <Navbar bg="dark" sticky="top" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Trevor Brown</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Nav.Item as="ul">
                    <Nav.Item as="li">
                        <img src={octocatImage} alt="Octocat" />
                    </Nav.Item>
                    <Nav.Item as="li">
                        <img src={inImage} style={imageStyles} alt="Octocat" />
                    </Nav.Item>
                </Nav.Item>
  
            </Container>
        </Navbar>
    )
}

export default TopNav;