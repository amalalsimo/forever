import { notFound } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getDictionary, locales } from '../../lib/i18n';

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!locales.includes(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <div lang={locale} dir={t.dir} className={`site locale-${locale}`}>
      <Header locale={locale} t={t} />
      <main>{children}</main>
      <Footer t={t} />
    </div>
  );
}
