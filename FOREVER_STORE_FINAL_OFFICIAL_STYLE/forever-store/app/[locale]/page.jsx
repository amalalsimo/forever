import Link from 'next/link';
import { getDictionary } from '../../lib/i18n';
import { products } from '../../lib/products';
import ProductCard from '../../components/ProductCard';

const copy = {
  ar: {
    heroTitle: 'العافية أولاً',
    heroAccent: 'مع الألوفيرا',
    heroText: 'اكتشف مجموعة مختارة من منتجات Forever Living Products المرتبطة بالألوفيرا والعافية والجمال والتغذية والحيوية اليومية.',
    learn: 'تعرّف على المزيد',
    independent: 'متجر موزع مستقل لمنتجات Forever Living Products في المغرب',
    categoriesKicker: 'تسوّق حسب احتياجاتك',
    categoriesTitle: 'عالم Forever بين يديك',
    sinceKicker: 'FOREVER LIVING PRODUCTS',
    sinceTitle: 'خبرة وشغف بالألوفيرا منذ 1978',
    sinceText: 'منذ عقود، بنت Forever عالماً من المنتجات المرتبطة بالألوفيرا والجودة والعافية. نقرّب لك هذه التجربة في متجر مستقل موجّه لعملائنا في المغرب.',
    sinceCta: 'اكتشف Forever',
    productsKicker: 'LA BOUTIQUE FOREVER',
    productsTitle: 'منتجات مختارة',
    trustKicker: 'خدمة بسيطة وواضحة',
    trustTitle: 'نهتم بكل تفاصيل طلبك',
    communityKicker: 'مجتمع FOREVER',
    communityTitle: 'تجارب منشورة على موقع Forever',
    valuesKicker: 'قيم FOREVER',
    valuesTitle: 'راسخة في هويتنا',
    socialKicker: 'FOREVER EVERYDAY',
    socialTitle: 'الألوفيرا والعافية في الحياة اليومية',
  },
  fr: {
    heroTitle: 'Le bien-être d’abord',
    heroAccent: 'avec l’Aloe vera',
    heroText: 'Découvrez une sélection de produits Forever Living Products autour de l’Aloe vera, du bien-être, de la beauté, de la nutrition et de la vitalité au quotidien.',
    learn: 'En savoir plus',
    independent: 'Boutique indépendante de produits Forever Living Products au Maroc',
    categoriesKicker: 'ACHETEZ SELON VOS BESOINS',
    categoriesTitle: 'Votre univers Forever',
    sinceKicker: 'FOREVER LIVING PRODUCTS',
    sinceTitle: 'Experts passionnés de l’Aloe vera depuis 1978',
    sinceText: 'Depuis des décennies, Forever développe un univers de produits autour de l’Aloe vera, de la qualité et du bien-être. Nous rapprochons cette expérience de nos clients au Maroc dans une boutique indépendante.',
    sinceCta: 'Découvrir Forever',
    productsKicker: 'LA BOUTIQUE FOREVER',
    productsTitle: 'Sélection Produits',
    trustKicker: 'SIMPLE ET CLAIR',
    trustTitle: 'On pense à tout',
    communityKicker: 'COMMUNAUTÉ FOREVER',
    communityTitle: 'Expériences publiées sur le site Forever',
    valuesKicker: 'LES VALEURS FOREVER',
    valuesTitle: 'Ancrées pour toujours dans notre ADN',
    socialKicker: 'FOREVER EVERYDAY',
    socialTitle: 'Aloe vera et bien-être au quotidien',
  }
};

const categoryConfig = [
  { ar: 'التغذية', fr: 'Nutrition', refs: ['26', '36', '65'], icon: 'fa-solid fa-seedling' },
  { ar: 'مشروبات الألوفيرا', fr: 'Boissons Aloe vera', refs: ['815', '61', '51'], icon: 'fa-solid fa-glass-water' },
  { ar: 'العناية بالجمال', fr: 'Beauté', refs: ['651', '556', '561'], icon: 'fa-solid fa-spa' },
  { ar: 'العناية الشخصية', fr: 'Soin personnel', refs: ['40', '67', '640'], icon: 'fa-solid fa-pump-soap' },
  { ar: 'التحكم في الوزن', fr: 'Gestion du poids', refs: ['289', '463', '476'], icon: 'fa-solid fa-weight-scale' },
];

const trust = {
  ar: [
    ['fa-solid fa-truck-fast', 'توصيل داخل المغرب', 'ننسّق معك تفاصيل التوصيل بعد تأكيد الطلب.'],
    ['fa-solid fa-headset', 'دعم وخدمة عملاء', 'نحن هنا لمساعدتك قبل وبعد الطلب.'],
    ['fa-solid fa-tags', 'أسعار عمومية 2026', 'المنتجات المعروضة تعتمد الأسعار العمومية الموثقة لدينا.'],
    ['fa-solid fa-hand-holding-dollar', 'الدفع عند الاستلام', 'أكّد طلبك وادفع عند التوصل.'],
  ],
  fr: [
    ['fa-solid fa-truck-fast', 'Livraison au Maroc', 'Nous confirmons avec vous les détails de livraison.'],
    ['fa-solid fa-headset', 'Service client', 'Une aide simple avant et après la commande.'],
    ['fa-solid fa-tags', 'Prix publics 2026', 'Les produits affichés utilisent nos prix publics vérifiés.'],
    ['fa-solid fa-hand-holding-dollar', 'Paiement à la livraison', 'Confirmez votre commande et payez à la réception.'],
  ]
};

const values = {
  ar: [
    ['fa-solid fa-heart-pulse', 'العافية أولاً', 'الألوفيرا في قلب عالم Forever.'],
    ['fa-solid fa-leaf', 'اختيارات ملتزمة', 'الجودة والمشاركة والقرب من القيم الأساسية.'],
    ['fa-solid fa-earth-africa', 'حضور دولي', 'Forever حاضرة في أكثر من 160 بلداً.'],
    ['fa-solid fa-handshake', 'المواكبة', 'موزعون وشبكة لدعم تجربة العملاء.'],
  ],
  fr: [
    ['fa-solid fa-heart-pulse', 'Le bien-être d’abord', 'L’Aloe vera au cœur de l’univers Forever.'],
    ['fa-solid fa-leaf', 'Des choix engagés', 'Qualité, partage et proximité comme maîtres-mots.'],
    ['fa-solid fa-earth-africa', 'Une présence internationale', 'Forever est présente dans plus de 160 pays.'],
    ['fa-solid fa-handshake', 'Forever vous accompagne', 'Un réseau de distributeurs pour accompagner les clients.'],
  ]
};

const community = {
  ar: [
    ['Julien C.', 'تجربة إيجابية جداً مع منتجات Forever وأصبحت جزءاً من روتينه.'],
    ['Lisel B.', 'تشارك تعلقها بمنتجات Forever وتشكر العلامة على تجربتها.'],
    ['Anne-Marie A.', 'تذكر أنها تستخدم مشروب Forever منذ سنوات طويلة ضمن روتينها اليومي.'],
  ],
  fr: [
    ['Julien C.', 'Une expérience très positive avec les produits Forever, devenus partie de son quotidien.'],
    ['Lisel B.', 'Elle partage son attachement à Forever et remercie la marque pour son expérience.'],
    ['Anne-Marie A.', 'Elle explique consommer une boisson Forever depuis de nombreuses années.'],
  ]
};

const heroRefs = ['68', '815', '51', '376', '26', '67', '40'];
const selectionRefs = ['26', '36', '65', '68', '51', '40'];

function byRef(ref) {
  return products.find((p) => p.ref === ref);
}

export default async function HomePage({ params }) {
  const { locale } = await params;
  const t = getDictionary(locale);
  const c = copy[locale] || copy.fr;
  const heroProducts = heroRefs.map(byRef).filter(Boolean);
  const selection = selectionRefs.map(byRef).filter(Boolean);
  const cats = categoryConfig.map((item) => ({
    ...item,
    name: locale === 'ar' ? item.ar : item.fr,
    products: item.refs.map(byRef).filter(Boolean),
  }));

  return (
    <>
      <section className="officialHeroV2">
        <div className="heroStage">
          <div className="heroProductScene" aria-label="Forever Living Products">
            <div className="heroNatural heroNaturalA" />
            <div className="heroNatural heroNaturalB" />
            {heroProducts.map((product, index) => (
              <div className={`heroPack heroPack${index + 1}`} key={product.ref}>
                <img src={product.image} alt={product.name} />
              </div>
            ))}
            <span className="heroAloeLeaf heroAloeLeaf1" />
            <span className="heroAloeLeaf heroAloeLeaf2" />
          </div>

          <div className="heroMessage">
            <span className="eyebrow">FOREVER LIVING PRODUCTS</span>
            <h1>{c.heroTitle}<span>{c.heroAccent}</span></h1>
            <p>{c.heroText}</p>
            <div className="heroCtas">
              <Link className="btn foreverYellow" href={`/${locale}/products`}>
                <i className="fa-solid fa-bag-shopping" /> {t.shopNow}
              </Link>
              <a className="btn foreverOutline" href="#forever-story">{c.learn}</a>
            </div>
            <div className="heroStats">
              <div><strong>1978</strong><span>{locale === 'ar' ? 'بداية Forever' : 'Depuis'}</span></div>
              <div><strong>+160</strong><span>{locale === 'ar' ? 'بلداً حول العالم' : 'pays dans le monde'}</span></div>
              <div><strong>{locale === 'ar' ? 'المغرب' : 'MAROC'}</strong><span>{locale === 'ar' ? 'متجر مستقل' : 'Boutique indépendante'}</span></div>
            </div>
          </div>
        </div>
        <div className="independentStrip"><i className="fa-solid fa-location-dot" /> {c.independent}</div>
      </section>

      <section className="categoryShowcase sectionTight">
        <div className="container">
          <div className="homeSectionTitle centeredHead">
            <span>{c.categoriesKicker}</span>
            <h2>{c.categoriesTitle}</h2>
          </div>
          <div className="imageCategoryGrid">
            {cats.map((cat) => (
              <Link key={cat.name} href={`/${locale}/products?category=${encodeURIComponent(cat.name)}`} className="imageCategoryCard">
                <div className="categoryPicture">
                  {cat.products.map((p, i) => <img key={p.ref} className={`categoryPack cpack${i + 1}`} src={p.image} alt={p.name} />)}
                </div>
                <div className="categoryCopy">
                  <span className="categoryRoundIcon"><i className={cat.icon} /></span>
                  <div><strong>{cat.name}</strong><small>{locale === 'ar' ? 'اكتشف المنتجات' : 'Découvrir les produits'}</small></div>
                  <i className="fa-solid fa-arrow-left categoryGo" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="forever-story" className="foreverStory">
        <div className="container foreverStoryGrid">
          <div className="storyVisual">
            <div className="storyAloePhoto">
              <span className="storyAloeBlade blade1" />
              <span className="storyAloeBlade blade2" />
              <span className="storyAloeBlade blade3" />
              <span className="storySun" />
            </div>
            <div className="sinceBadge"><small>FOREVER</small><strong>1978</strong><span>ALOE VERA</span></div>
          </div>
          <div className="storyCopy">
            <span className="eyebrow lightEyebrow">{c.sinceKicker}</span>
            <h2>{c.sinceTitle}</h2>
            <p>{c.sinceText}</p>
            <div className="storySignature">The Aloe Vera Company</div>
            <Link className="btn foreverWhite" href={`/${locale}/products`}>{c.sinceCta} <i className="fa-solid fa-arrow-left" /></Link>
          </div>
          <div className="storyPlant" aria-hidden="true">
            <span className="plantLeaf pl1"/><span className="plantLeaf pl2"/><span className="plantLeaf pl3"/><span className="plantLeaf pl4"/><span className="plantLeaf pl5"/>
          </div>
        </div>
      </section>

      <section className="section productsFeature">
        <div className="container">
          <div className="homeSectionTitle productsHeading">
            <div><span>{c.productsKicker}</span><h2>{c.productsTitle}</h2></div>
            <Link href={`/${locale}/products`} className="seeAll">{t.allProducts} <i className="fa-solid fa-arrow-left" /></Link>
          </div>
          <div className="productGrid officialProductGrid">
            {selection.map((product) => <ProductCard key={product.ref} product={product} locale={locale} t={t} />)}
          </div>
        </div>
      </section>

      <section className="trustSection">
        <div className="container">
          <div className="homeSectionTitle centeredHead compactTitle"><span>{c.trustKicker}</span><h2>{c.trustTitle}</h2></div>
          <div className="trustGrid">
            {(trust[locale] || trust.fr).map(([icon, title, text]) => (
              <article className="trustItem" key={title}><span><i className={icon} /></span><div><h3>{title}</h3><p>{text}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="communitySection">
        <div className="container">
          <div className="homeSectionTitle centeredHead whiteTitle"><span>{c.communityKicker}</span><h2>{c.communityTitle}</h2></div>
          <div className="communityGrid">
            {(community[locale] || community.fr).map(([name, text], i) => (
              <article className="communityCard" key={name}>
                <div className="communityAvatar"><i className={i === 1 ? 'fa-solid fa-user' : 'fa-solid fa-user-circle'} /></div>
                <div className="stars">★★★★★</div>
                <p>{text}</p>
                <strong>{name}</strong>
                <small>{locale === 'ar' ? 'تجربة منشورة على موقع Forever' : 'Expérience publiée sur le site Forever'}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section valuesOfficial">
        <div className="container">
          <div className="homeSectionTitle centeredHead"><span>{c.valuesKicker}</span><h2>{c.valuesTitle}</h2></div>
          <div className="valuesOfficialGrid">
            {(values[locale] || values.fr).map(([icon, title, text]) => (
              <article key={title}><span className="valuesCircle"><i className={icon} /></span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="socialLifestyle">
        <div className="container">
          <div className="homeSectionTitle centeredHead"><span>{c.socialKicker}</span><h2>{c.socialTitle}</h2></div>
          <div className="lifestyleGrid">
            <div className="lifestyleCard lifestyleA"><i className="fa-solid fa-lemon"/><strong>{locale === 'ar' ? 'روتين يومي' : 'Routine quotidienne'}</strong></div>
            <div className="lifestyleCard lifestyleB"><i className="fa-solid fa-person-walking"/><strong>{locale === 'ar' ? 'حياة نشطة' : 'Vie active'}</strong></div>
            <div className="lifestyleCard lifestyleC"><i className="fa-solid fa-bowl-food"/><strong>{locale === 'ar' ? 'توازن وعافية' : 'Équilibre & bien-être'}</strong></div>
            <div className="lifestyleCard lifestyleD"><i className="fa-solid fa-spa"/><strong>{locale === 'ar' ? 'عناية طبيعية' : 'Soin naturel'}</strong></div>
          </div>
          <Link className="btn foreverYellow socialCta" href={`/${locale}/products`}>{t.shopNow}</Link>
        </div>
      </section>
    </>
  );
}
