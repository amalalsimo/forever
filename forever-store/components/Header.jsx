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
          <span><i className="fa-solid fa-circle-check" /> {t.brandSub}</span>
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
          <Link href={`/${locale}`} className="brand">
            <span className="brandIcon"><i className="fa-solid fa-leaf" /></span>
            <span>
              <strong>FOREVER</strong>
              <small>{locale === 'ar' ? 'مع محمد' : 'avec Mohamed'}</small>
            </span>
          </Link>

          <nav>
            <Link href={`/${locale}`}><i className="fa-solid fa-house" /> {t.home}</Link>
            <Link href={`/${locale}/products`}><i className="fa-solid fa-box-open" /> {t.products}</Link>
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
