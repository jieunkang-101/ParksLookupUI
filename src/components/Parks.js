import React, { useEffect, useState } from "react";
import { parksApi } from "./api";

export default () => {
 
  const [refreshing, setRefresing] = useState(false);
  const [parks, setParks] = useState({
    parks: [],
    error: null
  });
  const getData = async () => {
    const results = await parksApi.getParks();
    console.log(results);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2>National Parks</h2>
    </>
  );
};