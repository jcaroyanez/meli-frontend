import { Link } from 'react-router-dom';
import './Item.scss';
import { CircleTransport } from '../CircleTranspor/CircleTransport';
import { Item as ItemProps } from '../../../definitions/model';

export const Item = ({
  id,
  title,
  picture,
  price,
  freeShipping,
}: ItemProps) => {
  return (
    <li className="search-list-item">
      <Link to={`/items/${id}`} className="search-list-item__link">
        <div className="search-list-item__card">
          <img width={160} height={160} src={picture} alt={title} />
          <div className="search-list-item__card-content-info">
            <div className="search-list-item__card-content-price">
              <span className="price-simbol">$</span>
              <span className="price-mount">{price?.amount}</span>
              {freeShipping && <CircleTransport />}
            </div>
            <h3 className="search-list-item__title">{title}</h3>
          </div>
        </div>
      </Link>
    </li>
  );
};
