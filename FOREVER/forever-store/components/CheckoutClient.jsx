'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from './CartProvider';

export default function CheckoutClient({ locale, t }) {
  const { cart, total, clear, ready } = useCart();
  const [form, setForm] = useState({ name:'', phone:'', city:'', address:'', note:'' });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  if (!ready) {
    return <section className="section"><div className="container"><i className="fa-solid fa-spinner fa-spin" /></div></section>;
  }

  if (result) {
    return (
      <section className="section">
        <div className="container narrow">
          <div className="successCard">
            <span className="successIcon"><i className="fa-solid fa-check" /></span>
            <h1>{t.success}</h1>
            <p>{t.successText}</p>
            <strong>{t.orderNumber}: {result.orderNumber}</strong>
            <Link className="btn btnPrimary" href={`/${locale}`}>
              <i className="fa-solid fa-house" /> {t.backHome}
            </Link>
          </div>
        </div>
      </section>
    );
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

  async function submit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify({
          locale,
          customer: form,
          paymentMethod: 'COD',
          items: cart.map(({ ref, name, price, quantity }) => ({ ref, name, price, quantity })),
          total
        })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Order failed');

      setResult(data);
      clear();
    } catch {
      setError(locale === 'ar'
        ? 'تعذر تسجيل الطلب. حاول مرة أخرى.'
        : 'Impossible d’enregistrer la commande. Réessayez.'
      );
    } finally {
      setLoading(false);
    }
  }

  const change = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  return (
    <section className="section">
      <div className="container checkoutLayout">
        <form className="checkoutForm" onSubmit={submit}>
          <span className="eyebrow"><i className="fa-solid fa-truck" /> COD</span>
          <h1>{t.checkoutTitle}</h1>

          <div className="formGrid">
            <label><span><i className="fa-regular fa-user" /> {t.name}</span><input required value={form.name} onChange={change('name')} /></label>
            <label><span><i className="fa-solid fa-phone" /> {t.phone}</span><input required type="tel" value={form.phone} onChange={change('phone')} /></label>
            <label><span><i className="fa-solid fa-city" /> {t.city}</span><input required value={form.city} onChange={change('city')} /></label>
            <label className="full"><span><i className="fa-solid fa-location-dot" /> {t.address}</span><textarea required rows="3" value={form.address} onChange={change('address')} /></label>
            <label className="full"><span><i className="fa-regular fa-note-sticky" /> {t.note}</span><textarea rows="2" value={form.note} onChange={change('note')} /></label>
          </div>

          <div className="paymentPill"><i className="fa-solid fa-money-bill-wave" /> {t.cod}</div>
          {error && <p className="errorText">{error}</p>}

          <button className="btn btnPrimary addWide" disabled={loading}>
            <i className={loading ? "fa-solid fa-spinner fa-spin" : "fa-solid fa-circle-check"} />
            {loading ? ` ${t.sending}` : ` ${t.placeOrder}`}
          </button>
        </form>

        <aside className="orderReview">
          {cart.map((item) => (
            <div className="reviewItem" key={item.ref}>
              <span>{item.name} × {item.quantity}</span>
              <strong>{(item.price * item.quantity).toFixed(2)} DH</strong>
            </div>
          ))}
          <div className="reviewTotal">
            <span>{t.subtotal}</span>
            <strong>{total.toFixed(2)} DH</strong>
          </div>
        </aside>
      </div>
    </section>
  );
}
