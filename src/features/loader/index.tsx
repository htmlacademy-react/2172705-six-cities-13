import clsx from 'clsx';
import styles from './styles.module.css';

type LoaderProps = {
  isPage?: boolean;
}

export default function Loader({ isPage = false }: LoaderProps) {
  return (
    <div className={clsx(styles.wrapper, { [styles['wrapper--page']]: isPage })}>
      <div className={styles['clock-loader']}></div>
      <p className={styles.description}>Loading...</p>
    </div>
  );
}
