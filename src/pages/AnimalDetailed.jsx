import { useParams } from "react-router-dom";

function AnimalDetailed({ bugs, fish }) {

    
  const { id } = useParams();
  const decodedId = decodeURIComponent(id);
  const allAnimals = [...fish, ...bugs];


   if (!fish.length && !bugs.length) {
    return <p className="p-4">Cargando datos...</p>;
  }

  const animal = allAnimals.find(
  (a) => a.name.toLowerCase() === decodedId.toLowerCase()
);

  if (!animal) {
    return <p className="p-4">Animal no encontrado</p>;
  }


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-[#C39D67] to-[#F2E6D4]">
      <h1 className="text-4xl font-bold text-white mb-8">
        Animal Detailed Page
      </h1>
      <h1 className="text-3xl font-bold mb-4">{animal.name}</h1>
      <img
        src={animal.image_url}
        alt={animal.name}
        className="w-64 h-auto mb-4"
      />
      <img src={animal["image_uri"]} alt={animal["file-name"]} className="w-64 h-auto mb-4" />
      <p><strong>Price:</strong> {animal.price}</p>
      <p>
        <strong>Availability:</strong> {animal.availability}
      </p>
    </div>
  );
}

export default AnimalDetailed;
