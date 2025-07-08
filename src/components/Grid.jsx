import React, { use } from "react";
import { useEffect, useState } from "react";
import GridController from "../controllers/animalsController";

export function Grid() {

  const {fetchData} = GridController();

  const [bugs, setBugs] = useState([]);
  const [fish, setFish] = useState([]);
  const [loading, setLoading] = useState(true);

  
  const getData = async () => {
    const data = await fetchData("fish");
const dataBugs = await fetchData("bugs");
    setBugs(dataBugs);
    setFish(data);
  };

  useEffect(() => {
    getData();
    setLoading(false);
  }, []);



  
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12 xl:grid-cols-24 gap-1 p-4">
      {bugs.map((bug, index) => (
        <div key={`bug-${index}`} className="bg-amber-200 text-black p-4 cursor-pointer hover:bg-amber-300 transition-colors rounded-lg">
          <img
            src={bug.image_url}
            alt={bug.name}
            className="w-full h-auto rounded-lg"
          />
          
        </div>
      ))}
      {fish.map((fishItem, index) => (
        <div key={`fish-${index}`} className="bg-blue-200 text-black p-4 cursor-pointer hover:bg-blue-300 transition-colors rounded-lg">
          <img
            src={fishItem.image_url}
            alt={fishItem.name}
            className="w-full h-auto rounded-lg"
          />
          
        </div>
      ))}
    </div>
  );
}
