import styles from '../styles/styles.module.css';

export default function FallbackPage() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>App Crash</h1>
      <p className={styles.text}>
        Something&apos;s wrong. Please come back later!
      </p>
    </div>
  );
}
