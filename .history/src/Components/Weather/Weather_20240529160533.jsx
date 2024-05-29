import styles from "./Weather.module.css";
const Weather = () => {
  return (
    <>
      <div className={styles.divhead}>
        <div>
          <input type="search" />
        </div>
      </div>
    </>
  );
};

export default Weather;
