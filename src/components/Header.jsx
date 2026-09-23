import React, { useState } from 'react';

export default function Header({ currentRoute, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "HOME", path: "home" },
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

  const handleNavClick = (path) => {
    setMobileMenuOpen(false);
    onNavigate(path);
  };

  return (
    <header className="site-header border-bottom">
      <div className="header-inner">
        {/* Brand Logo */}
        <div className="header-logo-container">
          <a 
            href="#/" 
            onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
            onMouseEnter={handleCursorEnter}
            onMouseLeave={handleCursorLeave}
            className="header-logo-link"
          >
            UNCLE DODI<span className="text-accent">⚡</span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navItems.map((item) => {
            const isActive = 
              (item.path === 'home' && (!currentRoute || currentRoute === 'home')) ||
              currentRoute === item.path || 
              (item.path === 'work' && currentRoute?.startsWith('project/'));
              
            return (
              <a
                key={item.path}
                href={item.path === 'home' ? '#/' : `#/${item.path}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.path); }}
                onMouseEnter={handleCursorEnter}
                onMouseLeave={handleCursorLeave}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                {item.label}
                {isActive && <span className="nav-active-bar" />}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Hamburger Toggle */}
        <button 
          type="button"
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(prev => !prev)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          <span className="hamburger-line line-1" />
          <span className="hamburger-line line-2" />
          <span className="hamburger-line line-3" />
        </button>
      </div>

      {/* Mobile Drawer Menu Overlay */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'drawer-open' : ''}`}>
        <div className="mobile-nav-links">
          {navItems.map((item) => {
            const isActive = 
              (item.path === 'home' && (!currentRoute || currentRoute === 'home')) ||
              currentRoute === item.path || 
              (item.path === 'work' && currentRoute?.startsWith('project/'));
              
            return (
              <a
                key={item.path}
                href={item.path === 'home' ? '#/' : `#/${item.path}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.path); }}
                className={`mobile-drawer-link ${isActive ? 'active' : ''}`}
              >
                <span>{item.label}</span>
                {isActive && <span className="mobile-active-dot">⚡</span>}
              </a>
            );
          })}
        </div>

        {/* Mobile Drawer Footer Contacts */}
        <div className="mobile-drawer-footer">
          <div className="mobile-drawer-contact-item">
            <span className="mobile-drawer-meta">DIRECT INQUIRIES:</span>
            <a href="tel:0715980552" className="mobile-drawer-contact-val">0715980552</a>
          </div>
          <div className="mobile-drawer-contact-item">
            <span className="mobile-drawer-meta">INSTAGRAM:</span>
            <a href="https://www.instagram.com/uncle_dodi" target="_blank" rel="noopener noreferrer" className="mobile-drawer-contact-val text-accent">@UNCLE_DODI ↗</a>
          </div>
          <div className="mobile-drawer-contact-item">
            <span className="mobile-drawer-meta">BASE:</span>
            <span className="mobile-drawer-contact-val">MOMBASA / NAIROBI, KENYA</span>
          </div>
        </div>
      </div>
    </header>
  );
}
