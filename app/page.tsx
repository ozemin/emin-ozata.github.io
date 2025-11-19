import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main style={{ maxWidth: '700px', margin: '0 auto', padding: '40px 24px' }}>

        {/* About section */}
        <section style={{ marginBottom: '60px' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '16px' }}>
            <h2 style={{ margin: 0 }}>
              Emin Özata
            </h2>
            <span style={{ color: 'var(--secondary)', fontSize: '16px' }}>·</span>
            <span style={{ color: 'var(--secondary)', fontSize: '16px' }}>Data Engineer</span>
          </div>
          <p style={{ color: 'var(--secondary)', lineHeight: '1.6' }}>
            I'm a Data Engineer currently working at Sipay, specializing in building data infrastructure and scalable pipelines.
            I have experience with cloud platforms (AWS), orchestration tools (Airflow, Kubernetes), and managing ML models in production.
          </p>
        </section>

        {/* Work History section */}
        <section>
          <h2 style={{ marginBottom: '24px' }}>
            Work History
          </h2>

          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>
              2025 – <a href="https://sipay.com.tr/" target="_blank" rel="noopener noreferrer">Sipay</a>
            </h3>
            <p style={{ color: 'var(--secondary)', lineHeight: '1.6' }}>
              Built the entire data infrastructure from scratch on Kubernetes as the first data engineer. Experienced with on-prem systems and managing 500+ daily jobs.
            </p>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>
              2023 – <a href="https://bitaksi.com/tr" target="_blank" rel="noopener noreferrer">BiTaksi</a>
            </h3>
            <p style={{ color: 'var(--secondary)', lineHeight: '1.6' }}>
              Built data pipelines written in PySpark on Airflow with dynamic DAGs and improved data quality. Worked with SQL/NoSQL databases, migrated to Redshift as our DWH, and deployed ML models to production serving client-facing applications. Managed all infrastructure on Kubernetes.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>
              2022 – <a href="https://tr.linkedin.com/company/tek-tu%C5%9F'la-bisu" target="_blank" rel="noopener noreferrer">BiSU</a>
            </h3>
            <p style={{ color: 'var(--secondary)', lineHeight: '1.6' }}>
              I started my career as a Data Engineer, automating report delivery and working with AWS services like Lambda and Batch.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}
