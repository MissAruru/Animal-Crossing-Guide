import React, { use, useEffect, useState } from "react";

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
      //const imges = data.map((bug) => bug.image_url);
      return data;
      
    }
        
       catch (error) {
        
      }
}



const updateData = async (url, data) => {
}



return {
  fetchData,
  updateData
}

}
  export default animalsController;
    
    