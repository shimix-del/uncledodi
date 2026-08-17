import React from 'react';

export default function Footer({ onNavigate }) {
  const handleCursorEnter = () => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) cursor.classList.add('hovering');
  };

  const handleCursorLeave = () => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) cursor.classList.remove('hovering');
  };

  return (
    <footer className="border-top" style={{ marginTop: 'auto', background: 'var(--bg-dark)', color: 'var(--bg-light)' }}>
      {/* Massive CTA Section */}
      <div className="grid-container border-bottom">
        <div 
          className="border-right mobile-padding"
          style={{ gridColumn: 'span 8', padding: '4rem 2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'center' }}
        >
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', letterSpacing: '0.1em', opacity: 0.6, fontWeight: 700 }}>CAMPAIGNS / EDITORIALS / STYLING COLLABORATIONS</span>
          <h2 className="display-medium" style={{ margin: 0, color: 'var(--bg-light)' }}>LET'S BUILD A STATEMENT together.</h2>
        </div>
        
        <div 
          className="mobile-padding"
          style={{ 
            gridColumn: 'span 4', 
            padding: '4rem 2.5rem', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            backgroundColor: 'var(--color-accent)',
            color: 'var(--bg-dark)'
          }}
        >
          <a 
            href="#/contact" 
            onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
            onMouseEnter={handleCursorEnter}
            onMouseLeave={handleCursorLeave}
            className="text-outline"
            style={{ 
              fontFamily: 'var(--font-display)', 
              fontWeight: 800, 
              fontSize: '2rem', 
              textAlign: 'center', 
              color: 'var(--bg-dark)',
              WebkitTextStroke: '1px var(--bg-dark)',
              cursor: 'pointer'
            }}
          >
            BOOK CAMPAIGN ⚡
          </a>
        </div>
      </div>

      {/* Massive Email Footer Ticker */}
      <div 
        className="border-bottom"
        style={{ overflow: 'hidden', whiteSpace: 'nowrap', backgroundColor: 'var(--bg-dark)' }}
      >
        <a 
          href="mailto:booking@uncledodi.com"
          onMouseEnter={handleCursorEnter}
          onMouseLeave={handleCursorLeave}
          style={{ 
            display: 'block', 
            fontFamily: 'var(--font-display)', 
            fontSize: 'clamp(3rem, 11vw, 11rem)', 
            fontWeight: 800, 
            textAlign: 'center', 
            letterSpacing: '-0.04em',
            padding: '2rem 0',
            lineHeight: 0.9,
            transition: 'color var(--transition-fast)'
          }}
          className="text-accent"
        >
          BOOKING@UNCLEDODI.COM
        </a>
      </div>

      {/* Sub Footer Info */}
      <div className="grid-container">
        <div 
          className="border-right mobile-padding" 
          style={{ gridColumn: 'span 5', padding: '3rem 2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800 }}>UNCLE DODI⚡</div>
          <p style={{ opacity: 0.6, fontSize: '0.9rem', maxWidth: '350px' }}>
            An editorial and styling showroom framing contemporary African craftsmanship, vintage drape silhouettes, and bold raw brass ornament design.
          </p>
        </div>

        <div 
          className="border-right mobile-padding border-bottom-mobile" 
          style={{ gridColumn: 'span 4', padding: '3rem 2.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
        >
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', letterSpacing: '0.1em', opacity: 0.5 }}>CONNECT</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontWeight: 600 }}>
            <a href="https://www.instagram.com/uncle_dodi?igsh=eGtzdDgxMzA0MDhq&igsi=eGtzdDgxMzA0MDhq" target="_blank" rel="noopener noreferrer" className="text-accent-hover" onMouseEnter={handleCursorEnter} onMouseLeave={handleCursorLeave}>INSTAGRAM</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-accent-hover" onMouseEnter={handleCursorEnter} onMouseLeave={handleCursorLeave}>LINKEDIN</a>
          </div>
        </div>

        <div 
          className="mobile-padding" 
          style={{ gridColumn: 'span 3', padding: '3rem 2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start' }}
        >
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', letterSpacing: '0.1em', opacity: 0.5 }}>REPRESENTATION LOCATIONS</span>
          <div style={{ fontSize: '0.9rem', opacity: 0.6 }}>
            <div>NAIROBI / PARIS / TOKYO</div>
          </div>
          <div style={{ fontSize: '0.8rem', opacity: 0.4, marginTop: '2rem' }}>
            © {new Date().getFullYear()} UNCLE DODI. ALL CODES RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}
