import React from "react";


function Character({ character }) {
  //console.log(character);
  return (
    <div className="text-center p-4">
      <div key={character.id}>
        <h3>{character.id}</h3>
        <img className="img-fluid rounded mb-3" src={character.image} alt={character.name} />
        <h2>{character.name}</h2>
        {/* <h3>{character.status}</h3> */}
        {/* <h3>{character.species}</h3> */}
        {/* <h3>{character.gender}</h3> */}
      </div>
    </div>
  );
};

export default Character;
