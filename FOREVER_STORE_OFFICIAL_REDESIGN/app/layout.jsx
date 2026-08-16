import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css';
import { CartProvider } from '../components/CartProvider';

export const metadata = {
  title: 'FOREVER | Bien-être & Aloe Vera - Boutique indépendante Maroc',
  description: 'Boutique indépendante au Maroc proposant une sélection de produits Forever Living Products autour de l’Aloe vera, du bien-être, de la beauté et de la nutrition.',
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
