import cn from 'classnames';

import { getIconSize } from '../lib';

type AddToFavoriteProps = {
  sectionName: string;
  isFavorite?: boolean;
}

export function AddToFavorite({sectionName, isFavorite}: AddToFavoriteProps) {
  const iconSize = getIconSize(sectionName);

  return (
    <button
      className={cn(
        `${sectionName}__bookmark-button button`,
        {[`${sectionName}__bookmark-button--active`]: isFavorite }
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
