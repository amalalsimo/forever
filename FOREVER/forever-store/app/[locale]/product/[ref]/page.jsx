import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getDictionary } from '../../../../lib/i18n';
import { getProduct } from '../../../../lib/products';
import AddToCartButton from '../../../../components/AddToCartButton';

export default async function ProductPage({ params }) {
  const { locale, ref } = await params;
  const t = getDictionary(locale);
  const product = getProduct(ref);
  if (!product) notFound();

  const description = locale === 'ar' ? product.descriptionAr : product.descriptionFr;
  const category = locale === 'ar' ? product.categoryAr : product.categoryFr;

  return (
    <section className="section productDetailSection">
      <div className="container">
        <Link className="backLink" href={`/${locale}/products`}>
          <i className="fa-solid fa-arrow-left" /> {t.products}
        </Link>

        <div className="productDetail">
          <div className="detailImagePanel">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="detailCopy">
            <span className="productCategory">{category}</span>
            <h1>{product.name}</h1>
            <p className="refText"><i className="fa-solid fa-barcode" /> {t.productRef}: {product.ref}</p>
            <p className="detailDescription">{description}</p>

            <div className="detailPrice">
              <small>{t.price}</small>
              <strong>{product.price.toFixed(2)} DH</strong>
            </div>

            <AddToCartButton product={product} label={t.add} />
          </div>
        </div>
      </div>
    </section>
  );
}
