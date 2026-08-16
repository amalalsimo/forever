import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getDictionary } from '../../../../lib/i18n';
import { getProduct, getRelatedProducts } from '../../../../lib/products';
import AddToCartButton from '../../../../components/AddToCartButton';
import ProductCard from '../../../../components/ProductCard';

export default async function ProductPage({ params }) {
  const { locale, ref } = await params;
  const t = getDictionary(locale);
  const product = getProduct(ref);
  if (!product) notFound();

  const isAr = locale === 'ar';
  const description = isAr ? product.descriptionAr : product.descriptionFr;
  const category = isAr ? product.categoryAr : product.categoryFr;
  const highlights = isAr ? (product.highlightsAr || []) : (product.highlightsFr || []);
  const related = getRelatedProducts(product, 4);
  const hasPrice = Number.isFinite(product.price);

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

            {highlights.length > 0 && (
              <div style={{display:'grid',gap:9,margin:'18px 0'}}>
                {highlights.map((item) => (
                  <div key={item} style={{display:'flex',gap:9,alignItems:'flex-start'}}>
                    <i className="fa-solid fa-circle-check" style={{color:'#74a547',marginTop:4}} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}

            {hasPrice ? (
              <>
                <div className="detailPrice">
                  <small>{t.price}</small>
                  <strong>{product.price.toFixed(2)} DH</strong>
                </div>
                <AddToCartButton product={product} label={t.add} />
              </>
            ) : (
              <div style={{background:'#fff7d6',border:'1px solid #ead17c',borderRadius:12,padding:16,margin:'18px 0'}}>
                <strong>{isAr ? 'السعر العمومي 2026 قيد التحقق' : 'Prix public 2026 à confirmer'}</strong>
                <p style={{margin:'7px 0 0',color:'#6e6258'}}>
                  {isAr
                    ? 'أضفنا المنتج إلى المتجر لأنه موجود في قائمة Forever، لكننا لا نعرض ثمن حساب الموزع كأنه سعر عمومي للعميل.'
                    : 'Le produit est affiché car il figure dans la liste Forever, mais le prix distributeur n’est pas présenté comme prix public client.'}
                </p>
              </div>
            )}

            <div style={{marginTop:18,display:'flex',gap:12,flexWrap:'wrap'}}>
              {product.catalogPage && (
                <a className="btn foreverOutline" href="/catalogue-forever-2026.pdf" target="_blank" rel="noreferrer">
                  <i className="fa-solid fa-file-pdf" /> {isAr ? `الكتالوج — صفحة ${product.catalogPage}` : `Catalogue — page ${product.catalogPage}`}
                </a>
              )}
              {product.officialUrl && (
                <a className="btn foreverOutline" href={product.officialUrl} target="_blank" rel="noreferrer">
                  <i className="fa-solid fa-arrow-up-right-from-square" /> {isAr ? 'الصفحة الرسمية' : 'Fiche officielle'}
                </a>
              )}
            </div>
          </div>
        </div>

        <div style={{marginTop:55}}>
          <div className="homeSectionTitle productsHeading">
            <div>
              <span>{isAr ? 'قد يناسبك أيضاً' : 'VOUS AIMEREZ AUSSI'}</span>
              <h2>{isAr ? 'منتجات مرتبطة' : 'Produits associés'}</h2>
            </div>
          </div>
          <div className="productGrid officialProductGrid">
            {related.map((p) => <ProductCard key={p.ref} product={p} locale={locale} t={t} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
