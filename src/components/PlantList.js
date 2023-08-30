import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantList, deletePlant, updatePlant}) {
  return (
    <ul className="cards">
      {
        plantList.map(plant => <PlantCard key={plant.id} plant={plant} deletePlant={deletePlant} updatePlant={updatePlant}/>)
      }
    </ul>
  );
}

export default PlantList;
