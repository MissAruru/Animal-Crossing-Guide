import React, { use } from "react";
import { useEffect, useState } from "react";
import GridController from "../controllers/animalsController";
import { useNavigate } from "react-router-dom";

export function Grid({ bugs, fish, filteredAnimals, loading, detailAnimal }) {
  const { fetchData } = GridController();
  const navigate = useNavigate();

  const animalsToShow = filteredAnimals || [...bugs, ...fish];

const handleClick = (animal) => {
  if (!animal?.name) {
    console.warn("Animal sin name:", animal);
    navigate("/");
    return;
  }

  navigate(`/animal/${encodeURIComponent(animal.name)}`);
};




  if (loading) {
    return <p>Loading...</p>;
  }


  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12 xl:grid-cols-24 gap-1 p-4">
      {animalsToShow.map((animal, index) => (
        
        <div
          key={index}
          className="bg-amber-200 text-black p-4 cursor-pointer hover:bg-amber-300 transition-colors rounded-lg"
          onClick={() => handleClick( animal )}
        >
          <img
            src={animal.image_url}
            alt={animal.name}
            className="w-full h-auto rounded-lg"
          />
        </div>
      ))}
    </div>
  );
}
