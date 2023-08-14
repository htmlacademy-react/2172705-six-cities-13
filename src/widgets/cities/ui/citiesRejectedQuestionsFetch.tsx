import clsx from 'clsx';
import { fetchPreviewOffers } from '@/entities/offer';
import { useAppDispatch } from '@/shared/lib';
import { Button } from '@/shared/ui';
import styles from './styles.module.css';

export function CitiesRejectedQuestionsFetch() {
  const dispatch = useAppDispatch();

  const handleRepeatButtonClick = () => {
    dispatch(fetchPreviewOffers());
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Rental offers request error!</h1>
      <p className={styles.text}>
        Сlick on&nbsp;the button to&nbsp;re-request a&nbsp;list of&nbsp;rental offers.
      </p>
      <p className={styles.text}>
        If&nbsp;the repeated request did not help, then visit&nbsp;us later.
      </p>
      <Button
        className={clsx(styles.button, styles.repeat)}
        type="button"
        onClick={handleRepeatButtonClick}
      >
        Repeat
      </Button>
    </div>
  );
}

