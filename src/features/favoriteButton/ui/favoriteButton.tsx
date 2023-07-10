import clsx from 'clsx';

import { getIconSize } from '../lib';

type FavoriteButtonProps = {
  sectionName: string;
  isFavorite: boolean;
}

export function FavoriteButton({ sectionName, isFavorite }: FavoriteButtonProps) {
  const iconSize = getIconSize(sectionName);

  return (
    <button
      className={clsx(
        `${sectionName}__bookmark-button button`,
        { [`${sectionName}__bookmark-button--active`]: isFavorite }
      )}
      type="button"
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
