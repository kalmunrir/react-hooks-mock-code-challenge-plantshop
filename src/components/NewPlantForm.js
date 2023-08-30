import React, {useState} from "react";

function NewPlantForm({addPlant}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addPlant({
      "name": name,
      "image": image,
      "price": price
    });
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={(e) => handleSubmit(e)} >
        <input type="text" name="name" placeholder="Plant name" onChange={(e) => setName(e.target.value)}/>
        <input type="text" name="image" placeholder="Image URL" onChange={(e) => setImage(e.target.value)} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={(e) => setPrice(parseFloat(e.target.value))} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
