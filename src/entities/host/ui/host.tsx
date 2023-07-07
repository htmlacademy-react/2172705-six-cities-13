type HostProps = {
  userAvatarSrc: string;
  userName: string;
  text: string;
}

export function Host({
  userAvatarSrc,
  userName,
  text
}: HostProps) {
  return (
    <div className="offer__host">
      <h2 className="offer__host-title">Meet the host</h2>
      <div className="offer__host-user user">
        <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
          <img className="offer__avatar user__avatar" src={userAvatarSrc} width="74" height="74" alt="Host avatar" />
        </div>
        <span className="offer__user-name">
          {userName}
        </span>
        <span className="offer__user-status">
          Pro
        </span>
      </div>
      <div className="offer__description">
        {text}
      </div>
    </div>
  );
}
