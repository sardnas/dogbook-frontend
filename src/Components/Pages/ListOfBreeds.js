import React, { useEffect, useState } from "react";
import Color from "../Constants";
import Box from "../Box.js";
import Text from "../Text.js";
import Input from "../Input.js";
import Spacing from "../Spacing";
import CenterScreen from "../CenterScreen";
import Button from "../Button.js";
import { Link, useHistory } from "react-router-dom";
import { GetBreeds } from "../../Api.js";

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
          console.log(breed);
          return <option value={breed.id}>{breed.name}</option>;
        })}
      </select>
    </>
  );
};

export default ListOfBreeds;
