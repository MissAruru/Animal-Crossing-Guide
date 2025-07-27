import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function capitaliza(str) {
  return str[0].toUpperCase() + str.substring(1).toLowerCase();
}

function AnimalDetailed({ bugs, fish }) {
    const navigate = useNavigate();
  
  const { id } = useParams();
  const decodedId = decodeURIComponent(id);
  const allAnimals = [...fish, ...bugs];

  if (!fish.length && !bugs.length) {
    return (
      <p className="font-humming text-[#C39D67] text-3xl p-4">
        Cargando datos...
      </p>
    );
  }

  const animal = allAnimals.find((a) => a.name === decodedId);

  if (!animal) {
    return <p className="p-4">Animal no encontrado</p>;
  }

  return (
    <div className="h-screen min-h-screen bg-[url('./assets/bg.jpg')] bg-cover bg-center font-humming text-[#C39D67]">
      <button className="bg-[#C39D67] w-16 text-[#F7E4BC] rounded-lg" onClick={() => navigate("/")}>Back</button>
      <div className=" flex flex-row justify-center align-center">
      <div className="flex flex-column items-center justify-center p-8 ">
        <img src={animal.image_url} alt={animal.name} className="w-56 " />
        <h1 className="text-3xl font-bold">{capitaliza(animal.name)}</h1>
      </div>
      <div className=" flex flex-column items-center justify-center p-8 text-left">
        <p>
          <strong>Location:</strong> {animal.location}
        </p>
        <p>
          <strong>Weather:</strong> {animal.weather}
        </p>
        <p>
          <strong>Price:</strong> {animal.sell_nook} Bells
        </p>
        {animal.rarity && (
          <p>
            <strong>Rarity:</strong> {animal.rarity}
          </p>
        )}
      </div>
    </div>
    </div>
  );
}

export default AnimalDetailed;
