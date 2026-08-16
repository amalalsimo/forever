import Link from 'next/link';
import styles from './resources.module.css';

const content = {
  ar: {
    eyebrow: 'FOREVER • الجودة والمصادر',
    title: 'الكتالوج وشهادات الجودة',
    intro: 'حمّل كتالوج Forever 2026 وتعرّف على أهم الاعتمادات ومعايير الجودة المذكورة في مصادر Forever الرسمية.',
    catalogTitle: 'كتالوج Forever 2026',
    catalogText: 'الكتالوج العام المعتمد في هذا المتجر لعرض المنتجات والمعلومات والأسعار العمومية لسنة 2026.',
    download: 'تحميل الكتالوج PDF',
    open: 'فتح الكتالوج',
    certificatesTitle: 'شهادات واعتمادات الجودة',
    certificatesIntro: 'هذه الاعتمادات تخص Forever أو عملياتها أو منتجات محددة كما ورد في المصادر الرسمية. لا يعني عرضها أن كل اعتماد ينطبق على كل منتج.',
    officialSource: 'المصدر الرسمي',
    back: 'العودة إلى المنتجات',
    items: [
      {
        mark: 'IASC',
        title: 'علامة الجودة IASC',
        text: 'تذكر Forever أن منتجات الألوفيرا لديها تحمل علامة International Aloe Science Council المعترف بها لجودة الألوفيرا.'
      },
      {
        mark: 'ISO',
        title: 'معايير الجودة ISO',
        text: 'تذكر Forever أن مراقبة الجودة لديها تعتمد معايير دولية، ومنها ISO 17025. كما يذكر موقع Forever الرسمي ISO 9001:2015 وISO 45001.'
      },
      {
        mark: 'DERMATEST',
        title: 'Dermatest — Excellent',
        text: 'تذكر Forever أن مستحضرات التجميل لديها تم اختبارها بتقييم «Excellent» من Dermatest.'
      },
      {
        mark: 'HALAL • KOSHER',
        title: 'الحلال والكوشير',
        text: 'يذكر كتالوج Forever 2026 أن معظم المنتجات مضمونة كوشير وحلال.'
      },
      {
        mark: 'USDA ORGANIC',
        title: 'اعتماد عضوي USDA',
        text: 'يذكر كتالوج 2026 أن نباتات الألوفيرا المزروعة في جمهورية الدومينيكان والجل المستخرج منها أصبحت تحمل اعتماداً عضوياً USDA.'
      },
      {
        mark: 'EU ORGANIC',
        title: 'الاعتماد العضوي للاتحاد الأوروبي',
        text: 'يذكر كتالوج 2026 أيضاً حصول الألوفيرا المزروعة في جمهورية الدومينيكان والجل المستخرج منها على اعتماد عضوي للاتحاد الأوروبي.'
      }
    ]
  },
  fr: {
    eyebrow: 'FOREVER • QUALITÉ & SOURCES',
    title: 'Catalogue et certifications qualité',
    intro: 'Téléchargez le catalogue Forever 2026 et découvrez les principales certifications et normes de qualité mentionnées dans les sources officielles Forever.',
    catalogTitle: 'Catalogue Forever 2026',
    catalogText: 'Le catalogue général utilisé dans cette boutique pour les produits, les informations et les prix publics 2026.',
    download: 'Télécharger le catalogue PDF',
    open: 'Ouvrir le catalogue',
    certificatesTitle: 'Certifications et engagements qualité',
    certificatesIntro: 'Ces éléments concernent Forever, ses procédés ou certains produits tels qu’ils sont présentés dans les sources officielles. Ils ne signifient pas que chaque certification s’applique à chaque produit.',
    officialSource: 'Source officielle',
    back: 'Retour aux produits',
    items: [
      {
        mark: 'IASC',
        title: 'Label qualité IASC',
        text: 'Forever indique que ses produits à base d’Aloe vera portent le label International Aloe Science Council, reconnu pour la qualité de l’Aloe.'
      },
      {
        mark: 'ISO',
        title: 'Normes qualité ISO',
        text: 'Forever mentionne des contrôles qualité selon des normes internationales, dont ISO 17025. Le site officiel cite également ISO 9001:2015 et ISO 45001.'
      },
      {
        mark: 'DERMATEST',
        title: 'Dermatest — Excellent',
        text: 'Forever indique que ses cosmétiques sont testés « excellent » par Dermatest.'
      },
      {
        mark: 'HALAL • KOSHER',
        title: 'Halal et casher',
        text: 'Le catalogue Forever 2026 indique que la majorité des produits sont garantis casher et halal.'
      },
      {
        mark: 'USDA ORGANIC',
        title: 'Certification biologique USDA',
        text: 'Le catalogue 2026 indique que l’Aloe vera cultivé en République dominicaine et le gel qui en est extrait disposent désormais d’une certification biologique USDA.'
      },
      {
        mark: 'EU ORGANIC',
        title: 'Certification biologique UE',
        text: 'Le catalogue 2026 mentionne également une certification biologique de l’Union européenne pour cet Aloe vera et le gel qui en est extrait.'
      }
    ]
  }
};

export default async function ResourcesPage({ params }) {
  const { locale } = await params;
  const isAr = locale === 'ar';
  const c = content[isAr ? 'ar' : 'fr'];

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.inner}>
          <span className={styles.eyebrow}>{c.eyebrow}</span>
          <h1>{c.title}</h1>
          <p>{c.intro}</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.inner}>
          <article className={styles.catalogCard}>
            <div className={styles.catalogIcon}>
              <i className="fa-solid fa-file-pdf" />
            </div>
            <div className={styles.catalogCopy}>
              <span>2026</span>
              <h2>{c.catalogTitle}</h2>
              <p>{c.catalogText}</p>
              <div className={styles.actions}>
                <a className={styles.primary} href="/catalogue-forever-2026.pdf" download>
                  <i className="fa-solid fa-download" /> {c.download}
                </a>
                <a className={styles.secondary} href="/catalogue-forever-2026.pdf" target="_blank" rel="noreferrer">
                  <i className="fa-solid fa-arrow-up-right-from-square" /> {c.open}
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className={`${styles.section} ${styles.qualitySection}`}>
        <div className={styles.inner}>
          <div className={styles.sectionHead}>
            <span>FOREVER QUALITY</span>
            <h2>{c.certificatesTitle}</h2>
            <p>{c.certificatesIntro}</p>
          </div>

          <div className={styles.grid}>
            {c.items.map((item) => (
              <article className={styles.certCard} key={item.title}>
                <div className={styles.mark}>{item.mark}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className={styles.sources}>
            <a href="https://www.foreverliving.fr/FR/fr" target="_blank" rel="noreferrer">
              <i className="fa-solid fa-shield-halved" /> {c.officialSource}: Forever Living Products
            </a>
            <Link href={`/${locale}/products`}>
              <i className="fa-solid fa-arrow-left" /> {c.back}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
