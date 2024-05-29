import styles from "./Weather.module.css";
import { TiWeatherCloudy } from "react-icons/ti";
const Weather = () => {
  return (
    <>
      <div className={styles.divhead}>
        <div>
          <input className={styles.search} type="search" />
        </div>
        <div className={styles.city}>London</div>
        <div className={styles.temperature}>52.5 C</div>
        <div className={styles.minmax}>Min 5.25 C | Max 5.25 C</div>
      </div>
    </>
  );
};

export default Weather;
