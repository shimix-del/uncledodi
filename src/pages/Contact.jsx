import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: [],
    budget: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCursorEnter = () => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) cursor.classList.add('hovering');
  };

  const handleCursorLeave = () => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) cursor.classList.remove('hovering');
  };

  const handleProjectTypeToggle = (type) => {
    setFormData(prev => {
      const active = prev.projectType.includes(type)
        ? prev.projectType.filter(t => t !== type)
        : [...prev.projectType, type];
      return { ...prev, projectType: active };
    });
  };

  const handleBudgetSelect = (range) => {
    setFormData(prev => ({ ...prev, budget: range }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please enter at least your name and email.");
      return;
    }
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', projectType: [], budget: '', message: '' });
    setIsSubmitted(false);
  };

  const projectTypes = ["CAMPAIGN MUSE", "RUNWAY BOOKING", "STYLING INQUIRY", "CREATIVE DIRECTION", "OTHER"];
  const budgetRanges = ["<$2K", "$2K - $5K", "$5K - $10K", "$10K+"];

  return (
    <div className="border-bottom page-wrapper">
      {/* Title */}
      <section className="grid-container border-bottom">
        <div style={{ gridColumn: 'span 12', padding: '5rem 4rem' }} className="p-container">
          <span style={{ fontSize: '1rem', fontWeight: 800, letterSpacing: '0.1em', color: 'var(--color-accent)' }}>CONNECT / BOOKINGS</span>
          <h1 className="display-large" style={{ margin: 0, marginTop: '1rem' }}>LET'S COLLABORATE.</h1>
        </div>
      </section>

      {/* Main split */}
      <section className="grid-container">
        {/* Left Side: Contact details */}
        <div 
          className="border-right mobile-padding border-bottom-mobile" 
          style={{ gridColumn: 'span 5', padding: '4rem', display: 'flex', flexDirection: 'column', gap: '3.5rem' }}
        >
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-accent)' }}>DIRECT BOOKINGS</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a 
                href="mailto:booking@uncledodi.com"
                onMouseEnter={handleCursorEnter}
                onMouseLeave={handleCursorLeave}
                style={{ fontSize: '1.35rem', fontWeight: 800, fontFamily: 'var(--font-display)', textDecoration: 'underline', wordBreak: 'break-all' }}
              >
                booking@uncledodi.com
              </a>
              <a 
                href="tel:0715980552"
                onMouseEnter={handleCursorEnter}
                onMouseLeave={handleCursorLeave}
                style={{ fontSize: '1.25rem', fontWeight: 800, fontFamily: 'var(--font-display)', color: 'var(--color-accent, #C5A059)' }}
              >
                📞 0715980552
              </a>
              <p style={{ opacity: 0.75, fontSize: '0.95rem', margin: 0 }}>📍 Mombasa / Nairobi, Kenya</p>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>AGENCY REPRESENTATION</h3>
            <p style={{ opacity: 0.8, fontWeight: 700 }}>Vanguard Models / East African Collective</p>
            <p style={{ opacity: 0.6, fontSize: '0.95rem' }}>For international bookings, contract queries, and fashion week syndicates.</p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>SOCIAL CHANNELS</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
              <a 
                href="https://www.instagram.com/uncle_dodi" 
                target="_blank" 
                rel="noopener noreferrer" 
                onMouseEnter={handleCursorEnter}
                onMouseLeave={handleCursorLeave}
                style={{ padding: '1.5rem', border: '1px solid var(--color-border)', textAlign: 'center', fontWeight: 700 }}
              >
                INSTAGRAM (@UNCLE_DODI)
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                onMouseEnter={handleCursorEnter}
                onMouseLeave={handleCursorLeave}
                style={{ padding: '1.5rem', border: '1px solid var(--color-border)', textAlign: 'center', fontWeight: 700 }}
              >
                LINKEDIN
              </a>
            </div>
          </div>

          <div style={{ border: '1px dashed var(--color-border)', padding: '2rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: '0.5rem', color: 'var(--color-accent)' }}>COMPOSITE CARD / STATS</span>
            <p style={{ fontSize: '0.95rem', opacity: 0.7, lineHeight: '1.7' }}>
              Height: 188cm / 6'2"<br />
              Chest: 98cm / 38.5"<br />
              Waist: 78cm / 31"<br />
              Eyes: Dark Brown<br />
              Hair: Black
            </p>
          </div>
        </div>

        {/* Right Side: Interactive Form */}
        <div 
          className="mobile-padding" 
          style={{ gridColumn: 'span 7', padding: '4rem', background: '#181615' }}
        >
          {isSubmitted ? (
            <div style={{ border: '2px solid var(--color-accent)', padding: '4rem 2rem', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1.5rem' }}>
              <span style={{ fontSize: '4rem' }}>⚡</span>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--color-accent)' }}>BOOKING REQUEST LOGGED</h2>
              <p style={{ fontSize: '1.1rem', maxWidth: '400px', opacity: 0.8 }}>
                Your collaboration details have been saved. Our booking agent will respond with package options and calendar slots within 24 hours.
              </p>
              <button 
                onClick={resetForm}
                onMouseEnter={handleCursorEnter}
                onMouseLeave={handleCursorLeave}
                className="btn-primary"
                style={{ maxWidth: '250px' }}
              >
                SUBMIT ANOTHER REQUEST
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.1em', marginBottom: '0.5rem', opacity: 0.8 }}>01 / BRAND OR AGENCY NAME *</label>
                <input 
                  type="text" 
                  required
                  placeholder="Tell me who you represent"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  style={{ width: '100%', padding: '1rem', background: 'var(--bg-dark)', border: '1px solid var(--color-border)', color: 'var(--bg-light)', fontFamily: 'inherit', fontSize: '1rem' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.1em', marginBottom: '0.5rem', opacity: 0.8 }}>02 / CONTACT EMAIL *</label>
                <input 
                  type="email" 
                  required
                  placeholder="How do we reach you?"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  style={{ width: '100%', padding: '1rem', background: 'var(--bg-dark)', border: '1px solid var(--color-border)', color: 'var(--bg-light)', fontFamily: 'inherit', fontSize: '1rem' }}
                />
              </div>

              {/* Project Type Multi Select */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.1em', marginBottom: '0.75rem', opacity: 0.8 }}>03 / COLLABORATION TYPE</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {projectTypes.map(type => {
                    const isSelected = formData.projectType.includes(type);
                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() => handleProjectTypeToggle(type)}
                        onMouseEnter={handleCursorEnter}
                        onMouseLeave={handleCursorLeave}
                        style={{
                          padding: '0.5rem 1rem',
                          fontSize: '0.85rem',
                          fontWeight: 700,
                          fontFamily: 'var(--font-display)',
                          border: `1px solid ${isSelected ? 'var(--color-accent)' : 'var(--color-border)'}`,
                          backgroundColor: isSelected ? 'var(--color-accent)' : 'var(--bg-dark)',
                          color: isSelected ? '#131110' : 'var(--bg-light)',
                          transition: 'all var(--transition-fast)'
                        }}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Budget Single Select */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.1em', marginBottom: '0.75rem', opacity: 0.8 }}>04 / ESTIMATED PROJECT BUDGET / RATE</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
                  {budgetRanges.map(range => {
                    const isSelected = formData.budget === range;
                    return (
                      <button
                        key={range}
                        type="button"
                        onClick={() => handleBudgetSelect(range)}
                        onMouseEnter={handleCursorEnter}
                        onMouseLeave={handleCursorLeave}
                        style={{
                          padding: '0.75rem',
                          fontSize: '0.9rem',
                          fontWeight: 700,
                          fontFamily: 'var(--font-display)',
                          border: `1px solid ${isSelected ? 'var(--color-accent)' : 'var(--color-border)'}`,
                          backgroundColor: isSelected ? 'var(--color-accent)' : 'var(--bg-dark)',
                          color: isSelected ? '#131110' : 'var(--bg-light)',
                          transition: 'all var(--transition-fast)'
                        }}
                      >
                        {range}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.1em', marginBottom: '0.5rem', opacity: 0.8 }}>05 / PROJECT OR BRIEF DETAILS</label>
                <textarea 
                  rows="4"
                  placeholder="Outline the shoot concept, mood board links, and scheduling timeframes"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  style={{ width: '100%', padding: '1rem', background: 'var(--bg-dark)', border: '1px solid var(--color-border)', color: 'var(--bg-light)', fontFamily: 'inherit', fontSize: '1rem', resize: 'vertical' }}
                />
              </div>

              <button 
                type="submit" 
                onMouseEnter={handleCursorEnter}
                onMouseLeave={handleCursorLeave}
                className="btn-primary"
                style={{ marginTop: '1rem' }}
              >
                SUBMIT INQUIRY ⚡
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
