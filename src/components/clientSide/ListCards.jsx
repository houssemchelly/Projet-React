import axios from 'axios';
import { useEffect, useState } from 'react';
import ElementsArticleCard from './ElementArticleCard';
function ListCards() {
 const [articles, setArticles] = useState([]);
 useEffect(() => {
 axios.get('http://localhost:3001/produits')
 .then((res) => {
 const data = res.data;
 setArticles(data);

 })
 .catch((error) => {
 console.error(error);
 });
 }, []);
 return (
 <div className="container">
 <ElementsArticleCard articles={articles} />
 </div>
 );
}
export default ListCards;
