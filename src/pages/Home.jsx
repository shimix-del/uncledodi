import React, { useState, useRef } from 'react';
import { projects } from '../data/projects';

export default function Home({ onNavigate }) {
  const selectedProjects = projects.slice(0, 4); // Take all 4 styling/modeling projects for the homepage
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const handleCursorEnter = () => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) cursor.classList.add('hovering');
  };

  const handleCursorLeave = () => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) cursor.classList.remove('hovering');
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="grid-container border-bottom" style={{ minHeight: 'calc(100vh - 75px)', position: 'relative' }}>
        <div 
          className="border-right mobile-padding" 
          style={{ 
            gridColumn: 'span 7', 
            padding: '5rem 4rem', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <span className="live-status-pill">
                <span className="live-dot" /> LIVE REEL ARCHIVE
              </span>
              <span className="meta-label">
                UNCLE DODI / EDITORIAL MUSE
              </span>
            </div>

            <div style={{ margin: '2rem 0' }}>
              <h1 className="display-huge" style={{ margin: 0 }}>
                THE MUSE<br/>
                THAT COMMANDS<br/>
                <span className="text-outline">THE FRAME.</span>
              </h1>
            </div>

            <p className="lead-text" style={{ maxWidth: '580px', opacity: 0.9, marginBottom: '2.5rem' }}>
              Framing African heritage, raw brass statement jewellery, and high-fashion movement in structural, high-contrast visual narratives.
            </p>
          </div>

          <div>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <a 
                href="#/work" 
                onClick={(e) => { e.preventDefault(); onNavigate('work'); }}
                onMouseEnter={handleCursorEnter}
                onMouseLeave={handleCursorLeave}
                className="btn-primary"
                style={{ maxWidth: '280px' }}
              >
                EXPLORE CAMPAIGNS ⚡
              </a>
              <a 
                href="https://www.instagram.com/reel/DD_e00iIQmy/?igsh=eTJseHoweHpjZWVs&igsi=eTJseHoweHpjZWVs"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={handleCursorEnter}
                onMouseLeave={handleCursorLeave}
                className="btn-secondary"
                style={{ maxWidth: '280px' }}
              >
                INSTAGRAM REEL ↗
              </a>
            </div>

            <div className="hero-stats-row">
              <div className="hero-stat-item">
                <span className="stat-number">01</span>
                <span className="stat-label">EDITORIAL STYLING</span>
              </div>
              <div className="hero-stat-item">
                <span className="stat-number">02</span>
                <span className="stat-label">RAW BRASS & DRAPING</span>
              </div>
              <div className="hero-stat-item">
                <span className="stat-number">03</span>
                <span className="stat-label">CAMPAIGN DIRECTION</span>
              </div>
            </div>
          </div>
        </div>

        <div 
          className="mobile-padding" 
          style={{ 
            gridColumn: 'span 5', 
            padding: '3.5rem 2.5rem', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center',
            alignItems: 'center',
            background: 'var(--bg-dark)',
            position: 'relative'
          }}
        >
          {/* Live Reel Video Card */}
          <div className="hero-video-card">
            <div className="hero-video-wrapper">
              <video
                ref={videoRef}
                src="/assets/hero_video.mp4"
                poster="/assets/dodi_portrait.jpg"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="hero-video-media"
                onClick={togglePlay}
              />
              
              {/* Top Glass Tag */}
              <div className="hero-video-top-tag">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span className="live-dot-red" />
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.08em' }}>LIVE / @UNCLE_DODI</span>
                </div>
                <div>
                  <button 
                    onClick={toggleMute} 
                    className="video-action-btn"
                    title={isMuted ? "Unmute Audio" : "Mute Audio"}
                    aria-label={isMuted ? "Unmute Audio" : "Mute Audio"}
                  >
                    {isMuted ? (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        🔇 UNMUTE
                      </span>
                    ) : (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-accent)' }}>
                        🔊 SOUND ON
                        <span className="sound-visualizer">
                          <span className="sound-bar bar-1"></span>
                          <span className="sound-bar bar-2"></span>
                          <span className="sound-bar bar-3"></span>
                        </span>
                      </span>
                    )}
                  </button>
                </div>
              </div>

              {/* Center Play Overlay when paused */}
              {!isPlaying && (
                <button 
                  className="hero-video-play-overlay" 
                  onClick={togglePlay}
                  aria-label="Play video"
                >
                  <span>▶</span>
                </button>
              )}

              {/* Bottom Info Overlay */}
              <div className="hero-video-bottom-tag">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-accent)' }}>
                    MOTION & SARTORIAL FORM
                  </span>
                  <span style={{ fontSize: '0.75rem', opacity: 0.85, lineHeight: 1.35 }}>
                    Live styling session featuring handcrafted brass accessories & contemporary vintage silhouette.
                  </span>
                </div>
                <a 
                  href="https://www.instagram.com/reel/DD_e00iIQmy/?igsh=eTJseHoweHpjZWVs&igsi=eTJseHoweHpjZWVs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="reel-link-badge"
                  title="View original reel on Instagram"
                >
                  VIEW ON INSTAGRAM ↗
                </a>
              </div>
            </div>
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
