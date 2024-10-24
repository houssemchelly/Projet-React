import React, {useState} from 'react';
function Formulaire(props) {
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log("le nom est ",nom," d'âge ",age);
        alert("Le nom est "+nom+" d'âge est "+age); 
    }
    const [nom,setNom]=useState();
    const [age,setAge]=useState();
    return (
        <> 
            <h3>Formulaire :</h3>
            <form >
                <div className="col-sm-3">
                    <h4>Nom:</h4>
                    <input className='form-control' type="text" value={nom} 
                    onChange={(event)=>setNom(event.target.value)}/>
                </div>
                <div className="col-sm-3">
                    <h4>Age:</h4>
                    <input className='form-control' type="nombre" value={age}
                    onChange={(e)=>setAge(e.target.value)}/>
                </div>
                {nom? <h5>le nom est {nom},</h5> :null}
                {age? <h5>d'âge {age} ans</h5> :null}
                <div>
                    <button className='btn btn-success'
                    onClick={(event)=>handleSubmit(event)}>
                        Valide
                    </button>
                </div>
                <h7>Veuillez envoyer les données via : <em>{props.email} </em></h7>
            </form>
        </>
     );
}

export default Formulaire;