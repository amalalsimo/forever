'use client';

import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from './ProductCard';

export default function ProductsExplorer({ locale, t, products }) {
  const params = useSearchParams();
  const preset = params.get('category') || '';
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState(preset);

  const categoryKey = locale === 'ar' ? 'categoryAr' : 'categoryFr';
  const categories = [...new Set(products.map((p) => p[categoryKey]))];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchesQuery = !q || p.name.toLowerCase().includes(q) || p.ref.includes(q);
      const matchesCategory = !category || p[categoryKey] === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category, products, categoryKey]);

  return (
    <section className="section">
      <div className="container">
        <div className="catalogHero">
          <span className="eyebrow">CATALOGUE 2026</span>
          <h1>{t.allProducts}</h1>
          <p><i className="fa-solid fa-circle-check" /> {products.length} {t.verifiedProducts}</p>
        </div>

        <div className="catalogTools">
          <label className="searchBox">
            <i className="fa-solid fa-magnifying-glass" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.search}
              className="searchInput"
            />
          </label>

          <label className="selectBox">
            <i className="fa-solid fa-filter" />
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="categorySelect">
              <option value="">{t.filterAll}</option>
              {categories.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </label>
        </div>

        {filtered.length ? (
          <div className="productGrid">
            {filtered.map((product) => (
              <ProductCard key={product.ref} product={product} locale={locale} t={t} />
            ))}
          </div>
        ) : (
          <div className="emptyState"><i className="fa-regular fa-face-frown" /> {t.noResults}</div>
        )}
      </div>
    </section>
  );
}
