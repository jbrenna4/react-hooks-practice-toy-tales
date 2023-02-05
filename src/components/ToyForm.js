import React, {useState} from "react";

function ToyForm() {

  //name state
  //image url state
  //handle submit//create object
  const [newToy, setNewToy] = useState({
    name: "",
    image: ""
  })

  function handleNewToy(e) {
    setNewToy({...newToy, [e.target.name]:e.target.value})
    }

  function handleSubmit(e) {
    e.preventDefault();
    const newToyObject = {
      name: newToy.name,
      image: newToy.image
  }
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
          onChange = {handleNewToy}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          onChange = {handleNewToy}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
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
