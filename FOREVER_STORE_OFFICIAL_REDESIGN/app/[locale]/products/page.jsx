import ProductsExplorer from '../../../components/ProductsExplorer';
import { getDictionary } from '../../../lib/i18n';
import { products } from '../../../lib/products';

export default async function ProductsPage({ params }) {
  const { locale } = await params;
  return <ProductsExplorer locale={locale} t={getDictionary(locale)} products={products} />;
}
