import { FavoriteButton } from '@/features/favoriteButton';
import { AddReviewForm } from '@/features/addReviewForm';
import { Map } from '@/features/map';
import { Review } from '@/entities/review';
import { Host } from '@/entities/host';
import { Badge, StarsRatingInfo } from '@/shared/ui';

export function Offer() {
  return (
    <section className="offer">
      <div className="offer__gallery-container container">
        <div className="offer__gallery">
          {Array.from({ length: 6 }, (_, id) => id * 2).map((el) => (
            <div key={el} className="offer__image-wrapper">
              <img className="offer__image" src="img/apartment-01.jpg" alt="Photo studio" />
            </div>
          ))}
        </div>
      </div>

      <div className="offer__container container">
        <div className="offer__wrapper">
          <Badge className="offer__mark" text="Premium" />

          <div className="offer__name-wrapper">
            <h1 className="offer__name">
              Beautiful &amp; luxurious studio at great location
            </h1>
            <FavoriteButton sectionName="offer" isFavorite={false} />
          </div>

          <StarsRatingInfo
            sectionName="offer"
            starsCount={4}
            numberRating={4.8}
          />

          <ul className="offer__features">
            <li className="offer__feature offer__feature--entire">
              Apartment
            </li>
            <li className="offer__feature offer__feature--bedrooms">
              3 Bedrooms
            </li>
            <li className="offer__feature offer__feature--adults">
              Max 4 adults
            </li>
          </ul>

          <div className="offer__price">
            <b className="offer__price-value">&euro;120</b>
            <span className="offer__price-text">&nbsp;night</span>
          </div>

          <div className="offer__inside">
            <h2 className="offer__inside-title">What&apos;s inside</h2>
            <ul className="offer__inside-list">
              {Array.from({ length: 8 }, (_, id) => id * 2).map((el) => (
                <li key={el} className="offer__inside-item">
                  Wi-Fi
                </li>
              ))}
            </ul>
          </div>

          <Host
            avatarUrl="img/avatar-angelina.jpg"
            name="Angelina"
            comment={`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.
                The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera,
                but where the bustle of the city comes to rest in this alley flowery and colorful.`}
          />

          <section className="offer__reviews reviews">
            <h2 className="reviews__title">
              Reviews &middot;
              <span className="reviews__amount">1</span>
            </h2>
            <ul className="reviews__list">
              <Review
                date="2019-04-24"
                name="Max"
                avatarUrl="img/avatar-max.jpg"
                comment="A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century."
                rating={4}
              />
            </ul>
            <AddReviewForm />
          </section>
        </div>
      </div>

      <Map sectionName="offer" />
    </section>
  );
}
