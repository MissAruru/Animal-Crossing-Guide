import React from "react";
import { useEffect, useState } from "react";

export function Grid() {
  const [bugs, setItems] = useState([]);

  const urlApi = "https://api.nookipedia.com/nh/bugs";

  fetch(urlApi, {
    method: "GET",

    headers: {
      "X-API-KEY": "e42c2f73-0e79-4a82-8aa2-e0a45e7d48d7",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const bugs = data.map((bug) => bug.image_url);
      setItems(bugs);
    })
    .catch((error) => console.error("Error fetching data:", error));

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12 xl:grid-cols-24 gap-1 p-4">
      
        {bugs.map((bug, index) => (
          <div key={index} className="bg-amber-200 text-black p-4 cursor-pointer hover:bg-amber-300 transition-colors rounded-lg">
            <img
              src={bug}
              alt={`Bug ${index + 1}`}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-center mt-2">{name}</p>
          </div>
        ))}
      </div>
  );
}
