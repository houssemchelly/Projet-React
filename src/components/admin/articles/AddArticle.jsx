    import React, { useState } from 'react';
    import axios from "axios"
    import Button from 'react-bootstrap/Button';
    import Form from 'react-bootstrap/Form';
    import Col from 'react-bootstrap/Col';
    import InputGroup from 'react-bootstrap/InputGroup';
    import Row from 'react-bootstrap/Row';
    import { FilePond,registerPlugin } from 'react-filepond'
    import 'filepond/dist/filepond.min.css';
    import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
    import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
    import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
    registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview) 

    const Insertarticle =()=> {
        const [article,setArticle]=useState({})
        const [files, setFiles] = useState([]);
        const [validated, setValidated] = useState(false);
        const handlechange=(e)=>{
        
         setArticle({...article,[e.target.name]:e.target.value})
         }
        const handleSubmit = (e) => {
         e.preventDefault();
         const form = e.currentTarget;
         if (form.checkValidity() === true) {
        
        //faire le add dans la BD
        axios.post("http://localhost:3001/produits",article)
        .then(res => {
        console.log(res);
        alert("Article ajouté")
         })  
         .catch(error=>{
            console.log(error)
            alert("Erreur ! Insertion non effectuée")
            })
            }
            setValidated(true);
            }
           
            const handleReset=()=>{
            setArticle({})
            setFiles([])
            setValidated(false);
            }
            const serverOptions = () => { console.log('server pond');
            return {
            process: (fieldName, file, metadata, load, error, progress, abort) => {
            console.log(file)
            const data = new FormData();
           
            data.append('file', file);
            data.append('upload_preset', 'e-commerce');
 data.append('cloud_name', 'dd0dpqw0h');
 data.append('public_id', file.name); 
 axios.post('https://api.cloudinary.com/v1_1/dd0dpqw0h/image/upload',
    data)
    .then((response) => response.data)
    .then((data) => {
    console.log(data);
    setArticle({...article,imageartpetitf:data.url}) ;
    load(data);
    })
    .catch((error) => {
    console.error('Error uploading file:', error);
    error('Upload failed');
    abort();
    });
    },
    };
    };
   
    return (
   <div className='container'>
   <Form noValidate validated={validated} onSubmit={handleSubmit}>
   <h2>Ajouter un produit</h2>
   <div className="container w-100 d-flex justify-content-center">
   <div>
<div className='form mt-3'>
<Row className="mb-2">
<Form.Group as={Col} md="6" >
<Form.Label >Référence *</Form.Label>
<Form.Control
required
type="text"
placeholder="Référence"
name="reference"
value={article.reference || ''}
onChange={(e)=>handlechange(e)}
/>
<Form.Control.Feedback type="invalid">
Saisir Référence Article
</Form.Control.Feedback>
</Form.Group>
<Form.Group as={Col} md="6">
<Form.Label>Désignation *</Form.Label>
<Form.Control
required
type="text"
name="designation"
placeholder="Désignation"
value={article.designation || ''}
onChange={(e)=>handlechange(e)}
/>
<Form.Control.Feedback type="invalid">
Saisir Désignation
</Form.Control.Feedback>
</Form.Group>
</Row>
<Row className="mb-2">
<Form.Group className="col-md-6">
<Form.Label>Marque *</Form.Label>
<InputGroup hasValidation>
<Form.Control
type="text"
required
name="marque"
placeholder="Marque"
value={article.marque || ''}
onChange={(e)=>handlechange(e)}
/>
<Form.Control.Feedback type="invalid">
Marque Incorrecte
</Form.Control.Feedback>
</InputGroup>
</Form.Group>
<Form.Group as={Col} md="6">
<Form.Label>Prix Achat *</Form.Label>
<Form.Control
type="number"
placeholder="Prix Achat"
name="prixAchat"
value={article.prixAchat || ''}
onChange={(e)=>handlechange(e)}
/>
</Form.Group>
</Row>
<Row className="mb-3">
<Form.Group as={Col} md="6">
<Form.Label>Prix Vente *</Form.Label>
<Form.Control
type="number"
placeholder="Prix Vente"
name="prixVente"
value={article.prixVente || ''}
onChange={(e)=>handlechange(e)}
/>
</Form.Group>
<Form.Group className="col-md-6 ">
<Form.Label>
Qté stock<span className="req-tag">*</span>
</Form.Label>
<Form.Control
required
type="number"
name="qtestock"
value={article.qtestock || ''}
onChange={(e)=>handlechange(e)}
placeholder="Qté stock"
/>
<Form.Control.Feedback type="invalid">
Qté stock Incorrect
</Form.Control.Feedback>
</Form.Group>
</Row>
<div style={{ width: "80%", margin: "auto", padding: "1%" }}>
 <FilePond
 files={files}
 acceptedFileTypes="image/*"
 onupdatefiles={setFiles}
 allowMultiple={true}
 server={serverOptions()}
 name="file"

 />
  </div>
</div>
</div>
</div>
<Button type="submit">Enregistrer</Button>
<Button type="button" className="btn btnwarning"onClick={()=>handleReset()}>Annuler</Button>
</Form>
</div>
 )
}
export default Insertarticle