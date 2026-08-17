import React from 'react';

export default function Header({ currentRoute, onNavigate }) {
  const navItems = [
    { label: "WORK", path: "work" },
    { label: "ABOUT", path: "about" },
    { label: "CONTACT", path: "contact" }
  ];

  const handleCursorEnter = () => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) cursor.classList.add('hovering');
  };

  const handleCursorLeave = () => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) cursor.classList.remove('hovering');
  };

  return (
    <header className="grid-container border-bottom" style={{ position: 'sticky', top: 0, zIndex: 1000, background: 'var(--color-bg)', transition: 'background-color var(--transition-slow)' }}>
      <div 
        className="border-right mobile-padding" 
        style={{ gridColumn: 'span 4', padding: '1.5rem 2.5rem', display: 'flex', alignItems: 'center' }}
      >
        <a 
          href="#/" 
          onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
          onMouseEnter={handleCursorEnter}
          onMouseLeave={handleCursorLeave}
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.8rem', fontWeight: 800, fontFamily: 'var(--font-display)', letterSpacing: '-0.05em' }}
        >
          UNCLE DODI<span style={{ color: 'var(--color-accent)', transition: 'color var(--transition-medium)' }}>⚡</span>
        </a>
      </div>
      
      <div 
        className="mobile-padding" 
        style={{ gridColumn: 'span 8', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '0 2.5rem' }}
      >
        <nav style={{ display: 'flex', gap: '2rem' }}>
          {navItems.map((item) => {
            const isActive = currentRoute === item.path || (item.path === 'work' && currentRoute.startsWith('project/'));
            return (
              <a
                key={item.path}
                href={`#/${item.path}`}
                onClick={(e) => { e.preventDefault(); onNavigate(item.path); }}
                onMouseEnter={handleCursorEnter}
                onMouseLeave={handleCursorLeave}
                style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '0.05em',
                  color: isActive ? 'var(--color-accent)' : 'inherit',
                  position: 'relative',
                  padding: '0.5rem 0',
                  transition: 'color var(--transition-fast)'
                }}
              >
                {item.label}
                {isActive && (
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '2px',
                    backgroundColor: 'var(--color-accent)',
                    transition: 'background-color var(--transition-medium)'
                  }} />
                )}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
