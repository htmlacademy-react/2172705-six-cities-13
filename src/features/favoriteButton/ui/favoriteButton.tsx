import clsx from 'clsx';
import {
  ChangeFavoriteStatusAction,
  changeFavoriteStatus,
  getChangeFavoriteStatusObj
} from '@/entities/offer';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { getIconSize } from '../lib/getIconSize';

type FavoriteButtonProps = {
  sectionName: string;
  offerId: string;
  isFavorite: boolean;
}

export function FavoriteButton({ sectionName, offerId, isFavorite }: FavoriteButtonProps) {
  const dispatch = useAppDispatch();
  const iconSize = getIconSize(sectionName);

  const changeOfferFavoriteStatus = useAppSelector(getChangeFavoriteStatusObj);

  const handleFavoriteButtonClick = () => {
    dispatch(changeFavoriteStatus({ offerId, status: isFavorite ? ChangeFavoriteStatusAction.Delete : ChangeFavoriteStatusAction.Add }));
  };

  return (
    <button
      className={clsx(
        `${sectionName}__bookmark-button button`,
        { [`${sectionName}__bookmark-button--active`]: isFavorite }
      )}
      type="button"
      onClick={handleFavoriteButtonClick}
      disabled={changeOfferFavoriteStatus.isPending}
    >
      <svg
        className={`${sectionName}__bookmark-icon`}
        width={iconSize.width}
        height={iconSize.height}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">In bookmarks</span>
    </button>
  );
}
