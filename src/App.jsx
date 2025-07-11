import Header from "./components/Header";
import { Grid } from "./components/Grid";
import { useState } from "react";
import animalsController from "./controllers/animalsController";
import { useEffect } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);

  const { fetchData } = animalsController();
  const [fish, setFish] = useState([]);
  const [bugs, setBugs] = useState([]);
  const [filteredAnimals, setFilteredAnimals] = useState(null);

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

  return (
    <>
      <div className="min-h-screen bg-[url('./assets/bg.jpg')] bg-cover bg-center">
        <Header
          fish={fish}
          bugs={bugs}
          onFilter={(filtered) => setFilteredAnimals(filtered)}
        />
        <Grid fish={fish} bugs={bugs} filteredAnimals={filteredAnimals} loading={loading} />
      </div>
    </>
  );
}
