import React from "react";

function ToyCard({ name, image, likes}) {

//  const toyId = newToyArray.key
  const toyName = name
  const toyImage = image
  const toyLikes = likes
  //console.log(toyImage)

  return (
    <div className="card">
      <h2>{toyName}</h2>
      <img
        src={toyImage}
        alt={toyName}
        className="toy-avatar"
      />
      <p>{toyLikes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
