import { UserType, ReviewType } from '@/shared/types';

//! Временное решение
type HostProps = Pick<UserType, 'name' | 'avatarUrl'> & Pick<ReviewType, 'comment'>;

export function Host({
  name,
  avatarUrl,
  comment
}: HostProps) {
  return (
    <div className="offer__host">
      <h2 className="offer__host-title">Meet the host</h2>
      <div className="offer__host-user user">
        <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
          <img className="offer__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
        </div>
        <span className="offer__user-name">
          {name}
        </span>
        <span className="offer__user-status">
          Pro
        </span>
      </div>
      <div className="offer__description">
        {comment}
      </div>
    </div>
  );
}
