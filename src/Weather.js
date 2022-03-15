import React, { useEffect, useState } from "react";
import WeatherUi from "./WeatherUi";
function Weather() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
        console.log(lat);
      });

      await fetch(
        `${"https://api.openweathermap.org/data/2.5"}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${"ef6590e803e9c44ee2b6b2b6d379aedc"}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result, "app1");
        });
    };
    fetchData();
  }, [lat, long]);

  return (
    <div>
      <WeatherUi data={data} />
    </div>
  );
}
export default Weather;
