import Link from 'next/link';
import { getDictionary } from '../../lib/i18n';
import { products, getCategories } from '../../lib/products';
import ProductCard from '../../components/ProductCard';

const categoryIcons = [
  'fa-solid fa-glass-water',
  'fa-solid fa-seedling',
  'fa-solid fa-shield-heart',
  'fa-solid fa-person-running',
  'fa-solid fa-jar',
  'fa-solid fa-weight-scale',
  'fa-solid fa-gift',
  'fa-solid fa-spa'
];

export default async function HomePage({ params }) {
  const { locale } = await params;
  const t = getDictionary(locale);
  const categories = getCategories(locale);
  const selection = products.slice(0, 8);

  return (
    <>
      <section className="hero">
        <div className="heroGlow heroGlowOne" />
        <div className="heroGlow heroGlowTwo" />
        <div className="container heroInner">
          <div className="heroCopy">
            <span className="eyebrow">{t.heroEyebrow}</span>
            <h1>{t.heroTitle}</h1>
            <p>{t.heroText}</p>
            <div className="heroActions">
              <Link className="btn btnPrimary" href={`/${locale}/products`}>
                <i className="fa-solid fa-bag-shopping" /> {t.shopNow}
              </Link>
              <span className="priceBadge">
                <i className="fa-solid fa-circle-check" /> {t.verifiedPrices}
              </span>
            </div>
          </div>

          <div className="heroVisual" aria-hidden="true">
            <div className="leafCard">
              <i className="fa-solid fa-leaf heroLeaf" />
              <span>ALOE</span>
              <strong>FOREVER</strong>
              <small>Plant • Science • Care</small>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <div>
              <span className="eyebrow">COLLECTIONS</span>
              <h2>{t.categories}</h2>
            </div>
          </div>

          <div className="categoryGrid">
            {categories.slice(0, 8).map((category, i) => (
              <Link
                key={category}
                className="categoryCard"
                href={`/${locale}/products?category=${encodeURIComponent(category)}`}
              >
                <span className="categoryIcon"><i className={categoryIcons[i % categoryIcons.length]} /></span>
                <strong>{category}</strong>
                <span className="categoryArrow"><i className="fa-solid fa-arrow-right" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section softSection">
        <div className="container">
          <div className="sectionHead">
            <div>
              <span className="eyebrow">FOREVER</span>
              <h2>{t.selection}</h2>
            </div>
            <Link className="textLink" href={`/${locale}/products`}>
              {t.allProducts} <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>

          <div className="productGrid">
            {selection.map((product) => (
              <ProductCard key={product.ref} product={product} locale={locale} t={t} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
