import React from 'react';
import { projects } from '../data/projects';

export default function CaseStudy({ projectId, onNavigate }) {
  const projectIndex = projects.findIndex((p) => p.id === projectId);
  
  // If project is not found, fallback to home or index
  if (projectIndex === -1) {
    return (
      <div style={{ padding: '8rem 2rem', textAlign: 'center' }}>
        <h2>PROJECT NOT FOUND</h2>
        <button onClick={() => onNavigate('work')} className="btn-primary" style={{ maxWidth: '300px', marginTop: '2rem' }}>RETURN TO WORK</button>
      </div>
    );
  }

  const project = projects[projectIndex];
  const nextProjectIndex = (projectIndex + 1) % projects.length;
  const nextProject = projects[nextProjectIndex];

  const handleCursorEnter = () => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) cursor.classList.add('hovering');
  };

  const handleCursorLeave = () => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) cursor.classList.remove('hovering');
  };

  // Trigger custom transition update for next project
  const handleNextProjectClick = (e) => {
    e.preventDefault();
    onNavigate(`project/${nextProject.id}`, nextProject.accentColor);
  };

  // Render unique custom visuals for projects that do not have generated images
  const renderCustomHeroVisual = () => {
    if (project.heroImage) {
      return (
        <img 
          src={project.heroImage} 
          alt={project.title} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      );
    }

    return (
      <div style={{ width: '100%', height: '100%', backgroundColor: project.accentColor, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1 className="display-large" style={{ color: project.textColor }}>{project.title}</h1>
      </div>
    );
  };

  const renderCustomProcessVisual = () => {
    if (project.processImage) {
      return (
        <img 
          src={project.processImage} 
          alt={`${project.title} process`} 
          style={{ width: '100%', border: '1px solid var(--color-border)', objectFit: 'cover' }}
        />
      );
    }

    if (project.id === 'zurika-jewelry') {
      return (
        <div style={{ border: '1px solid var(--color-border)', padding: '3rem', background: '#1A1C1A', display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
          <span className="meta-label">BRASS MATTE & REFLECTION TESTS</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            <div style={{ background: '#E5C180', height: '100px', padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#131110' }}>
              <span style={{ fontWeight: 800, fontSize: '0.75rem' }}>GOLD-BRASS</span>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, fontFamily: 'var(--font-display)' }}>MATTE</span>
            </div>
            <div style={{ background: '#C5A059', height: '100px', padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#131110' }}>
              <span style={{ fontWeight: 800, fontSize: '0.75rem' }}>POLISHED</span>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, fontFamily: 'var(--font-display)' }}>GLOW</span>
            </div>
            <div style={{ background: '#8C6C30', height: '100px', padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#F7F5F0' }}>
              <span style={{ fontWeight: 800, fontSize: '0.75rem' }}>ANTIQUE</span>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, fontFamily: 'var(--font-display)' }}>PATINA</span>
            </div>
          </div>
          <div style={{ padding: '1.5rem', border: '1px dashed rgba(247, 245, 240, 0.2)', textAlign: 'center' }}>
            <p className="font-serif-italic" style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-accent)' }}>
              "Reflecting warmth through structural metal."
            </p>
            <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>
              Analyzing the shadow fall of thick brass collar necklaces under low directional light.
            </p>
          </div>
        </div>
      );
    }

    if (project.id === 'afro-vintage-sartorial') {
      return (
        <div style={{ border: '1px solid var(--color-border)', padding: '3rem', background: '#241E1C', display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
          <span className="meta-label">TEXTURE & TEXTILE DIALOGUE</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            <div style={{ background: '#C85A32', height: '100px', padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#F7F5F0' }}>
              <span style={{ fontWeight: 800, fontSize: '0.75rem' }}>TERRACOTTA</span>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, fontFamily: 'var(--font-display)' }}>CLAY</span>
            </div>
            <div style={{ background: '#4A3B32', height: '100px', padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#F7F5F0' }}>
              <span style={{ fontWeight: 800, fontSize: '0.75rem' }}>WOOLEN</span>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, fontFamily: 'var(--font-display)' }}>PLAID</span>
            </div>
            <div style={{ background: '#F7F5F0', height: '100px', padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#131110' }}>
              <span style={{ fontWeight: 800, fontSize: '0.75rem' }}>CROCHET</span>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, fontFamily: 'var(--font-display)' }}>IVORY</span>
            </div>
          </div>
          <div style={{ padding: '1.5rem', border: '1px dashed rgba(247, 245, 240, 0.2)', textAlign: 'center' }}>
            <p className="font-serif-italic" style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-accent)' }}>
              "Retro tailoring, heritage print overlays."
            </p>
            <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>
              Pairing structured wool overcoats with organic loose knit fabrics and custom brass button details.
            </p>
          </div>
        </div>
      );
    }

    if (project.id === 'gaitan-drapes') {
      return (
        <div style={{ border: '1px solid var(--color-border)', padding: '3rem', background: '#1B1E1B', display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
          <span className="meta-label">RUNWAY FLOW & MOVEMENT DIAGRAM</span>
          <div style={{ position: 'relative', height: '150px', border: '1px solid rgba(247, 245, 240, 0.1)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.1, display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)' }}>
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} style={{ borderRight: '1px solid var(--color-text)', height: '100%' }}></div>
              ))}
            </div>
            <svg width="80%" height="80%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 50 Q 30 20, 50 50 T 90 50" stroke="var(--color-accent)" strokeWidth="3" strokeDasharray="3 3" fill="none" />
              <path d="M50 50 Q 60 70, 70 50" stroke="var(--color-text)" strokeWidth="1" fill="none" />
              <circle cx="10" cy="50" r="4" fill="var(--color-accent)" />
              <circle cx="50" cy="50" r="4" fill="var(--color-text)" />
              <circle cx="90" cy="50" r="4" fill="var(--color-accent)" />
            </svg>
          </div>
          <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>
            Plotting the slow, curving turns of fluid gender-neutral draping under spotlights to maximize fabric flight.
          </p>
        </div>
      );
    }

    if (project.id === 'true-colours-visuals') {
      return (
        <div style={{ border: '1px solid var(--color-border)', padding: '3rem', background: '#181B1E', display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
          <span className="meta-label">LIGHTING & GEL ANGLE SCHEMA</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div style={{ border: '1px solid rgba(247,245,240,0.1)', padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#C85A32', boxShadow: '0 0 15px #C85A32' }}></div>
              <span style={{ fontSize: '0.8rem', fontWeight: 800 }}>AMBER KEY</span>
            </div>
            <div style={{ border: '1px solid rgba(247,245,240,0.1)', padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#2D3D4E', boxShadow: '0 0 15px #2D3D4E' }}></div>
              <span style={{ fontSize: '0.8rem', fontWeight: 800 }}>INDIGO FILL</span>
            </div>
          </div>
          <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>
            Testing high-contrast dual lighting overlays on dark wool textures to mirror the track orchestration.
          </p>
        </div>
      );
    }

    return (
      <div style={{ height: '200px', border: '1px dashed var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.5 }}>
        No process details available.
      </div>
    );
  };

  return (
    <div className="page-wrapper">
      {/* Full bleed Hero Image */}
      <section style={{ height: '70vh', width: '100%', position: 'relative', overflow: 'hidden' }}>
        {renderCustomHeroVisual()}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          padding: '4rem',
          background: 'linear-gradient(to top, rgba(19,17,16,1) 0%, rgba(19,17,16,0.7) 50%, rgba(19,17,16,0) 100%)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }} className="p-container">
          <span style={{ fontSize: '1rem', fontWeight: 800, letterSpacing: '0.1em', color: project.accentColor }}>CAMPAIGN PROFILE</span>
          <h1 className="display-large" style={{ margin: 0, color: 'var(--bg-light)' }}>{project.title}</h1>
        </div>
      </section>

      {/* Case Details Block */}
      <section className="grid-container border-bottom">
        {/* Left Column: Metadata */}
        <div 
          className="border-right mobile-padding border-bottom-mobile" 
          style={{ gridColumn: 'span 4', padding: '4rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
        >
          <div>
            <span style={{ opacity: 0.5, display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.5rem' }}>CREATIVE PARTNER</span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.4rem' }}>{project.client}</span>
          </div>

          <div>
            <span style={{ opacity: 0.5, display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.5rem' }}>ROLE & SERVICE</span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.4rem', lineHeight: 1.1 }}>{project.deliverable}</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div>
              <span style={{ opacity: 0.5, display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.5rem' }}>YEAR</span>
              <span style={{ fontWeight: 700 }}>{project.year}</span>
            </div>
            <div>
              <span style={{ opacity: 0.5, display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.5rem' }}>TIMELINE</span>
              <span style={{ fontWeight: 700 }}>{project.timeline}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Challenge & Solution */}
        <div 
          className="mobile-padding" 
          style={{ gridColumn: 'span 8', padding: '4rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}
        >
          <div>
            <h3 style={{ fontSize: '1.8rem', color: project.accentColor, marginBottom: '1rem' }}>THE CAMPAIGN BRIEF</h3>
            <p className="lead-text">{project.challenge}</p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--color-text)', marginBottom: '1rem' }}>THE STYLING SOLUTION</h3>
            <p style={{ fontSize: '1.1rem', opacity: 0.8 }}>{project.solution}</p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="grid-container border-bottom">
        <div 
          className="border-right mobile-padding border-bottom-mobile" 
          style={{ gridColumn: 'span 5', padding: '4rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}
        >
          <span style={{ fontSize: '1rem', fontWeight: 800, letterSpacing: '0.1em', color: project.accentColor }}>01 / THE DETAILS</span>
          <h2 style={{ fontSize: '2.5rem', lineHeight: 1 }}>SHAPING THE AESTHETIC</h2>
          <p style={{ opacity: 0.8 }}>{project.process.brief}</p>
          <p style={{ opacity: 0.6, fontSize: '0.95rem' }}>{project.process.sketchesDescription}</p>
        </div>
        <div 
          className="mobile-padding" 
          style={{ gridColumn: 'span 7', padding: '4rem', display: 'flex', alignItems: 'center', background: 'var(--bg-dark)' }}
        >
          {renderCustomProcessVisual()}
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="grid-container border-bottom">
        <div 
          className="border-right mobile-padding border-bottom-mobile" 
          style={{ gridColumn: 'span 5', padding: '4rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}
        >
          <span style={{ fontSize: '1rem', fontWeight: 800, letterSpacing: '0.1em', color: project.accentColor }}>02 / THE OUTCOME</span>
          <h2 style={{ fontSize: '2.5rem', lineHeight: 1 }}>VISUAL CHECKLIST</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            {project.process.deliverables.map((item, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ width: '1.5rem', height: '1.5rem', backgroundColor: project.accentColor, color: '#131110', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.9rem', borderRadius: '50%' }}>
                  ✓
                </span>
                <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Final output visual display */}
        <div 
          className="mobile-padding" 
          style={{ 
            gridColumn: 'span 7', 
            padding: '4rem', 
            background: 'var(--bg-dark)', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            gap: '2rem', 
            borderLeft: '1px solid var(--color-border)',
            alignItems: 'center'
          }}
        >
          <div style={{ width: '100%', padding: '2rem', border: '1px solid var(--color-border)', backgroundColor: '#181615', textAlign: 'center' }}>
            <span style={{ opacity: 0.5, fontSize: '0.8rem', display: 'block', marginBottom: '1rem' }}>CREATIVE ATTRIBUTES</span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
              <div style={{ background: 'var(--bg-dark)', padding: '2rem', border: '1px solid var(--color-border)' }}>
                <span style={{ fontWeight: 800, color: project.accentColor }}>STYLING</span>
              </div>
              <div style={{ background: 'var(--bg-dark)', padding: '2rem', border: '1px solid var(--color-border)' }}>
                <span style={{ fontWeight: 800, color: project.accentColor }}>MOVEMENT</span>
              </div>
              <div style={{ background: 'var(--bg-dark)', padding: '2rem', border: '1px solid var(--color-border)' }}>
                <span style={{ fontWeight: 800, color: project.accentColor }}>HERITAGE</span>
              </div>
              <div style={{ background: 'var(--bg-dark)', padding: '2rem', border: '1px solid var(--color-border)' }}>
                <span style={{ fontWeight: 800, color: project.accentColor }}>EDITORIAL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Case Study Navigation */}
      <section className="grid-container" style={{ background: nextProject.accentColor, color: nextProject.textColor, borderBottom: '1px solid var(--color-border)' }}>
        <a 
          href={`#/project/${nextProject.id}`}
          onClick={handleNextProjectClick}
          onMouseEnter={handleCursorEnter}
          onMouseLeave={handleCursorLeave}
          style={{ 
            gridColumn: 'span 12', 
            padding: '8rem 4rem', 
            textAlign: 'center', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '1rem',
            cursor: 'pointer'
          }}
        >
          <span style={{ fontSize: '1rem', letterSpacing: '0.2em', fontWeight: 800, opacity: 0.7 }}>NEXT CAMPAIGN</span>
          <h2 className="display-large" style={{ margin: 0, color: nextProject.textColor }}>{nextProject.title} ⚡</h2>
          <span style={{ fontSize: '1.2rem', fontWeight: 700, textDecoration: 'underline' }}>CLICK TO WIPE VIEW</span>
        </a>
      </section>
    </div>
  );
}
