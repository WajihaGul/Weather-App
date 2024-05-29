import styles from "./Weather.module.css";
import { TiWeatherCloudy } from "react-icons/ti";
import React, { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("Lahore");
  const [temperature, setTemperature] = useState("10°C");
  return (
    <>
      <div className={styles.divhead}>
        <div>
          <input className={styles.search} type="search" />
        </div>
        <div className={styles.city}>
          <TiWeatherCloudy style={{ height: "52px", marginBottom: "-7px" }} />
          {city}
        </div>
        <div className={styles.temperature}>{temperature}</div>
        <div className={styles.minmax}>Min 5.25° C | Max 5.25° C</div>
      </div>
    </>
  );
};

export default Weather;
