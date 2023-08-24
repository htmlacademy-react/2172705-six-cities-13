import clsx from 'clsx';
import {
  ChangeFavoriteStatusAction,
  changeFavoriteStatus,
  getChangeFavoriteStatusObj
} from '@/entities/offer';
import { getCurrentUserStatusObj, getLoginStatusObj } from '@/entities/user';
import {
  redirectToRoute,
  useAppDispatch,
  useAppSelector
} from '@/shared/lib';
import { getIconSize } from '../lib/get-icon-size';
import { AppRoute } from '@/const';

type FavoriteButtonProps = {
  sectionName: string;
  offerId: string;
  isFavorite: boolean;
}

export function FavoriteButton({ sectionName, offerId, isFavorite }: FavoriteButtonProps) {
  const dispatch = useAppDispatch();
  const iconSize = getIconSize(sectionName);

  const changeOfferFavoriteStatus = useAppSelector(getChangeFavoriteStatusObj);
  const loginStatus = useAppSelector(getLoginStatusObj);
  const currentUserStatus = useAppSelector(getCurrentUserStatusObj);

  const handleFavoriteButtonClick = () => {
    if (loginStatus.isFulfilled || currentUserStatus.isFulfilled) {
      dispatch(changeFavoriteStatus({ offerId, status: isFavorite ? ChangeFavoriteStatusAction.Delete : ChangeFavoriteStatusAction.Add }));
      return;
    }

    dispatch(redirectToRoute(AppRoute.Login));
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
