import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css';
import { CartProvider } from '../components/CartProvider';

export const metadata = {
  title: 'FOREVER | Boutique indépendante',
  description: 'Boutique bilingue de produits Forever Living Products.',
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
