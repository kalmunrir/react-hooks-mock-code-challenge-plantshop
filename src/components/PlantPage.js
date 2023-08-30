import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantList, setPlantList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((res) => res.json())
    .then((plants) => setPlantList(plants))
  }, []);

  function addPlant(newPlant) {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
  .then((res) => res.json())
  .then((newPlant) => setPlantList([...plantList, newPlant]));
  }
  function deletePlant(id) {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
    .then((res) => res.json())
    .then((newPlant) => setPlantList(plantList.filter((plant) => plant.id !== id)));
  }
  function updatePlant(updatedPlantObj) {
    fetch(`http://localhost:6001/plants/${updatedPlantObj.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPlantObj),
    })
   .then((res) => res.json())
   .then((newPlant) => setPlantList(plantList.filter((plant) => {
      if (plant.id === updatedPlantObj.id) {
        plant.price = updatedPlantObj.price;
      }
      return true;
   })));
  }

  const filteredPlants = plantList.filter((plant) => plant.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search setSearchTerm={setSearchTerm}/>
      <PlantList plantList={filteredPlants} deletePlant={deletePlant} updatePlant={updatePlant} />
    </main>
  );
}

export default PlantPage;
