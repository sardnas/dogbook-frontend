import React, { useEffect, useState } from "react";

const ListOfBreeds = ({ breeds, breedSelected }) => {
  return (
    <>
      <select
        name="breed"
        id="breeds"
        onChange={(event) => {
          breedSelected(event.target.value);
        }}
      >
        {breeds.map((breed) => {
          return <option value={breed.id}>{breed.name}</option>;
        })}
      </select>
    </>
  );
};

export default ListOfBreeds;
