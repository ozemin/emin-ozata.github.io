import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main style={{ maxWidth: '700px', margin: '0 auto', padding: '40px 24px' }}>

        {/* Title section */}
        <div style={{ marginBottom: '60px' }}>
          <h1 style={{ marginBottom: '8px' }}>
            Emin Özata
          </h1>
          <p style={{ color: 'var(--secondary)', fontSize: '16px' }}>
            Data Engineer
          </p>
        </div>

        {/* About section */}
        <section>
          <h2 style={{ marginBottom: '16px' }}>
            About
          </h2>
          <p style={{ color: 'var(--secondary)' }}>
            About content here
          </p>
        </section>

      </main>
    </div>
  );
}
