import Header from "./components/Header";
import { Grid } from "./components/Grid";

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
