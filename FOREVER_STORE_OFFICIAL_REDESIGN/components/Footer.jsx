export default function Footer({ t, locale }) {
  const isAr = locale === 'ar';

  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div className="footerMain">
          <img
            className="footerLogo"
            src="https://www.foreverliving.fr/images/LogoForever.svg"
            alt="Forever Living Products"
          />
          <p>{t.footerText}</p>
          <div className="footerTopics">
            <span>Aloe Vera</span>
            <span>{isAr ? 'العافية' : 'Bien-être'}</span>
            <span>{isAr ? 'الجمال' : 'Beauté'}</span>
            <span>{isAr ? 'التغذية' : 'Nutrition'}</span>
          </div>
        </div>

        <div className="footerSide">
          <strong>{isAr ? 'متجر مستقل في المغرب' : 'Boutique indépendante au Maroc'}</strong>
          <p className="footerNote"><i className="fa-solid fa-circle-info" /> {t.independentNote}</p>
        </div>
      </div>
    </footer>
  );
}
