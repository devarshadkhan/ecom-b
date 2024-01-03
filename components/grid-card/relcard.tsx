/* eslint-disable @next/next/no-img-element */
import css from 'styles/grid-card.module.scss';
import { BedWithImage } from 'network-requests/types';
import ClearpayIcon from 'icons/clearpayicon';
import Link from 'next/link';
import TrustBoxCardWidget from 'components/trustpilot/card-widget';
import Image from 'next/image';

interface ProductItemProps
  extends React.ComponentPropsWithoutRef<'div'>,
    BedWithImage {
  coversControls: boolean;
}
const RelProductCard = (props: ProductItemProps) => {
  const { name, price, image, coversControls, ...rest } = props;

  const getPercentage = (
    base: number | undefined,
    sale: number | undefined
  ) => {
    const dif = Number(base) - Number(sale);
    if (base) return (dif / base) * 100;
  };

  const percentage = getPercentage(price?.basePrice, price?.salePrice)?.toFixed(
    0
  );

  return (
    <div className={css['container']} {...rest}>
      <div className={css['image']}>
        <Image
        priority
        width={1000}
          alt="img"
        height={700}
          src={image || '/fake.png'}
          className={css['cover']}
        />
      </div>
      <div className={css['details']}>
        <div className={css['clearpaycontent']}>
          <a>or 4 payments of £22.25 with </a>

          <a>
            <ClearpayIcon size={100} color="#000" />
          </a>
        </div>
        <div className={css['relname']}>
          <h1>{name}</h1>
        </div>
        <div className={css['reltrustpilot']}>
          <TrustBoxCardWidget />
        </div>
        <p className={css['pprice']}>
          <span>{`£${price?.salePrice?.toFixed(2)}`}</span>
        </p>
      </div>
    </div>
  );
};

export default RelProductCard;
