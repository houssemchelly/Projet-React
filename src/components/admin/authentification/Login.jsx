import { useRef, useState, useEffect } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../../supabase/client";
const Login = () => {
 const emailRef = useRef(null);
 const passwordRef = useRef(null);
 const [errorMsg, setErrorMsg] = useState("");
 const [loading, setLoading] = useState(false);
 const navigate = useNavigate();
 // Auth State listener
 useEffect(() => {
 const { data } = supabase.auth.onAuthStateChange((event, session) => {
 if (event === "SIGNED_IN") {
 if(session) localStorage.setItem("user",JSON.stringify(session.user));
 }
 });
 return () => {
 data.subscription.unsubscribe();
 };
 }, []);
 const handleLogin = async (email, password) => {
 return supabase.auth.signInWithPassword({ email, password });
 };
 const handleSubmit = async (e) => {
 e.preventDefault();
 try {
 setErrorMsg("");
 setLoading(true);
 if (!emailRef.current?.value || !passwordRef.current?.value) {
 setErrorMsg("Please fill in the fields");
 return;
 } 
 const { data: { user, session }, error } = await handleLogin(
    emailRef.current.value,
    passwordRef.current.value
    );
    if (error) {
    setErrorMsg(error.message);
    return;
    }
    if (user && session) {
    navigate("/dashboard");
    }
    } catch (error) {
    setErrorMsg("Email or Password Incorrect");
    } finally {
    setLoading(false);
    }
    };
    return (
    <>
    <Container style={{ width: "400px", margin: "0 auto" , 
    border: "2px solid#007bff" , borderRadius: "10px" ,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 01px 3px rgba(0, 0, 0, 0.06)"}}>
   
    <h2 className="text-center mb-4">Login</h2>
    <Form onSubmit={handleSubmit}>
    <Form.Group id="email">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" ref={emailRef} required />
    </Form.Group>
    <Form.Group id="password">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" ref={passwordRef} required />
    </Form.Group>
    {errorMsg && (
    <Alert
    variant="danger"
    onClose={() => setErrorMsg("")}
    dismissible>
    {errorMsg}
    </Alert>
    )}
    <div className="text-center mt-2">
    <Button disabled={loading} type="submit" className="w-50">
    Login
    </Button>
    </div>
    </Form>

<div className="w-100 text-center mt-2">
New User? <Link to={"/register"}>Register</Link>
</div>
</Container>
</>
);
};
export default Login; 