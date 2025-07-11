
function animalsController (){

  async function fetchData(animal) {

    const url = `https://api.nookipedia.com/nh/${animal}`;

    const opciones = {
      method: "GET",
      headers: {
        "X-API-KEY": "e42c2f73-0e79-4a82-8aa2-e0a45e7d48d7",
        "Content-Type": "application/json",
      },
      
    }

    try {
      const respuesta = await fetch(url, opciones);
      const data = await respuesta.json();
      return data;
      
    }
        
       catch (error) {
        
      }
}



return {
  fetchData
}

}
  export default animalsController;
    
    