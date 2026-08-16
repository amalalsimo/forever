import Link from 'next/link';

export default function Footer({ t, locale }) {
  const isAr = locale === 'ar';
  return (
    <footer className="officialFooter">
      <div className="footerGreenBar">
        <div className="container footerGreenInner">
          <strong>Forever</strong>
          <span>{isAr ? 'منتجات مرتبطة بالألوفيرا والعافية والجمال والتغذية' : 'Aloe vera, bien-être, beauté et nutrition'}</span>
          <Link href={`/${locale}/products`}>{isAr ? 'اكتشف المنتجات' : 'Découvrir les produits'}</Link>
        </div>
      </div>

      <div className="container footerColumns">
        <div className="footerIdentity">
          <img src="https://www.foreverliving.fr/images/LogoForever.svg" alt="Forever Living Products" />
          <span className="logoFallback footerFallback">FOREVER<sup>®</sup></span>
          <p>{t.footerText}</p>
          <div className="footerSocials"><i className="fa-brands fa-facebook-f"/><i className="fa-brands fa-instagram"/><i className="fa-brands fa-youtube"/><i className="fa-brands fa-tiktok"/></div>
        </div>

        <div className="footerLinksCol"><h3>{isAr ? 'الشركة' : 'CORPORATE'}</h3><Link href={`/${locale}#forever-story`}>{isAr ? 'من نحن' : 'Qui sommes-nous'}</Link><Link href={`/${locale}/resources`}>{isAr ? 'الجودة والشهادات' : 'Qualité & certifications'}</Link><a href="#">{isAr ? 'التواصل' : 'Contact'}</a></div>
        <div className="footerLinksCol"><h3>{isAr ? 'منتجاتنا' : 'NOS PRODUITS'}</h3><Link href={`/${locale}/products`}>{isAr ? 'جميع المنتجات' : 'Tous les produits'}</Link><Link href={`/${locale}/products`}>{isAr ? 'التغذية' : 'Nutrition'}</Link><Link href={`/${locale}/products`}>{isAr ? 'العناية والجمال' : 'Beauté & soin'}</Link><Link href={`/${locale}/products`}>{isAr ? 'نمط حياة نشط' : 'Vie active'}</Link></div>
        <div className="footerLinksCol"><h3>{isAr ? 'المساعدة' : 'AIDE'}</h3><a href="/catalogue-forever-2026.pdf" download>{isAr ? 'تحميل كتالوج 2026' : 'Télécharger le catalogue 2026'}</a><Link href={`/${locale}/resources`}>{isAr ? 'شهادات Forever' : 'Certifications Forever'}</Link><a href="#">{isAr ? 'التوصيل' : 'Livraison'}</a><Link href={`/${locale}/cart`}>{isAr ? 'السلة' : 'Panier'}</Link></div>
      </div>

      <div className="footerLegal">
        <div className="container footerLegalInner">
          <p><i className="fa-solid fa-circle-info" /> {t.independentNote}</p>
          <span>{isAr ? 'متجر مستقل • المغرب' : 'Boutique indépendante • Maroc'}</span>
        </div>
      </div>
    </footer>
  );
}
