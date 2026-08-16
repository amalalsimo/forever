import CheckoutClient from '../../../components/CheckoutClient';
import { getDictionary } from '../../../lib/i18n';

export default async function CheckoutPage({ params }) {
  const { locale } = await params;
  return <CheckoutClient locale={locale} t={getDictionary(locale)} />;
}
