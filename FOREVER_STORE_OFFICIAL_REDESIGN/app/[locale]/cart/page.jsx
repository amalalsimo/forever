import CartPageClient from '../../../components/CartPageClient';
import { getDictionary } from '../../../lib/i18n';

export default async function CartPage({ params }) {
  const { locale } = await params;
  return <CartPageClient locale={locale} t={getDictionary(locale)} />;
}
