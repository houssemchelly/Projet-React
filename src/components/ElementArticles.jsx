import { Link } from "react-router-dom";
import axios from "axios";
/*appel de setArticles*/
function ElementsArticle({articles, setArticles}) {
 //2eme methode suppression
    const deleteProd = async (id) => {
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
       
        }

    return (
        <div className="container">
            <div className="row"> 
            {
                articles && articles.map(articles=>{
                    return(
                        <div key={articles.id} className="col-sm-4">
                            <div className="card" style={{"width": "18rem"}}>
                                <img src={articles.imageartpetitf} width="100" alt={articles.designation} />
                                <div className="card-body">
                                    <h5 className="card-title">{articles.designation}</h5>
                                    <p className="card-text">{articles.marque}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{articles.prixVente} TND</li>
                                </ul>
                                <div className="card-footer">
                                    <Link exact to={`/editArticle/${articles.id}`} 
                                    className="btn btn-primary">Modifier</Link>
                                    <button onClick={()=>{deleteProd(articles.id)}} className="btn btn-danger">
                                        Supprimer
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
     );
}

export default ElementsArticle;