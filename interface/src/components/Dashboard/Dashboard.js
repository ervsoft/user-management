import React, { useState, setState, useContext, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import { Sidebar, Content, Pageginator } from './Components';
import { MainContext } from '../appContext';
//import { decodeJWT } from '../appTool';
import useFetch from '../appFetch';
import jwt_decode from "jwt-decode";
//import { getList } from "../components/appServices";  

export default function Dashboard() {

    const { token } = useContext(MainContext);
    const profileData = jwt_decode(token);
    const LogOutClick = (event) => {

        console.log('You have been logged out');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
        window.location.reload();


        event.preventDefault();
        localStorage.removeItem('token');
    }



    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">JustLend</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="users">Users</Nav.Link>
                        <Nav.Link href="contact">Contact</Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">{profileData.username}</a>
                            &nbsp; <a href="/logout" onClick={LogOutClick}>Logout</a>

                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="container-fluid">
                <Container>
                    <div className="row">
                        <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                            <Sidebar />
                        </nav>
                        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                            <Content />
                            <Pageginator />
                        </main>
                    </div>
                </Container>
            </div>
        </>
    );


}



