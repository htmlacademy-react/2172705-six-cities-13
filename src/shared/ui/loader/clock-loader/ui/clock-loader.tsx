import clsx from 'clsx';
import styles from './styles.module.css';

type LoaderProps = {
  text?: string;
  fullPage?: boolean;
}

export function ClockLoader({ text = 'Loading data...', fullPage = false }: LoaderProps) {
  return (
    <div className={clsx(styles.wrapper, { [styles['wrapper--page']]: fullPage })}>
      <div className={styles['clock-loader']}></div>
      <p className={styles.description}>{text}</p>
    </div>
  );
}
