import React, { useEffect, useState } from "react";
import Button from "../Button.js";
import Color from "../Constants";
import Box from "../Box.js";
import Text from "../Text.js";
import Input from "../Input.js";
import Spacing from "../Spacing";
import CenterScreen from "../CenterScreen";
import { Link, useHistory } from "react-router-dom";
import logo from "../WhiteIcon.svg";
import BigBox from "../BigBox.js";
import Cookies from "universal-cookie";
import { GetBreeds } from "../../Api.js";

function Breeds() {
  const [breeds, setBreeds] = useState(null);
  const [fetchingBreeds, setFetchingBreeds] = useState(false);
  const [hasFetchedBreeds, setHasFetchedBreeds] = useState(false);

  useEffect(() => {
    async function FetchBreeds() {
      setFetchingBreeds(true);
      let response = await GetBreeds();
      setFetchingBreeds(false);
      if (response.status === 200) {
        let json = await response.json();
        setBreeds(json);
      }
      setHasFetchedBreeds(true);
    }

    if (!hasFetchedBreeds) {
      FetchBreeds();
    }
  }, [breeds, fetchingBreeds, hasFetchedBreeds]);

  return (
    <>
      <CenterScreen>
        {breeds.map((breed) => {
          console.log(breeds);
          return <p>{breed}</p>;
        })}
      </CenterScreen>
    </>
  );
}

export default Breeds;
