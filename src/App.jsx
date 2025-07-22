import Header from "./components/Header";
import { Grid } from "./components/Grid";
import { useState } from "react";
import animalsController from "./controllers/animalsController";
import { useEffect } from "react";
import AnimalDetailed from "./pages/AnimalDetailed";
import { Route, Routes, useLocation } from "react-router-dom";

export default function App() {
  const [loading, setLoading] = useState(true);

  const { fetchData } = animalsController();
  const [fish, setFish] = useState([]);
  const [bugs, setBugs] = useState([]);
  const [filteredAnimals, setFilteredAnimals] = useState(null);
  const [detailAnimal, setDetailAnimal] = useState(null);

  const getData = async () => {
    const data = await fetchData("fish");
    const dataBugs = await fetchData("bugs");
    setBugs(dataBugs);
    setFish(data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

const location = useLocation();
  const isDetailPage = location.pathname.startsWith("/animal/");
  if (isDetailPage) {
    return (
      <Routes>
        <Route
          path="/animal/bug/:id"
          element={<AnimalDetailed fish={fish} bugs={bugs} />}
        />
               <Route
          path="/animal/fish/:id"
          element={<AnimalDetailed fish={fish} bugs={bugs} />}
        />
      </Routes>
    );
  }

function onFilter(tema){
  if (tema==="bugs"){
    setFilteredAnimals(bugs)
  } else if (tema==="fish"){
    setFilteredAnimals(fish)
  } else {
    setFilteredAnimals([...fish, ...bugs])
  }

}



  return (
    <>
      <div className="min-h-screen bg-[url('./assets/bg.jpg')] bg-cover bg-center">
        <Header
          onFilter={onFilter}
        />
        <Grid
          fish={fish}
          bugs={bugs}
          filteredAnimals={filteredAnimals}
          loading={loading}
        />
        
      </div>
    </>
  );
}
