'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from './CartProvider';

function localePath(pathname, target) {
  const parts = pathname.split('/').filter(Boolean);
  if (parts[0] === 'fr' || parts[0] === 'ar') parts[0] = target;
  else parts.unshift(target);
  return '/' + parts.join('/');
}

export default function Header({ locale, t }) {
  const pathname = usePathname();
  const { count } = useCart();
  const isAr = locale === 'ar';

  return (
    <>
      <div className="officialPromoBar">
        <div className="container promoInner">
          <span><i className="fa-solid fa-gift" /> {isAr ? 'الدفع عند الاستلام • أسعار عمومية 2026 • خدمة بالعربية والفرنسية' : 'Paiement à la livraison • Prix publics 2026 • Service FR / AR'}</span>
          <span className="promoIndependent">{isAr ? 'موزع مستقل • المغرب' : 'Distributeur indépendant • Maroc'}</span>
        </div>
      </div>

      <header className="officialHeader">
        <div className="container officialHeaderInner">
          <Link href={`/${locale}`} className="officialBrand" aria-label="Forever Living Products">
            <img src="https://www.foreverliving.fr/images/LogoForever.svg" alt="Forever Living Products" />
            <span className="logoFallback">FOREVER<sup>®</sup></span>
          </Link>

          <nav className="officialNav">
            <Link href={`/${locale}`}>{t.home}</Link>
            <Link href={`/${locale}/products`}>{t.products}</Link>
            <a href={`/${locale}#forever-story`}>{isAr ? 'من نحن' : 'Qui sommes-nous'}</a>
            <Link href={`/${locale}/products`}>{isAr ? 'الفئات' : 'Catégories'}</Link>
          </nav>

          <div className="headerActions">
            <div className="languageSwitch officialLanguage">
              <Link className={locale === 'fr' ? 'active' : ''} href={localePath(pathname, 'fr')}>FR</Link>
              <span>|</span>
              <Link className={locale === 'ar' ? 'active' : ''} href={localePath(pathname, 'ar')}>العربية</Link>
            </div>
            <Link className="officialCart" href={`/${locale}/cart`} aria-label={t.cart}>
              <i className="fa-solid fa-cart-shopping" /> <span>{t.cart}</span><b>{count}</b>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
