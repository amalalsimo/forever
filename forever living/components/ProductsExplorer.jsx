'use client';

import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from './ProductCard';
import { needGroups } from '../lib/products';

export default function ProductsExplorer({ locale, t, products }) {
  const params = useSearchParams();
  const preset = params.get('category') || '';
  const presetNeed = params.get('need') || '';
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState(preset);
  const [need, setNeed] = useState(presetNeed);

  const isAr = locale === 'ar';
  const categoryKey = isAr ? 'categoryAr' : 'categoryFr';
  const categories = [...new Set(products.map((p) => p[categoryKey]))];
  const verifiedPriceCount = products.filter((p) => Number.isFinite(p.price)).length;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const searchable = `${p.name} ${p.ref} ${p.descriptionFr || ''} ${p.descriptionAr || ''}`.toLowerCase();
      const matchesQuery = !q || searchable.includes(q);
      const matchesCategory = !category || p[categoryKey] === category;
      const matchesNeed = !need || (p.needTags || []).includes(need);
      return matchesQuery && matchesCategory && matchesNeed;
    });
  }, [query, category, need, products, categoryKey]);

  return (
    <section className="section">
      <div className="container">
        <div className="catalogHero">
          <span className="eyebrow">CATALOGUE FOREVER</span>
          <h1>{t.allProducts}</h1>
          <p>
            <i className="fa-solid fa-boxes-stacked" /> {products.length} {isAr ? 'منتج في قائمة Forever' : 'produits dans la liste Forever'}
            {' • '}
            <i className="fa-solid fa-circle-check" /> {verifiedPriceCount} {isAr ? 'بسعر عمومي 2026 موثق' : 'avec prix public 2026 vérifié'}
          </p>
        </div>

        <div style={{margin:'0 0 30px'}}>
          <div style={{textAlign:'center',marginBottom:16}}>
            <span className="eyebrow">{isAr ? 'تسوّق حسب احتياجك' : 'ACHETEZ SELON VOS BESOINS'}</span>
            <h2 style={{fontSize:'clamp(25px,3vw,38px)',margin:'5px 0 8px'}}>{isAr ? 'ماذا تبحث عنه؟' : 'Que recherchez-vous ?'}</h2>
            <p style={{color:'#726b66',margin:0}}>
              {isAr ? 'اختر مجموعة أو فئة لعرض المنتجات المرتبطة بها.' : 'Choisissez un groupe ou une catégorie pour afficher les produits associés.'}
            </p>
          </div>

          <div style={{display:'flex',flexWrap:'wrap',gap:9,justifyContent:'center'}}>
            <button onClick={() => setNeed('')} style={chipStyle(!need)}>{isAr ? 'الكل' : 'Tous'}</button>
            {needGroups.map((g) => (
              <button key={g.id} onClick={() => setNeed(g.id)} style={chipStyle(need === g.id)}>
                <i className={g.icon} style={{marginInlineEnd:6}} /> {isAr ? g.ar : g.fr}
              </button>
            ))}
          </div>
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

        <div style={{margin:'0 0 18px',fontWeight:800,color:'#5c3d31'}}>
          {filtered.length} {isAr ? 'منتج' : 'produit(s)'}
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

function chipStyle(active) {
  return {
    border: active ? '1px solid #5c3d31' : '1px solid #e5ddd5',
    background: active ? '#5c3d31' : '#fff',
    color: active ? '#fff' : '#4e342a',
    padding: '10px 14px',
    borderRadius: 999,
    fontWeight: 800,
    cursor: 'pointer'
  };
}
