/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
export default App */



import './App.css'
import ListArticles from './components/ListArticles.jsx';
import AddArticles from './components/AddArticles.jsx';
import EditArticle from './components/EditArticle.jsx';
import Menu from './Menu.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListCards from './components/clientSide/ListCards';
import { CartProvider } from 'use-shopping-cart';
import Cart from './components/clientSide/Cart.jsx';
import PdfCart from './components/clientSide/PdfCart.jsx';
import LoginClient from './components/authentificationClient/LoginClient.jsx';
import Signup from './components/authentificationClient/Signup.jsx';
import Dashboard from './components/admin/Dashboard.jsx';
import Insertarticle from './components/admin/articles/AddArticle.jsx';
import Register from './components/admin/authentification/Register.jsx';
import Login from './components/admin/authentification/Login.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';

function app(){ 
  return(
    <>
      <CartProvider>
        <Router>
          <Menu/>
          <Routes>
            <Route path='/articles' element={<ListArticles/>}/>
            <Route path='/AddArticle' element={<AddArticles/>}/>
            <Route path='/EditArticle/:id' element={<EditArticle/>}/>
            {/*<Route path='/' element={<ListArticles/>}/>*/}
            <Route path='/' element={<ListCards/>}/>
            <Route path='/Cart' element={<Cart/>}/>
            <Route path='/pdfCart' element={<PdfCart/>}/>
            <Route path='/LoginClient' exact element={<LoginClient/>}/>
            <Route path='/Signup' exact element={<Signup/>}/>
            <Route element={<ProtectedRoute/>}>
              <Route path="/dashboard" element={<Dashboard/>}/>
            </Route>
            <Route path="/Insertarticle" element={<Insertarticle/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>

          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}
export default app;



