import React from 'react';
import { projects } from '../data/projects';

export default function Home({ onNavigate }) {
  const selectedProjects = projects.slice(0, 4); // Take all 4 styling/modeling projects for the homepage

  const handleCursorEnter = () => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) cursor.classList.add('hovering');
  };

  const handleCursorLeave = () => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) cursor.classList.remove('hovering');
  };

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="grid-container border-bottom" style={{ minHeight: 'calc(100vh - 75px)', position: 'relative' }}>
        <div 
          className="border-right mobile-padding" 
          style={{ 
            gridColumn: 'span 8', 
            padding: '6rem 4rem', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ alignSelf: 'flex-start' }}>
            <span style={{ fontSize: '1rem', fontWeight: 800, letterSpacing: '0.1em', color: 'var(--color-accent)', transition: 'color var(--transition-medium)' }}>
              UNCLE DODI / EDITORIAL MUSE & CREATIVE DIRECTOR
            </span>
          </div>

          <div style={{ margin: '4rem 0' }}>
            <h1 className="display-huge" style={{ margin: 0 }}>
              THE MUSE<br/>
              THAT COMMANDS<br/>
              <span className="text-outline">THE FRAME.</span>
            </h1>
          </div>

          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a 
              href="#/work" 
              onClick={(e) => { e.preventDefault(); onNavigate('work'); }}
              onMouseEnter={handleCursorEnter}
              onMouseLeave={handleCursorLeave}
              className="btn-primary"
              style={{ maxWidth: '300px' }}
            >
              EXPLORE CAMPAIGNS ⚡
            </a>
          </div>
        </div>

        <div 
          className="mobile-padding" 
          style={{ 
            gridColumn: 'span 4', 
            padding: '4rem', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between',
            background: 'var(--color-accent)',
            color: 'var(--bg-dark)',
            transition: 'background-color var(--transition-slow)'
          }}
        >
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '5rem', fontWeight: 800, lineHeight: 0.8, opacity: 0.2 }}>
            01/04
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 style={{ fontSize: '2.5rem', lineHeight: 0.9, color: 'var(--bg-dark)' }}>
              EDITORIAL<br/>STORYTELLING &<br/>STYLING.
            </h3>
            <p style={{ fontSize: '1rem', fontWeight: 600 }}>
              We frame heritage, draping texture, and raw brass details in structural, high-contrast visual narratives.
            </p>
          </div>
        </div>
      </section>

      {/* Positioning Statement */}
      <section className="grid-container border-bottom">
        <div 
          className="border-right mobile-padding" 
          style={{ gridColumn: 'span 6', padding: '6rem 4rem', display: 'flex', alignItems: 'center' }}
        >
          <h2 className="display-medium" style={{ margin: 0 }}>
            HERITAGE<br/>MEETS MODERN<br/><span className="text-accent" style={{ WebkitTextStroke: '1px transparent' }}>LUXURY</span>.
          </h2>
        </div>
        <div 
          className="mobile-padding" 
          style={{ gridColumn: 'span 6', padding: '6rem 4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '2rem' }}
        >
          <p className="lead-text">
            I'm Uncle Dodi. I am an editorial model, stylist, and creative muse. I partner with forward-thinking designers and artisans to frame culture and styling as wearable art.
          </p>
          <p style={{ opacity: 0.7, fontSize: '1.1rem' }}>
            My approach merges heritage storytelling with a bold, contemporary vintage edge. Every pose, fabric fold, and raw brass accent is composed with precision to create visuals that don't just showcase clothing, but command the frame.
          </p>
        </div>
      </section>

      {/* Selected Work Showcase */}
      <section className="border-bottom">
        <div className="grid-container border-bottom">
          <div style={{ gridColumn: 'span 12', padding: '2rem 4rem' }}>
            <span style={{ fontSize: '1.2rem', fontFamily: 'var(--font-display)', fontWeight: 800 }}>SELECTED CAMPAIGNS</span>
          </div>
        </div>

        {selectedProjects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={project.id} className="grid-container border-bottom">
              {/* If even: details left, image right. If odd: details right, image left */}
              {isEven ? (
                <>
                  <div 
                    className="border-right mobile-padding border-bottom-mobile" 
                    style={{ gridColumn: 'span 5', padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <span style={{ opacity: 0.5, fontWeight: 700, fontSize: '0.9rem' }}>0{index + 1} / EDITORIAL SHOOT</span>
                      <h3 style={{ fontSize: '3rem', margin: 0 }}>{project.title}</h3>
                      <p style={{ opacity: 0.8, fontSize: '1.1rem' }}>{project.deliverable}</p>
                    </div>
                    <div style={{ marginTop: '4rem' }}>
                      <a 
                        href={`#/project/${project.id}`} 
                        onClick={(e) => { e.preventDefault(); onNavigate(`project/${project.id}`); }}
                        onMouseEnter={handleCursorEnter}
                        onMouseLeave={handleCursorLeave}
                        className="btn-primary"
                        style={{ display: 'inline-flex', width: 'auto', minWidth: '200px' }}
                      >
                        VIEW DETAILS ⚡
                      </a>
                    </div>
                  </div>
                  <div 
                    className="mobile-padding" 
                    style={{ gridColumn: 'span 7', padding: '4rem', display: 'flex', alignItems: 'center', background: 'var(--bg-dark)' }}
                  >
                    <div 
                      className="project-card" 
                      onClick={() => onNavigate(`project/${project.id}`)}
                      onMouseEnter={handleCursorEnter}
                      onMouseLeave={handleCursorLeave}
                      style={{ width: '100%', cursor: 'pointer', border: '1px solid var(--color-border)' }}
                    >
                      <div className="project-card-image-wrapper" style={{ aspectRatio: '16/10' }}>
                        {project.heroImage ? (
                          <img src={project.heroImage} alt={project.title} className="project-card-image" />
                        ) : (
                          // Fallback Vector designs
                          <div className="vector-placeholder" style={{ backgroundColor: 'var(--accent-lime)' }}>
                            <div style={{ color: 'var(--bg-dark)', fontFamily: 'var(--font-display)', fontSize: '4rem', fontWeight: 800 }}>ZURIKA</div>
                          </div>
                        )}
                        <div className="project-card-overlay"></div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div 
                    className="border-right mobile-padding border-bottom-mobile" 
                    style={{ gridColumn: 'span 7', padding: '4rem', display: 'flex', alignItems: 'center', background: 'var(--bg-dark)' }}
                  >
                    <div 
                      className="project-card" 
                      onClick={() => onNavigate(`project/${project.id}`)}
                      onMouseEnter={handleCursorEnter}
                      onMouseLeave={handleCursorLeave}
                      style={{ width: '100%', cursor: 'pointer', border: '1px solid var(--color-border)' }}
                    >
                      <div className="project-card-image-wrapper" style={{ aspectRatio: '16/10' }}>
                        {project.heroImage ? (
                          <img src={project.heroImage} alt={project.title} className="project-card-image" />
                        ) : (
                          <div className="vector-placeholder" style={{ backgroundColor: 'var(--accent-pink)' }}>
                            <div style={{ color: 'var(--bg-dark)', fontFamily: 'var(--font-display)', fontSize: '4rem', fontWeight: 800 }}>VINTAGE</div>
                          </div>
                        )}
                        <div className="project-card-overlay"></div>
                      </div>
                    </div>
                  </div>
                  <div 
                    className="mobile-padding" 
                    style={{ gridColumn: 'span 5', padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <span style={{ opacity: 0.5, fontWeight: 700, fontSize: '0.9rem' }}>0{index + 1} / EDITORIAL SHOOT</span>
                      <h3 style={{ fontSize: '3rem', margin: 0 }}>{project.title}</h3>
                      <p style={{ opacity: 0.8, fontSize: '1.1rem' }}>{project.deliverable}</p>
                    </div>
                    <div style={{ marginTop: '4rem' }}>
                      <a 
                        href={`#/project/${project.id}`} 
                        onClick={(e) => { e.preventDefault(); onNavigate(`project/${project.id}`); }}
                        onMouseEnter={handleCursorEnter}
                        onMouseLeave={handleCursorLeave}
                        className="btn-primary"
                        style={{ display: 'inline-flex', width: 'auto', minWidth: '200px' }}
                      >
                        VIEW DETAILS ⚡
                      </a>
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </section>

      {/* Marquee Section */}
      <section className="marquee-container border-bottom" style={{ background: 'var(--color-accent)', color: 'var(--bg-dark)', transition: 'background-color var(--transition-slow), color var(--transition-slow)' }}>
        <div className="marquee-content">
          <div className="marquee-text">EDITORIAL MODELING ⚡</div>
          <div className="marquee-text">SARTORIAL STYLING ⚡</div>
          <div className="marquee-text">CREATIVE DIRECTION ⚡</div>
          <div className="marquee-text">RAW BRASS DESIGN ⚡</div>
          <div className="marquee-text">HERITAGE STORYTELLING ⚡</div>
          <div className="marquee-text">AFRO VINTAGE ⚡</div>
          <div className="marquee-text">EDITORIAL MODELING ⚡</div>
          <div className="marquee-text">SARTORIAL STYLING ⚡</div>
          <div className="marquee-text">CREATIVE DIRECTION ⚡</div>
          <div className="marquee-text">RAW BRASS DESIGN ⚡</div>
          <div className="marquee-text">HERITAGE STORYTELLING ⚡</div>
          <div className="marquee-text">AFRO VINTAGE ⚡</div>
        </div>
      </section>

      {/* Trust Grid */}
      <section className="border-bottom">
        <div className="grid-container border-bottom">
          <div style={{ gridColumn: 'span 12', padding: '2rem 4rem' }}>
            <span style={{ fontSize: '1.2rem', fontFamily: 'var(--font-display)', fontWeight: 800 }}>CREATIVE COLLABORATORS & DESIGNERS</span>
          </div>
        </div>
        <div className="grid-container">
          <div 
            className="border-right border-bottom-mobile mobile-padding" 
            style={{ gridColumn: 'span 3', padding: '3rem', textAlign: 'center', fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-display)', opacity: 0.5 }}
          >
            ZURIKA BY WAMBUI
          </div>
          <div 
            className="border-right border-bottom-mobile mobile-padding" 
            style={{ gridColumn: 'span 3', padding: '3rem', textAlign: 'center', fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-display)', opacity: 0.5 }}
          >
            AFRO-VINTAGE CO.
          </div>
          <div 
            className="border-right border-bottom-mobile mobile-padding" 
            style={{ gridColumn: 'span 3', padding: '3rem', textAlign: 'center', fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-display)', opacity: 0.5 }}
          >
            GAITAN WARDROBE
          </div>
          <div 
            className="mobile-padding" 
            style={{ gridColumn: 'span 3', padding: '3rem', textAlign: 'center', fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-display)', opacity: 0.5 }}
          >
            JERALDS PHOTOGRAPHY
          </div>
        </div>
      </section>
    </div>
  );
}
