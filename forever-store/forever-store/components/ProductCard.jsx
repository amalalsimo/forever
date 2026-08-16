'use client';

import Link from 'next/link';
import { useCart } from './CartProvider';

export default function ProductCard({ product, locale, t }) {
  const { add } = useCart();
  const isAr = locale === 'ar';
  const category = isAr ? product.categoryAr : product.categoryFr;
  const hasPrice = Number.isFinite(product.price);

  return (
    <article className="productCard officialProductCard">
      <Link href={`/${locale}/product/${product.ref}`} className="productImageWrap officialProductImage">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onError={(e) => { e.currentTarget.src = '/product-placeholder.svg'; }}
        />
      </Link>

      <div className="productCardBody officialProductBody">
        <span className="productRef">Ref. {product.ref}</span>
        <span className="productCategory">{category}</span>
        <Link className="productName" href={`/${locale}/product/${product.ref}`}>{product.name}</Link>

        {hasPrice ? (
          <>
            <div className="productCardPrice officialPrice">
              <small>{t.price}</small>
              <strong>{product.price.toFixed(2)} DH</strong>
            </div>
            <button className="productAddButton officialAdd" onClick={() => add(product)}>
              <i className="fa-solid fa-bag-shopping" /> {t.add}
            </button>
          </>
        ) : (
          <>
            <div className="productCardPrice officialPrice">
              <small>{isAr ? 'السعر العمومي 2026' : 'Prix public 2026'}</small>
              <strong style={{fontSize:'14px'}}>{isAr ? 'قيد التحقق' : 'À confirmer'}</strong>
            </div>
            <Link className="productAddButton officialAdd" href={`/${locale}/product/${product.ref}`}>
              <i className="fa-solid fa-circle-info" /> {isAr ? 'التفاصيل' : 'Détails'}
            </Link>
          </>
        )}
      </div>
    </article>
  );
}
