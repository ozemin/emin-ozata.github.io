import Header from "../components/Header";

export default function Blog() {
  return (
    <div>
      <Header />
      <main style={{ maxWidth: '700px', margin: '0 auto', padding: '40px 24px' }}>
        <h2 style={{ marginBottom: '16px' }}>
          Blog
        </h2>

        <p style={{ color: 'var(--secondary)' }}>
          No posts yet.
        </p>
      </main>
    </div>
  );
}
