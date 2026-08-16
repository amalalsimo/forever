export default function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div>
          <strong className="footerBrand"><i className="fa-solid fa-leaf" /> FOREVER</strong>
          <p>{t.footerText}</p>
        </div>
        <p className="footerNote"><i className="fa-solid fa-circle-info" /> {t.independentNote}</p>
      </div>
    </footer>
  );
}
