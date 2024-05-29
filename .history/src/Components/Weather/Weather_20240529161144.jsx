import { TiWeatherCloudy } from "react-icons/ti";
import styles from "./Weather.module.css";
const Weather = () => {
  return (
    <>
      <div className={styles.divhead}>
        <div>
          <input className={styles.search} type="search" />
        </div>
        <div>
          <TiWeatherCloudy />
        </div>
      </div>
    </>
  );
};

export default Weather;
