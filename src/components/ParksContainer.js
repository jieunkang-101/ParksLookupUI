import React, { useEffect, useState } from "react";
import { parksApi } from "./Api";
import ParkList from './ParkList';

const ParksContainer = () => {
 
  const [parks, setParks] = useState({
    isLoading: true,
    parks: [],
    error: null
  });
  const getData = async () => {
    // const results = await parksApi.getParks();
    // console.log(results);
    const [parks, error] = await parksApi.getParks();
    setParks({
      isLoading: false,
      parks,
      error
    })
    console.log([parks, error])
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <h3>National Parks!</h3>

  )
};

export default ParksContainer;