'use client';

import Link from 'next/link';
import { useCart } from './CartProvider';

export default function ProductCard({ product, locale, t }) {
  const { add } = useCart();
  const category = locale === 'ar' ? product.categoryAr : product.categoryFr;

  return (
    <article className="productCard">
      <Link href={`/${locale}/product/${product.ref}`} className="productImageWrap">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onError={(e) => { e.currentTarget.src = '/product-placeholder.svg'; }}
        />
        <span className="refChip"><i className="fa-solid fa-barcode" /> {product.ref}</span>
      </Link>

      <div className="productCardBody">
        <span className="productCategory">{category}</span>
        <Link className="productName" href={`/${locale}/product/${product.ref}`}>
          {product.name}
        </Link>

        <div className="productCardBottom">
          <div>
            <small>{t.price}</small>
            <strong>{product.price.toFixed(2)} DH</strong>
          </div>
          <button className="roundAdd" onClick={() => add(product)} title={t.add}>
            <i className="fa-solid fa-plus" />
          </button>
        </div>
      </div>
    </article>
  );
}
