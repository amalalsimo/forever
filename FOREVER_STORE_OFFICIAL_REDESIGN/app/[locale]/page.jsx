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

const content = {
  fr: {
    heroTitle: 'Le bien-être d’abord',
    heroAccent: 'avec l’Aloe vera',
    heroText: 'Découvrez une sélection de produits Forever Living Products autour de l’Aloe vera, du bien-être, de la beauté, de la nutrition et de la vitalité au quotidien.',
    since: "Experts passionnés de l’Aloe vera depuis 1978",
    sinceText: 'Forever développe depuis des décennies un univers de produits centré sur l’Aloe vera, la qualité et le bien-être. Cette boutique indépendante vous propose une sélection disponible au Maroc.',
    valuesEyebrow: 'LES VALEURS FOREVER',
    valuesTitle: 'Ancrées pour toujours dans notre ADN',
    collectionsEyebrow: 'NOS UNIVERS',
    selectionEyebrow: 'LA SÉLECTION FOREVER',
    facts: [
      ['1978', 'Passion Aloe vera'],
      ['160+', 'pays dans le monde'],
      ['MAROC', 'Boutique indépendante']
    ],
    values: [
      ['fa-solid fa-heart-pulse', 'Le bien-être d’abord', 'L’Aloe vera au cœur de l’univers Forever.'],
      ['fa-solid fa-leaf', 'Des choix engagés', 'Qualité, partage et proximité comme maîtres-mots.'],
      ['fa-solid fa-earth-africa', 'Une présence internationale', 'Forever est présent dans plus de 160 pays.'],
      ['fa-solid fa-handshake-angle', 'Forever vous accompagne', 'Des conseils et un accompagnement autour des produits.']
    ]
  },
  ar: {
    heroTitle: 'العافية أولاً',
    heroAccent: 'مع الألوفيرا',
    heroText: 'اكتشف مجموعة مختارة من منتجات Forever Living Products المرتبطة بالألوفيرا والعافية والجمال والتغذية والحيوية اليومية.',
    since: 'خبرة وشغف بالألوفيرا منذ 1978',
    sinceText: 'تطوّر Forever منذ عقود عالماً من المنتجات المرتبطة بالألوفيرا والجودة والعافية. هذا متجر مستقل يقدّم لك مجموعة مختارة متوفرة في المغرب.',
    valuesEyebrow: 'قيم FOREVER',
    valuesTitle: 'قيم راسخة في هوية Forever',
    collectionsEyebrow: 'عالم المنتجات',
    selectionEyebrow: 'مختارات FOREVER',
    facts: [
      ['1978', 'شغف بالألوفيرا'],
      ['160+', 'بلداً حول العالم'],
      ['المغرب', 'متجر مستقل']
    ],
    values: [
      ['fa-solid fa-heart-pulse', 'العافية أولاً', 'الألوفيرا في قلب عالم Forever.'],
      ['fa-solid fa-leaf', 'اختيارات ملتزمة', 'الجودة والمشاركة والقرب من أهم القيم.'],
      ['fa-solid fa-earth-africa', 'حضور دولي', 'Forever موجودة في أكثر من 160 بلداً.'],
      ['fa-solid fa-handshake-angle', 'المواكبة', 'نصائح ومواكبة لاختيار المنتجات المناسبة.']
    ]
  }
};

export default async function HomePage({ params }) {
  const { locale } = await params;
  const t = getDictionary(locale);
  const c = content[locale] || content.fr;
  const categories = getCategories(locale);
  const selection = products.slice(0, 8);
  const heroProducts = products.slice(0, 3);

  return (
    <>
      <section className="hero officialHero">
        <div className="container heroInner">
          <div className="heroCopy">
            <span className="eyebrow">FOREVER LIVING PRODUCTS</span>
            <h1>{c.heroTitle} <span>{c.heroAccent}</span></h1>
            <p>{c.heroText}</p>

            <div className="heroActions">
              <Link className="btn btnPrimary" href={`/${locale}/products`}>
                <i className="fa-solid fa-bag-shopping" /> {t.shopNow}
              </Link>
              <span className="priceBadge"><i className="fa-solid fa-tag" /> {t.verifiedPrices}</span>
            </div>

            <div className="heroFacts">
              {c.facts.map(([number, label]) => (
                <div className="heroFact" key={number + label}>
                  <strong>{number}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="heroVisual" aria-hidden="true">
            <div className="heroProducts">
              {heroProducts.map((product, i) => (
                <div className={`heroProduct heroProduct${i + 1}`} key={product.ref}>
                  <img src={product.image} alt="" />
                </div>
              ))}
              <div className="heroAloeBadge">
                <i className="fa-solid fa-leaf" />
                <span>ALOE VERA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section categorySection">
        <div className="container">
          <div className="sectionHead centeredHead">
            <div>
              <span className="eyebrow">{c.collectionsEyebrow}</span>
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

      <section className="officialIntro">
        <div className="container officialIntroGrid">
          <div className="officialIntroLabel">
            <span>FOREVER</span>
            <strong>1978</strong>
            <small>ALOE VERA</small>
          </div>
          <div className="officialIntroCopy">
            <span className="eyebrow">FOREVER LIVING PRODUCTS</span>
            <h2>{c.since}</h2>
            <p>{c.sinceText}</p>
            <Link className="textLink darkLink" href={`/${locale}/products`}>
              {t.allProducts} <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section softSection">
        <div className="container">
          <div className="sectionHead">
            <div>
              <span className="eyebrow">{c.selectionEyebrow}</span>
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

      <section className="section valuesSection">
        <div className="container">
          <div className="sectionHead centeredHead valuesHeading">
            <div>
              <span className="eyebrow">{c.valuesEyebrow}</span>
              <h2>{c.valuesTitle}</h2>
            </div>
          </div>

          <div className="valuesGrid">
            {c.values.map(([icon, title, text]) => (
              <article className="valueCard" key={title}>
                <span className="valueIcon"><i className={icon} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
