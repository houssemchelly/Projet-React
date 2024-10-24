function Pays() {
    const pays=[
        {nom:"Tunisie",ville:"Sfax",photos:"tun.jpeg"},
        {nom:"France",ville:"Marseille",photos:"fr.jpeg"},
        {nom:"Allemagne",ville:"Bern",photos:"ger.jpeg"},
        {nom:"Maroc",ville:"Aghadir",photos:"mar.jpeg"},];
    return ( 
        <table className="table table-striped table-hover">
        <thead className="table table-dark">
          <tr>
            <th>nom</th>
            <th>ville</th>
            <th>photos</th>
          </tr>
        </thead>
        <tbody>
          {
            pays.map(
              (im,ind)=>{
                return(
                  <tr key={ind}>
                    <td>{im.nom}</td>
                    <td>{im.ville}</td>
                    <td><img src={im.photos} width="100" alt={im.ville} /></td>
                  </tr>
                )
              }
            )
          }
        </tbody>
      </table>
     );
}

export default Pays;