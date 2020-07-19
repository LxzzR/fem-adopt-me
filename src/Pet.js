import React from "react";
export default function Pet({ name, animal, breed }) {
  // === PURE REACT ===
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, name),
  //   React.createElement("h2", {}, animal),
  //   React.createElement("h2", {}, breed),
  // ]);

  // === JSX ===
  return (
    <div>
      <h1>Name: {name.toUpperCase()}</h1>
      <h2>Animal: {animal}</h2>
      <h2>Breed: {breed}</h2>
    </div>
  );
}
