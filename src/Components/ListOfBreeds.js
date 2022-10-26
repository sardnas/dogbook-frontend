import React, { useEffect, useState } from "react";
import StyledOption from "./StyledOption.js";
import StyledSelect from "./StyledSelect.js";

const ListOfBreeds = ({ breeds, breedSelected }) => {
  return (
    <>
      <StyledSelect
        name="breed"
        id="breeds"
        onChange={(event) => {
          breedSelected(event.target.value);
        }}
      >
        {breeds.map((breed) => {
          return (
            <StyledOption key={breed.id} value={breed.id}>
              {breed.name}
            </StyledOption>
          );
        })}
      </StyledSelect>
    </>
  );
};

export default ListOfBreeds;
