import styles from "../../styles/skills-carousel.module.css";

const SkillsCarousel = () => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.item} ${styles.item1}`}></div>
      <div className={`${styles.item} ${styles.item2}`}></div>
      <div className={`${styles.item} ${styles.item3}`}></div>
      <div className={`${styles.item} ${styles.item4}`}></div>
      <div className={`${styles.item} ${styles.item5}`}></div>
      <div className={`${styles.item} ${styles.item6}`}></div>
      <div className={`${styles.item} ${styles.item7}`}></div>
      <div className={`${styles.item} ${styles.item8}`}></div>
    </div>
  );
};

export default SkillsCarousel;
