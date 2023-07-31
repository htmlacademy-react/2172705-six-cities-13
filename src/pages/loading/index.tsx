import styles from './styles.module.css';

export default function LoadingPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles['clock-loader']}></div>
      <p className={styles.description}>Loading...</p>
    </div>
  );
}
