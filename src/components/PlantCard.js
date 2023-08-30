import React, {useState} from "react";

function PlantCard({plant, updatePlant, deletePlant}) {
  const {id, name, image, price} = plant;
  const [inStock, setInStock] = useState(true);
  const [changedPrice, setChangedPrice] = useState(0);

  function handlePriceChange(e) {
    e.preventDefault();
    updatePlant({...plant, price: parseFloat(changedPrice)});
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={() => setInStock(!inStock)}>In Stock</button>
      ) : (
        <button onClick={() => setInStock(!inStock)}>Out of Stock</button>
      )}
      <form onSubmit={(e) => handlePriceChange(e)}>
        <input type="text" placeholder="Price" onChange={(e) => setChangedPrice(e.target.value)}/>
        <button type="submit" className="primary">Change</button>
      </form>
      <button type="submit" className="deleteBtn" onClick={() => deletePlant(id)}>Delete</button>
    </li>
  );
}

export default PlantCard;
