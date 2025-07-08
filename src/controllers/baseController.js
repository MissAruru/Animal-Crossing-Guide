import React, { useEffect, useState } from "react";


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

    
    