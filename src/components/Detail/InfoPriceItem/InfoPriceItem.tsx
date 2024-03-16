import { Price } from '../../../definitions/model';
import './InfoPriceItem.scss';

interface InfoPriceItemProps {
  title: string | undefined;
  price: Price | undefined;
  condition: string | undefined;
  soldQuantity?: string | undefined;
}

export const InfoPriceItem = ({
  title,
  price,
  condition,
  soldQuantity,
}: InfoPriceItemProps) => {
  return (
    <div className="info-item">
      <div style={{ display: 'inline-flex' }}>
        <span className="info-item__subtitle">{condition} </span>
        {soldQuantity && (
          <span className="info-item__subtitle">
            {' '}
            - {soldQuantity} vendidos
          </span>
        )}
      </div>
      <h1 className="info-item__title">{title}</h1>
      <div className="info-item__price-wrap">
        <span className="info-item__price-symbol">$</span>
        <span>{price?.amount}</span>
      </div>
    </div>
  );
};
