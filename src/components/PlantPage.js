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

  const filteredPlants = plantList.filter((plant) => plant.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search setSearchTerm={setSearchTerm}/>
      <PlantList plantList={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
