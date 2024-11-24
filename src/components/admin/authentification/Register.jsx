import { useRef, useState } from "react";
import { Alert, Button, Container , Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { supabase } from "../../../supabase/client";

const Register = () => {
 const emailRef = useRef(null);
 const passwordRef = useRef(null);
 const confirmPasswordRef = useRef(null);
 const [errorMsg, setErrorMsg] = useState("");
 const [msg, setMsg] = useState("");
 const [loading, setLoading] = useState(false);
 const register = (email, password) =>
 supabase.auth.signUp({ email, password });
 const handleSubmit = async (e) => {
 e.preventDefault();
 if (
 !passwordRef.current?.value || 
 !emailRef.current?.value ||
 !confirmPasswordRef.current?.value
 ) {
 setErrorMsg("Please fill all the fields");
 return;
 }
 if (passwordRef.current.value !== confirmPasswordRef.current.value) {
 setErrorMsg("Passwords doesn't match");
 return;
 }
 try {
 setErrorMsg("");
 setLoading(true);
 const { data, error } = await register(
 emailRef.current.value,
 passwordRef.current.value
 );
 if (!error && data) {
 setMsg(
 "Registration Successful. Check your email to confirm your account"
 );
 }
 } catch (error) {
 setErrorMsg("Error in Creating Account");
 }
 setLoading(false);
 };
 return (
 <>
 <Container style={{ width: "400px", margin: "0 auto" , border: "2px solid #007bff" , borderRadius: "10px" ,
    boxShadow: "0 4px 6px rgba(0, 0, 0,0.1), 0 1px 3px rgba(0, 0, 0, 0.06)"}}>

 <h2 className="text-center mb-4">Register</h2>
 <Form onSubmit={handleSubmit}>
 <Form.Group id="email">
 <Form.Label>Email</Form.Label>
 <Form.Control type="email" ref={emailRef} required />
 </Form.Group>
 <Form.Group id="password">
 <Form.Label>Password</Form.Label>
 <Form.Control type="password" ref={passwordRef} required />
 </Form.Group>
 <Form.Group id="confirm-password">
 <Form.Label>Confirm Password</Form.Label>
 <Form.Control type="password" ref={confirmPasswordRef} required
/>
</Form.Group>
 {errorMsg && (
 <Alert
 variant="danger"
 onClose={() => setErrorMsg("")}
 dismissible>
 {errorMsg}
 </Alert>
 )}
 {msg && (
 <Alert variant="success" onClose={() => setMsg("")} dismissible>
 {msg}
 </Alert>
 )}
 <div className="text-center mt-2">
 <Button disabled={loading} type="submit" className="w-50">
 Register
 </Button>
 </div>
 </Form>

 </Container>
 <div className="w-100 text-center mt-2">
 Already registered ? <Link to={"/login"}>Login</Link>
 </div>
 </>
 );
};
export default Register; 