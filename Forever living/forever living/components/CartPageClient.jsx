'use client';

import Link from 'next/link';
import { useCart } from './CartProvider';

export default function CartPageClient({ locale, t }) {
  const { cart, setQuantity, remove, total, ready } = useCart();

  if (!ready) {
    return <section className="section"><div className="container"><i className="fa-solid fa-spinner fa-spin" /></div></section>;
  }

  if (!cart.length) {
    return (
      <section className="section">
        <div className="container narrow">
          <div className="emptyState big">
            <i className="fa-solid fa-bag-shopping emptyIcon" />
            <h1>{t.empty}</h1>
            <Link className="btn btnPrimary" href={`/${locale}/products`}>
              <i className="fa-solid fa-arrow-left" /> {t.continueShopping}
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <div className="sectionHead"><h1><i className="fa-solid fa-bag-shopping" /> {t.cart}</h1></div>

        <div className="cartLayout">
          <div className="cartList">
            {cart.map((item) => (
              <div className="cartItem" key={item.ref}>
                <img src={item.image} alt={item.name} onError={(e)=>{e.currentTarget.src='/product-placeholder.svg'}} />

                <div className="cartItemInfo">
                  <strong>{item.name}</strong>
                  <small><i className="fa-solid fa-barcode" /> {item.ref}</small>
                  <span>{item.price.toFixed(2)} DH</span>
                </div>

                <div className="qtyControl">
                  <button onClick={() => setQuantity(item.ref, item.quantity - 1)}><i className="fa-solid fa-minus" /></button>
                  <b>{item.quantity}</b>
                  <button onClick={() => setQuantity(item.ref, item.quantity + 1)}><i className="fa-solid fa-plus" /></button>
                </div>

                <button className="removeBtn" onClick={() => remove(item.ref)}>
                  <i className="fa-regular fa-trash-can" /> {t.remove}
                </button>
              </div>
            ))}
          </div>

          <aside className="cartSummary">
            <div>
              <span>{t.subtotal}</span>
              <strong>{total.toFixed(2)} DH</strong>
            </div>

            <Link className="btn btnPrimary addWide" href={`/${locale}/checkout`}>
              <i className="fa-solid fa-credit-card" /> {t.checkout}
            </Link>

            <Link className="textLink centerText" href={`/${locale}/products`}>
              <i className="fa-solid fa-arrow-left" /> {t.continueShopping}
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
