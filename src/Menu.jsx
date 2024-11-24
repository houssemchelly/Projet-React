import { Link } from "react-router-dom"
import React, {useState} from "react";
import {auth} from "./fireConfig";
import { onAuthStateChanged} from "firebase/auth";
import { Logout } from "@mui/icons-material";

function Menu() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

        onAuthStateChanged(auth, (user) => {
        return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
        });

        const logOut=()=>{
        auth.signOut().then(() => {
        console.log('singOut');
        }).catch((error) => {
        console.log(error);
        });
        } 

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" ariacontrols="navbarSupportedContent" aria-expanded="false" aria-label="Toggle
navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">
                                <a className="navbar-brand">
                                    <img src="data:image/png;base64,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
" alt="" width="30"/>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/articles">Liste des articles</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/addArticle">Ajout articles</Link>
                        </li>
                    </ul>
                    {!isLoggedIn ?
                        (
                            <Link className="btn btn-outline-primary" to="/LoginClient">
                                Log In
                            </Link>
                        ):(
                            <button className="btn btn-outline-primary" onClick={()=>logOut()}>
                                Log Out
                            </button>
                        )
                    }
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search"
                            placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success"
                            type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}
export default Menu; 