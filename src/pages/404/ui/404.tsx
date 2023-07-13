import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import styles from '../styles/styles.module.css';
import { AppRoute } from '@/const';

export function Page404() {
  return (
    <div className={styles.wrapper}>
      <Helmet>
        <title>Error 404</title>
      </Helmet>

      <h1 className={styles.title}>Error 404!</h1>
      <p className={styles.description}>We can not seem to find the resource you are looking for.</p>
      <p className={styles.text}>
        Please check that the Web site address is spelled correctly.
        <br />
        Or go to our <Link className={styles.link} to={AppRoute.Root}>home page</Link>, and use the menus to navigate to a specific section.
      </p>
    </div>
  );
}
