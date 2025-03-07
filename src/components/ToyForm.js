import React, {useState} from "react";

function ToyForm(onAddToy) {

  //name state
  //image url state
  //handle submit//create object
  const [name, setName] = useState("")
  const {image, setImage} = useState("")

  //function handleNewToy(e) {
  //  setNewToy({...newToy, [e.target.name]:e.target.value})
  //  }

  function handleSubmit(e) {
    e.preventDefault();
    const newToyObject = {
      name: name,
      image: image
  }
  fetch('http://localhost:3001/toys', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(newToyObject)
    })
    .then((r) => r.json())
    .then((r) => {
      onAddToy(r)
      setName("")
      setImage("")
    });
}

  // function renderToy(newToyObject) {
  //   const renderArray = [...toyArray, newToyObject]
  //   setNewToy(renderArray)
  // }



  // useEffect (() => {
  //   fetch("http://localhost:3001/toys")
  //   .then(res => res.json())
  //   .then(data => setToyArray(data));
  // }, []);


  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          onChange ={(e) => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value = {name}
        />
        <br />
        <input
          onChange ={(e) => setImage(e.target.value)}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value = {image}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
