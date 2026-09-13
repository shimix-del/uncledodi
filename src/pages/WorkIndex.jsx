import React, { useState } from 'react';
import { projects } from '../data/projects';

export default function WorkIndex({ onNavigate }) {
  const [filter, setFilter] = useState('ALL');
  
  const services = ['ALL', 'MODELING', 'STYLING', 'DIRECTION'];

  const filteredProjects = filter === 'ALL' 
    ? projects 
    : projects.filter(p => p.service.toUpperCase().includes(filter));

  const handleCursorEnter = () => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) cursor.classList.add('hovering');
  };

  const handleCursorLeave = () => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) cursor.classList.remove('hovering');
  };

  return (
    <div className="border-bottom page-wrapper">
      {/* Title / Filter Bar */}
      <section className="grid-container border-bottom">
        <div 
          className="border-right mobile-padding" 
          style={{ gridColumn: 'span 5', padding: '5rem 4rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          <span style={{ fontSize: '1rem', fontWeight: 800, letterSpacing: '0.1em', color: 'var(--color-accent)' }}>
            INDEX / OF / WORK
          </span>
          <h1 className="display-medium" style={{ margin: 0 }}>SELECTED CAMPAIGNS.</h1>
        </div>
        
        <div 
          className="mobile-padding" 
          style={{ gridColumn: 'span 7', padding: '5rem 4rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'flex-end', justifyContent: 'flex-end' }}
        >
          {services.map(service => (
            <button
              key={service}
              onClick={() => setFilter(service)}
              onMouseEnter={handleCursorEnter}
              onMouseLeave={handleCursorLeave}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.2rem',
                padding: '0.75rem 1.5rem',
                border: `2px solid ${filter === service ? 'var(--color-accent)' : 'var(--color-border)'}`,
                color: filter === service ? 'var(--color-accent)' : 'inherit',
                backgroundColor: 'transparent',
                transition: 'border-color var(--transition-fast), color var(--transition-fast)'
              }}
            >
              {service}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="grid-container" style={{ minHeight: '500px' }}>
        {filteredProjects.map((project, idx) => {
          const gridColSpan = idx % 3 === 0 ? 'span 8' : 'span 4';
          const isSpan8 = gridColSpan === 'span 8';
          
          return (
            <div 
              key={project.id}
              className={`border-right border-bottom mobile-padding`}
              style={{ 
                gridColumn: gridColSpan, 
                padding: '3rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '2rem'
              }}
            >
              {/* Card visual wrapper */}
              <div 
                className="project-card"
                onClick={() => onNavigate(`project/${project.id}`)}
                onMouseEnter={handleCursorEnter}
                onMouseLeave={handleCursorLeave}
                style={{ cursor: 'pointer', border: '1px solid var(--color-border)', width: '100%' }}
              >
                <div className="project-card-image-wrapper" style={{ aspectRatio: isSpan8 ? '16/9' : '4/3' }}>
                  {project.heroImage ? (
                    <img 
                      src={project.heroImage} 
                      alt={project.title} 
                      className="project-card-image"
                    />
                  ) : (
                    <div className="vector-placeholder" style={{ backgroundColor: project.accentColor }}>
                      <span style={{ color: '#131110', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '2.5rem' }}>{project.title.split(' ')[0]}</span>
                    </div>
                  )}
                  <div className="project-card-overlay"></div>
                </div>
              </div>

              {/* Card textual info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, opacity: 0.6, letterSpacing: '0.05em' }}>
                        {project.client}
                      </span>
                      {project.date && (
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, padding: '0.15rem 0.45rem', background: 'rgba(255,255,255,0.08)', color: project.accentColor }}>
                          {project.date}
                        </span>
                      )}
                    </div>
                    <h3 style={{ fontSize: '2.2rem', margin: 0, lineHeight: 1 }}>{project.title}</h3>
                    <p style={{ opacity: 0.85, fontSize: '1rem', margin: 0 }}>{project.deliverable}</p>
                  </div>
                  
                  {/* Visual Swatches for project colors */}
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <span 
                      style={{ width: '1.25rem', height: '1.25rem', backgroundColor: project.accentColor, borderRadius: '50%', border: '1px solid var(--color-border)' }} 
                      title="Primary Campaign Accent"
                    />
                    <span 
                      style={{ width: '1.25rem', height: '1.25rem', backgroundColor: '#131110', borderRadius: '50%', border: '1px solid var(--color-border)' }} 
                      title="Deep Charcoal Background"
                    />
                  </div>
                </div>

                {project.venue && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', opacity: 0.8 }}>
                    <span style={{ color: project.accentColor }}>📍</span>
                    <span>{project.venue}</span>
                  </div>
                )}

                {project.theme && (
                  <div style={{ fontSize: '0.85rem', opacity: 0.75, fontStyle: 'italic' }}>
                    Theme: {project.theme}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
