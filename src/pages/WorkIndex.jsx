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
      <section className="grid-container border-bottom work-filter-section">
        <div 
          className="border-right mobile-padding work-filter-header" 
          style={{ gridColumn: 'span 5', padding: '5rem 4rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          <span style={{ fontSize: '1rem', fontWeight: 800, letterSpacing: '0.1em', color: 'var(--color-accent)' }}>
            INDEX / OF / WORK
          </span>
          <h1 className="display-medium" style={{ margin: 0 }}>SELECTED CAMPAIGNS.</h1>
        </div>
        
        <div 
          className="mobile-padding work-filter-buttons" 
          style={{ gridColumn: 'span 7', padding: '5rem 4rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'flex-end', justifyContent: 'flex-end' }}
        >
          {services.map(service => (
            <button
              key={service}
              type="button"
              onClick={() => setFilter(service)}
              onMouseEnter={handleCursorEnter}
              onMouseLeave={handleCursorLeave}
              className={`work-filter-btn ${filter === service ? 'active' : ''}`}
            >
              {service}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="work-projects-grid">
        {filteredProjects.map((project, idx) => {
          const isLarge = idx % 3 === 0;
          return (
            <div 
              key={project.id}
              className={`work-project-card-container ${isLarge ? 'card-large' : 'card-small'} border-bottom border-right`}
            >
              {/* Card visual wrapper */}
              <div 
                className="project-card"
                onClick={() => onNavigate(`project/${project.id}`)}
                onMouseEnter={handleCursorEnter}
                onMouseLeave={handleCursorLeave}
                style={{ cursor: 'pointer', border: '1px solid var(--color-border)', width: '100%' }}
              >
                <div className="project-card-image-wrapper">
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
              <div className="work-project-info">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, opacity: 0.65, letterSpacing: '0.05em' }}>
                        {project.client}
                      </span>
                      {project.date && (
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, padding: '0.15rem 0.45rem', background: 'rgba(255,255,255,0.08)', color: project.accentColor }}>
                          {project.date}
                        </span>
                      )}
                    </div>
                    <h3 className="work-project-title">{project.title}</h3>
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
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', opacity: 0.85 }}>
                    <span style={{ color: project.accentColor }}>📍</span>
                    <span>{project.venue}</span>
                  </div>
                )}

                {project.theme && (
                  <div style={{ fontSize: '0.85rem', opacity: 0.8, fontStyle: 'italic' }}>
                    Theme: {project.theme}
                  </div>
                )}

                <div style={{ marginTop: '0.5rem' }}>
                  <button 
                    type="button"
                    onClick={() => onNavigate(`project/${project.id}`)}
                    className="btn-secondary"
                    style={{ width: '100%', padding: '0.85rem 1.25rem', fontSize: '0.95rem' }}
                  >
                    VIEW CAMPAIGN ⚡
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
