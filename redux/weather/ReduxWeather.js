import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

function ReduxWeather() {
  const dispatch = useDispatch();
  const [forecast, setforCast] = useState();

  const data = useSelector((state) => state);
  useEffect(() => {
    axios
      .get(
        `${"https://api.openweathermap.org/data/2.5"}/weather/?lat=${16.9639936}&lon=${82.2345728}&units=metric&APPID=${"ef6590e803e9c44ee2b6b2b6d379aedc"}`
      )
      .then((res) => {
        dispatch({ type: "GET_USERS", payload: res.data });
      });
  }, []);
  console.log(data.payload?.name, "test");
  console.log(data.payload?.main.temp, "test");

  return (
    <div>
      <section class="vh-100 section ">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-10 col-lg-8 col-xl-6">
              <div class="card bg-dark text-white cards ">
                <div class="bg-image hey">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/draw1.webp"
                    class="card-img"
                    alt="weather"
                  />
                  <div class="mask"></div>
                </div>
                <div class="card-img-overlay text-dark p-5">
                  <h4 class="mb-0">{data.payload?.name}</h4>
                  <p class="display-2 my-3">{data.payload?.main.temp} C</p>
                  <p class="mb-2">
                    Feels Like: <strong>{data.payload?.main.feels_like}</strong>
                  </p>
                  <p class="mb-2">
                    Humidity: <strong>{data.payload?.main.humidity}</strong>
                  </p>
                  <p class="mb-2">
                    Min temp: <strong>{data.payload?.main.temp_min}</strong>
                  </p>
                  <p class="mb-2">
                    Max temp: <strong>{data.payload?.main.temp_max}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default ReduxWeather;
