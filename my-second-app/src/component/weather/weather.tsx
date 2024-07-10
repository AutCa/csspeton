import { useState } from "react";
import "./weather.css";
import axios from "axios";

export interface IMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}
export interface IDisplayData {
  name: string;
  main: IMain;
}
export default function WeatherApp() {
  const [input, setInput] = useState<string>("");
  const [data, setData] = useState<IDisplayData | null>(null);
  const searchCity = async () => {
    try {
      const data = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=939331614a46dc1ed6d75ac3f10ff99c`
      );
      console.log(data.data);
      const playLoad: IDisplayData = {
        name: data.data.name,
        main: {
          temp: data.data.main.temp,
          feels_like: data.data.main.feels_like,
          temp_min: data.data.main.temp_min,
          temp_max: data.data.main.temp_max,
          pressure: data.data.main.pressure,
          humidity: data.data.main.humidity,
          sea_level: data.data.main.sea_level,
          grnd_level: data.data.main.grnd_level,
        },
      };
      console.log(playLoad);
      setData(playLoad);
    } catch (error) {
      console.log(error);
    }
  };
  //   console.log(input);

  return (
    <>
      <div className="weathersize">
        <div className="box">
          <div className="tapcenter">
              <label className="label" htmlFor="city">Search City name:</label>
            </div>
          <div className="topbar">
            
            <input className="search"
              type="text"
              onChange={(event) => {
                setInput(event.target.value);
              }}
              id="city"
            />
            <button className="button-21"
              onClick={() => {
                searchCity();
              }}
            >
              Search
            </button>
          </div>
          {data !== null ? (
            <>  
              <div className="place">{data.name} </div>
              <div className="detail">
                <h4>Data:</h4>
                <div className="data">
                    <div>temp: {data.main.temp}</div>
                    <div>feels_like: {data.main.feels_like}</div>
                    <div>temp_min: {data.main.temp_min}</div>
                    <div>temp_max: {data.main.temp_max}</div>
                    <div>pressure: {data.main.pressure}</div>
                    <div>humidity: {data.main.humidity}</div>
                    <div>sea_level: {data.main.sea_level}</div>
                    <div>grnd_level: {data.main.grnd_level}</div>
                  </div>
              </div>
            </>
          ) : (
            <>
              <h1 className="error">No current data</h1>
            </>
          )}
        </div>
      </div>
    </>
  );
}
