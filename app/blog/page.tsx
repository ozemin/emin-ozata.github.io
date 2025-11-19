import Header from "../components/Header";

export default function Blog() {
  return (
    <div>
      <Header />
      <main style={{ maxWidth: '700px', margin: '0 auto', padding: '60px 24px' }}>
        <h1 style={{ marginBottom: '40px' }}>
          Blog
        </h1>

        <p style={{ color: 'var(--secondary)' }}>
          No posts yet.
        </p>
      </main>
    </div>
  );
}
