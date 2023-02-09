import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  // Deliverable 1 is a Fetch request
  //useEffect (() => {fetch}, [])

  useEffect (() => {
    fetch("http://localhost:3001/toys")
    .then(res => res.json())
    .then(data => setToyArray(data));
  }, []);

  // now we create our useState and put our setting in the fetch to grab the data
  const [toyArray, setToyArray] = useState([]);

  function addToy(newToy) {
    setToyArray([...toyArray, newToy])
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy = {addToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyArray = {toyArray}/>
    </>
  );
}

export default App;
