import React from 'react';
import { Nav } from 'react-bootstrap';
import "./style.css"

const TopNav = () => {
    return (
        <Nav>
            <Nav.Item as="ul">
                <Nav.Item as="li">
                    <img src="" alt="Octocat" />
                </Nav.Item>
            </Nav.Item>

        </Nav>
    )
}

export default TopNav;