import Header from "./components/Header";
import { Grid } from "./components/Grid";
import AnimalDetailed from "./components/AnimalDetailed";

export default function App() {
  return (
    <>
    <div className="min-h-screen bg-[url('./assets/bg.jpg')] bg-cover bg-center">
      <Header />
      <Grid/>
      </div>
    </>
  );
}
