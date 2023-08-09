import clsx from 'clsx';
import styles from './styles.module.css';

type LoaderProps = {
  fullPage?: boolean;
}

export function ClockLoader({ fullPage = false }: LoaderProps) {
  return (
    <div className={clsx(styles.wrapper, { [styles['wrapper--page']]: fullPage })}>
      <div className={styles['clock-loader']}></div>
      <p className={styles.description}>Loading...</p>
    </div>
  );
}
