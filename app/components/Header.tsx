import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header style={{
      borderBottom: '1px solid var(--border)',
      padding: '16px 0',
      backgroundColor: 'var(--background)'
    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '700px',
        margin: '0 auto',
        padding: '0 24px',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span className="prompt">$</span>
          <Link href="/" className="cmd-link">
            about
          </Link>
          <Link href="/blog" className="cmd-link">
            blog
          </Link>
        </div>

        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <a
            href="https://github.com/emin-ozata"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--link)', display: 'flex', alignItems: 'center', transition: 'color 0.2s' }}
            aria-label="GitHub"
          >
            <Image src="/github.svg" alt="GitHub" width={20} height={20} />
          </a>

          <a
            href="https://linkedin.com/in/eminozata"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--link)', display: 'flex', alignItems: 'center', transition: 'color 0.2s' }}
            aria-label="LinkedIn"
          >
            <Image src="/linkedin.svg" alt="LinkedIn" width={20} height={20} />
          </a>

          <a
            href="mailto:eminozata@proton.me"
            style={{ color: 'var(--link)', display: 'flex', alignItems: 'center', transition: 'color 0.2s' }}
            aria-label="Email"
          >
            <Image src="/mail.svg" alt="Email" width={20} height={20} />
          </a>
        </div>
      </nav>
    </header>
  );
}
