import { useState } from "react";
import { supabase } from "../../../supabase/client";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
const NavBarComponent = () => {
 const navigate = useNavigate();
 const [auth, setAuth] = useState(localStorage?.getItem("user") ? true :
false);
 const signOut = async () => {
 const { error } = await supabase.auth.signOut();
 if (!error) {
 setAuth(false);
 localStorage.removeItem("user");
 navigate("/login");
 } else {
 console.error("SignOut error:", error);
 }
 };
 const handleLogout = async (e) => {
 e.preventDefault();
 try {
 await signOut();
 } catch (error) {
 console.error(error);
 }
 };
 return (
 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
 <Container>
 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
 <Navbar.Collapse id="responsive-navbar-nav">
 <Nav>
 {auth && (
 <Nav.Link as={Button} onClick={handleLogout}>
 LogOut
 </Nav.Link>
 )}
 </Nav>
 </Navbar.Collapse>
 </Container>
 </Navbar>
 );
};
export default NavBarComponent; 
