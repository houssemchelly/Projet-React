import axios from "axios";
import { useEffect, useState } from "react";
import ElementsArticle from "./ElementArticles";
function ListArticles() {
    const[articles,setArticles]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3001/produits")
        .then((Response)=>setArticles(Response.data))
        .catch((error)=>console.log(error)); 
    }, []);
//1ere methode de suppression avec dans elementArticles on ajoute "deleteProd" dans les parametres de la fonction
    /*const deleteProd = async (id) => {
        if (!window.confirm("Are you sure you want to delete")) {
        return;
        }
       
        axios.delete('http://localhost:3001/produits/' + id)
        .then(() => {
        console.log('successfully deleted!');
        setArticles(prevArticles => prevArticles.filter((article) =>
       article.id !== id));
        }).catch((error) => {
        console.log(error);
        })
       
        }*/

    return ( 
        <>
            <h2>Liste des articles </h2>
            <ElementsArticle articles={articles} /*deleteProd={deleteProd}*/ setArticles={setArticles}/>
        </>
     );
}

export default ListArticles;