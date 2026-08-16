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
      </Link>

      <div className="productCardBody">
        <span className="productRef">Ref. {product.ref}</span>
        <span className="productCategory">{category}</span>
        <Link className="productName" href={`/${locale}/product/${product.ref}`}>
          {product.name}
        </Link>

        <div className="productCardPrice">
          <small>{t.price}</small>
          <strong>{product.price.toFixed(2)} DH</strong>
        </div>

        <button className="productAddButton" onClick={() => add(product)}>
          <i className="fa-solid fa-bag-shopping" /> {t.add}
        </button>
      </div>
    </article>
  );
}
