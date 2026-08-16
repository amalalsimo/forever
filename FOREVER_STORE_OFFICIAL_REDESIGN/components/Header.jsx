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

  return (
    <>
      <div className="topbar">
        <div className="container topbarInner">
          <span className="topbarMessage">
            <i className="fa-solid fa-circle-check" /> {t.brandSub}
          </span>
          <div className="languageSwitch">
            <i className="fa-solid fa-language" />
            <Link className={locale === 'fr' ? 'active' : ''} href={localePath(pathname, 'fr')}>FR</Link>
            <span>/</span>
            <Link className={locale === 'ar' ? 'active' : ''} href={localePath(pathname, 'ar')}>العربية</Link>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="container headerInner">
          <Link href={`/${locale}`} className="brand" aria-label="Forever Living Products">
            <img
              className="headerLogo"
              src="https://www.foreverliving.fr/images/LogoForever.svg"
              alt="Forever Living Products"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling;
                if (fallback) fallback.style.display = 'block';
              }}
            />
            <strong className="brandFallback">FOREVER</strong>
            <small className="brandTag">{locale === 'ar' ? 'متجر مستقل • المغرب' : 'Boutique indépendante • Maroc'}</small>
          </Link>

          <nav>
            <Link href={`/${locale}`}>{t.home}</Link>
            <Link href={`/${locale}/products`}>{t.products}</Link>
          </nav>

          <Link className="cartButton" href={`/${locale}/cart`} aria-label={t.cart}>
            <i className="fa-solid fa-bag-shopping" />
            <span className="cartLabel">{t.cart}</span>
            <b>{count}</b>
          </Link>
        </div>
      </header>
    </>
  );
}
