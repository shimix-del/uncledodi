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
            backgroundColor: 'var(--color-accent, #C5A059)'
          }}
        >
          <a 
            href="#/contact" 
            onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
            onMouseEnter={handleCursorEnter}
            onMouseLeave={handleCursorLeave}
            style={{ 
              fontFamily: 'var(--font-display)', 
              fontWeight: 800, 
              fontSize: '2rem', 
              textAlign: 'center', 
              color: '#131110',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            BOOK CAMPAIGN ⚡
          </a>
        </div>
      </div>

      {/* Clean, Full-Width Responsive Email Banner */}
      <div 
        className="border-bottom"
        style={{ 
          backgroundColor: 'var(--bg-dark)',
          padding: 'clamp(2rem, 3.5vw, 3rem) 1.5rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          overflow: 'hidden'
        }}
      >
        <a 
          href="mailto:booking@uncledodi.com"
          onMouseEnter={handleCursorEnter}
          onMouseLeave={handleCursorLeave}
          style={{ 
            display: 'inline-block', 
            fontFamily: 'var(--font-display)', 
            fontSize: 'clamp(1.3rem, 4.4vw, 4.2rem)', 
            fontWeight: 800, 
            textAlign: 'center', 
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            transition: 'color var(--transition-fast), transform var(--transition-fast)',
            maxWidth: '100%'
          }}
          className="text-accent"
        >
          BOOKING@UNCLEDODI.COM
        </a>
      </div>

      {/* Sub Footer Info */}
      <div className="grid-container border-bottom">
        {/* Col 1: Brand & Philosophy */}
        <div 
          className="border-right mobile-padding border-bottom-mobile" 
          style={{ gridColumn: 'span 3', padding: '3rem 2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800 }}>UNCLE DODI⚡</div>
          <p style={{ opacity: 0.75, fontSize: '0.9rem', lineHeight: 1.6 }}>
            High-fashion & commercial muse, androgynous runway presence, and eclectic upcycled sartorial styling. Brightening days across the Milky Way.
          </p>
          <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-accent, #C5A059)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            ⚡ NORMAL IS BORING ⚡
          </div>
        </div>

        {/* Col 2: Sitemap */}
        <div 
          className="border-right mobile-padding border-bottom-mobile" 
          style={{ gridColumn: 'span 3', padding: '3rem 2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', letterSpacing: '0.12em', color: 'var(--color-accent, #C5A059)', fontWeight: 800 }}>
            SITEMAP
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontWeight: 700, fontSize: '0.95rem' }}>
            <a 
              href="#/" 
              onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
              onMouseEnter={handleCursorEnter} 
              onMouseLeave={handleCursorLeave}
              style={{ transition: 'color var(--transition-fast)' }}
            >
              HOME
            </a>
            <a 
              href="#/work" 
              onClick={(e) => { e.preventDefault(); onNavigate('work'); }}
              onMouseEnter={handleCursorEnter} 
              onMouseLeave={handleCursorLeave}
              style={{ transition: 'color var(--transition-fast)' }}
            >
              WORK / CAMPAIGNS
            </a>
            <a 
              href="#/about" 
              onClick={(e) => { e.preventDefault(); onNavigate('about'); }}
              onMouseEnter={handleCursorEnter} 
              onMouseLeave={handleCursorLeave}
              style={{ transition: 'color var(--transition-fast)' }}
            >
              ABOUT DODI
            </a>
            <a 
              href="#/contact" 
              onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
              onMouseEnter={handleCursorEnter} 
              onMouseLeave={handleCursorLeave}
              style={{ transition: 'color var(--transition-fast)' }}
            >
              CONTACT & BOOKINGS
            </a>
          </div>
        </div>

        {/* Col 3: Contact Uncle Dodi */}
        <div 
          className="border-right mobile-padding border-bottom-mobile" 
          style={{ gridColumn: 'span 3', padding: '3rem 2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', letterSpacing: '0.12em', color: 'var(--color-accent, #C5A059)', fontWeight: 800 }}>
            CONTACT UNCLE DODI
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.95rem' }}>
            <div>
              <span style={{ opacity: 0.6, fontSize: '0.8rem', display: 'block', fontWeight: 700 }}>PHONE NUMBER:</span>
              <a 
                href="tel:0715980552" 
                style={{ fontWeight: 800, color: 'var(--bg-light)', fontFamily: 'var(--font-display)' }}
                onMouseEnter={handleCursorEnter} 
                onMouseLeave={handleCursorLeave}
              >
                0715980552
              </a>
            </div>
            <div>
              <span style={{ opacity: 0.6, fontSize: '0.8rem', display: 'block', fontWeight: 700 }}>INSTAGRAM:</span>
              <a 
                href="https://www.instagram.com/uncle_dodi" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ fontWeight: 800, color: 'var(--color-accent, #C5A059)' }}
                onMouseEnter={handleCursorEnter} 
                onMouseLeave={handleCursorLeave}
              >
                @uncle_dodi ↗
              </a>
            </div>
            <div>
              <span style={{ opacity: 0.6, fontSize: '0.8rem', display: 'block', fontWeight: 700 }}>LOCATION:</span>
              <span style={{ fontWeight: 700 }}>Mombasa, Kenya</span>
            </div>
          </div>
        </div>

        {/* Col 4: Base / Locations */}
        <div 
          className="mobile-padding" 
          style={{ gridColumn: 'span 3', padding: '3rem 2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1rem' }}
        >
          <div>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', letterSpacing: '0.12em', color: 'var(--color-accent, #C5A059)', fontWeight: 800, display: 'block', marginBottom: '0.75rem' }}>
              REPRESENTATION & BASE
            </span>
            <div style={{ fontSize: '1.25rem', fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--bg-light)' }}>
              MOMBASA / NAIROBI
            </div>
            <p style={{ opacity: 0.65, fontSize: '0.85rem', marginTop: '0.5rem', lineHeight: 1.5 }}>
              Available for high-fashion runway shows, commercial campaigns, and editorial styling across East Africa & globally.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Developer Credit Bar */}
      <div 
        className="mobile-padding"
        style={{ 
          padding: '1.75rem 2.5rem', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          gap: '1rem',
          fontSize: '0.85rem',
          backgroundColor: '#0D0B0A'
        }}
      >
        <div style={{ opacity: 0.75, fontWeight: 600 }}>
          © {new Date().getFullYear()} UNCLE DODI. ALL RIGHTS RESERVED.
        </div>
        <div style={{ opacity: 0.95, fontWeight: 700 }}>
          Developed and created by Khasiani J BY{' '}
          <a 
            href="https://dpinc.top/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              color: 'var(--color-accent, #C5A059)', 
              fontWeight: 800, 
              textDecoration: 'underline',
              transition: 'opacity var(--transition-fast)'
            }}
            onMouseEnter={handleCursorEnter}
            onMouseLeave={handleCursorLeave}
          >
            DataPort (dpinc.top)
          </a>
        </div>
      </div>
    </footer>
  );
}
