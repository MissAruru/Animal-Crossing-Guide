import React from "react";
import { useEffect, useState } from "react";

export function Grid() {
  const [bugs, setBugs] = useState([]);
  const [fish, setFish] = useState([]);
  const [loading, setLoading] = useState(true);

  const urlApiBugs = "https://api.nookipedia.com/nh/bugs";
  const urlApiFish = "https://api.nookipedia.com/nh/fish";

  useEffect(() => {
    Promise.all([
      fetch(urlApiBugs, {
        method: "GET",
        headers: {
          "X-API-KEY": "e42c2f73-0e79-4a82-8aa2-e0a45e7d48d7",
          "Content-Type": "application/json",
        },
      }).then((response) => response.json()),
      fetch(urlApiFish, {
        method: "GET",
        headers: {
          "X-API-KEY": "e42c2f73-0e79-4a82-8aa2-e0a45e7d48d7",
          "Content-Type": "application/json",
        },
      }).then((response) => response.json()),
    ])
      .then(([bugsData, fishData]) => {
        setBugs(bugsData);
        setFish(fishData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
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
