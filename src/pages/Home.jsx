import React, { useEffect, useRef } from 'react';
import { projects } from '../data/projects';

export default function Home({ onNavigate }) {
  const videoRef = useRef(null);

  const handleCursorEnter = () => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) cursor.classList.add('hovering');
  };

  const handleCursorLeave = () => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) cursor.classList.remove('hovering');
  };

  // Video autoplay with sound: attempt unmuted playback; if browser blocks, fallback to muted and unmute on first user interaction
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Browser prevented unmuted autoplay, play muted first
        video.muted = true;
        video.play().catch(() => {});

        // Unmute automatically on first user gesture
        const unmuteOnUserGesture = () => {
          if (video) {
            video.muted = false;
            video.play().catch(() => {});
          }
          window.removeEventListener('click', unmuteOnUserGesture);
          window.removeEventListener('touchstart', unmuteOnUserGesture);
          window.removeEventListener('scroll', unmuteOnUserGesture);
          window.removeEventListener('keydown', unmuteOnUserGesture);
        };

        window.addEventListener('click', unmuteOnUserGesture, { once: true });
        window.addEventListener('touchstart', unmuteOnUserGesture, { once: true });
        window.addEventListener('scroll', unmuteOnUserGesture, { once: true });
        window.addEventListener('keydown', unmuteOnUserGesture, { once: true });
      });
    }
  }, []);

  return (
    <div className="page-wrapper">
      {/* Full-Bleed Cover Video Hero Section */}
      <section className="hero-fullbleed-section border-bottom">
        {/* Hero Background Video Layer */}
        <div className="hero-bg-video-wrapper">
          <video
            ref={videoRef}
            src="/assets/hero_video.mp4"
            poster="/assets/dodi_portrait.jpg"
            autoPlay
            loop
            playsInline
            controlsList="nodownload nofullscreen noremoteplayback"
            disablePictureInPicture
            disableRemotePlayback
            onContextMenu={(e) => e.preventDefault()}
            className="hero-bg-video-element"
          />
          <div className="hero-bg-overlay-gradient" />
        </div>

        {/* Foreground Content Layer */}
        <div className="hero-content-layer">
          {/* Top Row: Meta Status & Link */}
          <div className="hero-top-row">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
              <span className="live-status-pill">
                <span className="live-dot" /> LIVE COVER REEL
              </span>
              <span className="meta-label">
                DODI TOM (UNCLE DODI) / HIGH FASHION MUSE & CREATIVE VISIONARY
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <a 
                href="https://www.instagram.com/reel/DSJ1OfJjdqq/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="reel-link-badge"
                title="Watch Cover Reel on Instagram"
                onMouseEnter={handleCursorEnter}
                onMouseLeave={handleCursorLeave}
              >
                WATCH ON INSTAGRAM ↗
              </a>
            </div>
          </div>

          {/* Center Main Headline & Call to Action */}
          <div className="hero-center-row">
            <div>
              <div style={{ display: 'inline-block', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.95rem', fontWeight: 800, letterSpacing: '0.2em', color: 'var(--color-accent)', textTransform: 'uppercase' }}>
                  ⚡ NORMAL IS BORING ⚡
                </span>
              </div>
              <h1 className="display-huge" style={{ margin: 0, textTransform: 'uppercase' }}>
                THE MUSE THAT<br/>
                COMMANDS <span className="text-outline">THE FRAME.</span>
              </h1>
            </div>

            <p className="lead-text" style={{ maxWidth: '720px', opacity: 0.95, textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
              High-fashion & commercial modeling, androgynous runway presence, and eclectic upcycled sartorial styling. Brightening every space in this section of the Milky Way.
            </p>

            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', flexWrap: 'wrap', marginTop: '0.5rem' }}>
              <a 
                href="#/work" 
                onClick={(e) => { e.preventDefault(); onNavigate('work'); }}
                onMouseEnter={handleCursorEnter}
                onMouseLeave={handleCursorLeave}
                className="btn-primary"
                style={{ maxWidth: '280px', padding: '1.2rem 2rem' }}
              >
                EXPLORE CAMPAIGNS ⚡
              </a>
              <a 
                href="https://www.instagram.com/reel/DSJ1OfJjdqq/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={handleCursorEnter}
                onMouseLeave={handleCursorLeave}
                className="btn-secondary"
                style={{ maxWidth: '280px', padding: '1.2rem 2rem', backgroundColor: 'rgba(19, 17, 16, 0.75)', backdropFilter: 'blur(8px)' }}
              >
                FEATURED REEL ↗
              </a>
            </div>
          </div>

          {/* Bottom Grid Bar: Stats & Campaign Highlights */}
          <div className="hero-bottom-bar">
            <div className="hero-bottom-item">
              <span className="stat-number">01</span>
              <span className="stat-label">ANDROGYNOUS RUNWAY & EDITORIAL MUSE</span>
            </div>
            <div className="hero-bottom-item">
              <span className="stat-number">02</span>
              <span className="stat-label">ECLECTIC & UPCYCLED SARTORIAL STYLING</span>
            </div>
            <div className="hero-bottom-item">
              <span className="stat-number">03</span>
              <span className="stat-label">THE LIKIZO COLLECTION & MALINDI RESORT</span>
            </div>
            <div className="hero-bottom-item">
              <span className="stat-number">04</span>
              <span className="stat-label">TAO EXODUS & NOMADIC DYSTOPIA</span>
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
            NORMAL IS<br/>BORING.<br/><span className="text-accent" style={{ WebkitTextStroke: '1px transparent' }}>EXTRAORDINARY</span><br/>IS EVERYTHING.
          </h2>
        </div>
        <div 
          className="mobile-padding" 
          style={{ gridColumn: 'span 6', padding: '6rem 4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '2rem' }}
        >
          <p className="lead-text">
            I'm Dodi Tom (Uncle Dodi). A passionate creator, high-fashion muse, and eclectic stylist who embraces everything quirky, bold, and unconventional.
          </p>
          <p style={{ opacity: 0.85, fontSize: '1.1rem', lineHeight: 1.7 }}>
            Having turned early teasing for androgynous looks into fuel for fearless artistic expression, I believe a model's purpose is to carry a story and brighten days in this section of the Milky Way. From the runway of The Likizo Collection to the coastal sands of Malindi and the nomadic dystopia of Tao Exodus, every drape, pose, and upcycled accent is crafted to command the frame.
          </p>
        </div>
      </section>

      {/* Selected Work Showcase */}
      <section className="border-bottom">
        <div className="grid-container border-bottom">
          <div style={{ gridColumn: 'span 12', padding: '2rem 4rem' }}>
            <span style={{ fontSize: '1.2rem', fontFamily: 'var(--font-display)', fontWeight: 800 }}>SELECTED CAMPAIGNS & SHOWCASES</span>
          </div>
        </div>

        {projects.map((project, index) => {
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
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                        <span style={{ opacity: 0.5, fontWeight: 700, fontSize: '0.85rem' }}>0{index + 1} / EDITORIAL CAMPAIGN</span>
                        {project.date && (
                          <span style={{ fontSize: '0.75rem', fontWeight: 800, padding: '0.2rem 0.6rem', background: 'rgba(255,255,255,0.08)', color: project.accentColor }}>
                            {project.date}
                          </span>
                        )}
                      </div>

                      <h3 style={{ fontSize: '2.4rem', margin: 0, lineHeight: 1 }}>{project.title}</h3>
                      <p style={{ opacity: 0.85, fontSize: '1.1rem', margin: 0 }}>{project.deliverable}</p>

                      {project.venue && (
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', opacity: 0.9, fontSize: '0.9rem' }}>
                          <span style={{ color: project.accentColor }}>📍</span>
                          <span><strong>Venue:</strong> {project.venue}</span>
                        </div>
                      )}

                      {project.theme && (
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', opacity: 0.9, fontSize: '0.9rem' }}>
                          <span style={{ color: project.accentColor }}>⚡</span>
                          <span><strong>Theme:</strong> {project.theme}</span>
                        </div>
                      )}

                      {project.comment && (
                        <div style={{ borderLeft: `2px solid ${project.accentColor}`, paddingLeft: '1rem', marginTop: '0.5rem' }}>
                          <p className="font-serif-italic" style={{ fontSize: '1rem', opacity: 0.95, margin: 0 }}>
                            {project.comment}
                          </p>
                        </div>
                      )}
                    </div>

                    <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      <a 
                        href={`#/project/${project.id}`} 
                        onClick={(e) => { e.preventDefault(); onNavigate(`project/${project.id}`); }}
                        onMouseEnter={handleCursorEnter}
                        onMouseLeave={handleCursorLeave}
                        className="btn-primary"
                        style={{ display: 'inline-flex', width: 'auto', minWidth: '180px', padding: '1rem 1.8rem', fontSize: '1.1rem' }}
                      >
                        VIEW CAMPAIGN ⚡
                      </a>
                      {project.instagramLink && (
                        <a 
                          href={project.instagramLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onMouseEnter={handleCursorEnter}
                          onMouseLeave={handleCursorLeave}
                          className="btn-secondary"
                          style={{ display: 'inline-flex', width: 'auto', padding: '1rem 1.4rem', fontSize: '0.95rem' }}
                        >
                          INSTAGRAM ↗
                        </a>
                      )}
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
                          <div className="vector-placeholder" style={{ backgroundColor: project.accentColor }}>
                            <div style={{ color: 'var(--bg-dark)', fontFamily: 'var(--font-display)', fontSize: '4rem', fontWeight: 800 }}>{project.title}</div>
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
                          <div className="vector-placeholder" style={{ backgroundColor: project.accentColor }}>
                            <div style={{ color: 'var(--bg-dark)', fontFamily: 'var(--font-display)', fontSize: '4rem', fontWeight: 800 }}>{project.title}</div>
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
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                        <span style={{ opacity: 0.5, fontWeight: 700, fontSize: '0.85rem' }}>0{index + 1} / EDITORIAL CAMPAIGN</span>
                        {project.date && (
                          <span style={{ fontSize: '0.75rem', fontWeight: 800, padding: '0.2rem 0.6rem', background: 'rgba(255,255,255,0.08)', color: project.accentColor }}>
                            {project.date}
                          </span>
                        )}
                      </div>

                      <h3 style={{ fontSize: '2.4rem', margin: 0, lineHeight: 1 }}>{project.title}</h3>
                      <p style={{ opacity: 0.85, fontSize: '1.1rem', margin: 0 }}>{project.deliverable}</p>

                      {project.venue && (
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', opacity: 0.9, fontSize: '0.9rem' }}>
                          <span style={{ color: project.accentColor }}>📍</span>
                          <span><strong>Venue:</strong> {project.venue}</span>
                        </div>
                      )}

                      {project.theme && (
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', opacity: 0.9, fontSize: '0.9rem' }}>
                          <span style={{ color: project.accentColor }}>⚡</span>
                          <span><strong>Theme:</strong> {project.theme}</span>
                        </div>
                      )}

                      {project.comment && (
                        <div style={{ borderLeft: `2px solid ${project.accentColor}`, paddingLeft: '1rem', marginTop: '0.5rem' }}>
                          <p className="font-serif-italic" style={{ fontSize: '1rem', opacity: 0.95, margin: 0 }}>
                            {project.comment}
                          </p>
                        </div>
                      )}
                    </div>

                    <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      <a 
                        href={`#/project/${project.id}`} 
                        onClick={(e) => { e.preventDefault(); onNavigate(`project/${project.id}`); }}
                        onMouseEnter={handleCursorEnter}
                        onMouseLeave={handleCursorLeave}
                        className="btn-primary"
                        style={{ display: 'inline-flex', width: 'auto', minWidth: '180px', padding: '1rem 1.8rem', fontSize: '1.1rem' }}
                      >
                        VIEW CAMPAIGN ⚡
                      </a>
                      {project.instagramLink && (
                        <a 
                          href={project.instagramLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onMouseEnter={handleCursorEnter}
                          onMouseLeave={handleCursorLeave}
                          className="btn-secondary"
                          style={{ display: 'inline-flex', width: 'auto', padding: '1rem 1.4rem', fontSize: '0.95rem' }}
                        >
                          INSTAGRAM ↗
                        </a>
                      )}
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
          <div className="marquee-text">MALINDI FASHION ⚡</div>
          <div className="marquee-text">THE LIKIZO COLLECTION ⚡</div>
          <div className="marquee-text">TAO EXODUS ⚡</div>
          <div className="marquee-text">POP LEATHER & SUNSET ⚡</div>
          <div className="marquee-text">EDITORIAL MODELING ⚡</div>
          <div className="marquee-text">SARTORIAL STYLING ⚡</div>
          <div className="marquee-text">MALINDI FASHION ⚡</div>
          <div className="marquee-text">THE LIKIZO COLLECTION ⚡</div>
          <div className="marquee-text">TAO EXODUS ⚡</div>
          <div className="marquee-text">POP LEATHER & SUNSET ⚡</div>
        </div>
      </section>

      {/* Collaborators Grid */}
      <section className="border-bottom">
        <div className="grid-container border-bottom">
          <div style={{ gridColumn: 'span 12', padding: '2rem 4rem' }}>
            <span style={{ fontSize: '1.2rem', fontFamily: 'var(--font-display)', fontWeight: 800 }}>FEATURED CAMPAIGNS & COLLABORATORS</span>
          </div>
        </div>
        <div className="grid-container">
          <div 
            className="border-right border-bottom-mobile mobile-padding" 
            style={{ gridColumn: 'span 3', padding: '3rem', textAlign: 'center', fontSize: '1.4rem', fontWeight: 800, fontFamily: 'var(--font-display)', opacity: 0.8 }}
          >
            THE LIKIZO COLLECTION
          </div>
          <div 
            className="border-right border-bottom-mobile mobile-padding" 
            style={{ gridColumn: 'span 3', padding: '3rem', textAlign: 'center', fontSize: '1.4rem', fontWeight: 800, fontFamily: 'var(--font-display)', opacity: 0.8 }}
          >
            MALINDI FASHION WEEK
          </div>
          <div 
            className="border-right border-bottom-mobile mobile-padding" 
            style={{ gridColumn: 'span 3', padding: '3rem', textAlign: 'center', fontSize: '1.4rem', fontWeight: 800, fontFamily: 'var(--font-display)', opacity: 0.8 }}
          >
            TAO & TAOEXODUS
          </div>
          <div 
            className="mobile-padding" 
            style={{ gridColumn: 'span 3', padding: '3rem', textAlign: 'center', fontSize: '1.4rem', fontWeight: 800, fontFamily: 'var(--font-display)', opacity: 0.8 }}
          >
            POP LEATHER EDITORIAL
          </div>
        </div>
      </section>
    </div>
  );
}
