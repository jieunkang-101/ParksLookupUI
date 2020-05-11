import React, { useEffect, useState } from "react";
import { parksApi } from "./Api";
import Park from './Park';

export default ({ parks }) => {
 
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
      { parks && parks.map(park => {
        <park 
          key={park.parkId}
          id={park.parkId}
          parkName={park.parkName}
          desination={park.desination}
          stateCode={park.stateCode}
          address={park.address}
          description={park.description}
          weather={park.weather}
          websiteUrl={park.websiteUrl}
        />  
      })}
    </>
  );
};