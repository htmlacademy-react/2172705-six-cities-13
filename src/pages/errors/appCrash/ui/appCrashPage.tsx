import styles from '../styles/styles.module.css';

export default function AppCrashPage() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>App Crash</h1>
      <p className={styles.text}>
        Our employees have already started to solve the problem. Please come back later!
      </p>
    </div>
  );
}
