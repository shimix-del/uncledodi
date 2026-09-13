import React from 'react';

export default function About() {
  const skills = [
    "High Fashion & Commercial Modeling", "Eclectic & Quirky Sartorial Styling", 
    "Upcycling & Sustainable Repurposing", "Woodworking & Handcrafted Carpentry", 
    "Runway Walk & Choreography Direction", "Androgynous High-Contrast Aesthetics", 
    "Artefact & Vintage Story Collecting", "Culinary & Creative Innovation"
  ];

  const principles = [
    { 
      num: "01", 
      title: "NORMAL IS BORING", 
      text: "Having turned early negativity around his androgynous looks into creative fuel, Dodi embraces all that is extraordinary. Unapologetic individuality defines every campaign." 
    },
    { 
      num: "02", 
      title: "UPCYCLING & REPURPOSING", 
      text: "Waste is a sin. Upcycling and reimagining discarded materials, garments, and artefacts into high-fashion statements is second nature." 
    },
    { 
      num: "03", 
      title: "PULLING A YUSUFU THE CARPENTER", 
      text: "Grounding himself by creating more—whether playing with wood, solving complex puzzles, reading widely, or reinventing culinary recipes for loved ones." 
    },
    { 
      num: "04", 
      title: "DOES THIS SPARK JOY?", 
      text: "Believing that a human's sole purpose is to brighten a day here in this section of the Milky Way. Every project must spark genuine joy and tactile wonder." 
    }
  ];

  return (
    <div className="border-bottom page-wrapper">
      {/* Title block */}
      <section className="grid-container border-bottom">
        <div style={{ gridColumn: 'span 12', padding: '5rem 4rem' }} className="p-container">
          <span style={{ fontSize: '1rem', fontWeight: 800, letterSpacing: '0.1em', color: 'var(--color-accent)' }}>
            ABOUT / THE ARTIST & MUSE
          </span>
          <h1 className="display-large" style={{ margin: 0, marginTop: '1rem' }}>MEET DODI TOM.</h1>
          <p className="lead-text" style={{ maxWidth: '850px', marginTop: '1rem', opacity: 0.9 }}>
            A passionate being engaged in many fields of creation—where high fashion, androgynous modeling, upcycled design, and eclectic storytelling converge.
          </p>
        </div>
      </section>

      {/* Main split */}
      <section className="grid-container border-bottom">
        {/* Left Side: Biography & Story */}
        <div 
          className="border-right mobile-padding border-bottom-mobile" 
          style={{ gridColumn: 'span 7', padding: '4rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}
        >
          <div>
            <span className="meta-label" style={{ display: 'block', marginBottom: '0.75rem' }}>THE GUIDING PHILOSOPHY</span>
            <blockquote className="editorial-quote" style={{ margin: 0 }}>
              "Before you do anything, always ask yourself: <span style={{ color: '#F7F5F0', textDecoration: 'underline decoration-2' }}>'Does this spark joy?'</span>"
            </blockquote>
          </div>

          <div>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--color-accent)', marginBottom: '1.25rem' }}>THE STORY OF DODI TOM</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.1rem', lineHeight: 1.7, opacity: 0.88 }}>
              <p>
                Everything eclectic and quirky brings so much excitement to him. Having been teased at a younger age for his androgynous looks in addition to being "weird", he used that negativity to fuel his love for embracing all that is extraordinary. <em>Normal is boring after all.</em>
              </p>
              <p>
                He believes that a human's sole purpose is to brighten a day here in this section of the Milky Way. He dabbles in art and design, high fashion and commercial modeling. He thoroughly enjoys shopping and styling, serving as an avid collector of interesting artefacts and stories.
              </p>
              <p>
                He grounds himself by creating more, solving puzzles, and reading among many other things. Waste is such a sin for him; upcycling and repurposing items is not new in his language. He loves to play with wood and is always ready to <em>"pull a Yusufu the carpenter."</em>
              </p>
              <p>
                Rules are made to be broken—he follows a recipe, adding his own innovative edits when preparing meals for his many loved ones. Whether commanding the runway in chunky knits and combat boots or framing raw brass in high-contrast editorial campaigns, Dodi transforms presence into art.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>CREATIVE DISCIPLINES & SKILLS</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
              {skills.map((skill, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1.1rem', border: '1px solid var(--color-border)', background: 'var(--bg-dark)' }}>
                  <span style={{ color: 'var(--color-accent)', fontWeight: 800 }}>⚡</span>
                  <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Portrait image & Visual Stack */}
        <div 
          className="mobile-padding" 
          style={{ gridColumn: 'span 5', padding: '4rem', display: 'flex', flexDirection: 'column', gap: '2rem', justifyContent: 'center', backgroundColor: '#181615' }}
        >
          {/* Main Runway Portrait */}
          <div style={{ border: '1px solid var(--color-border)', width: '100%', position: 'relative', overflow: 'hidden' }}>
            <img 
              src="./assets/dodi_portrait.jpg" 
              alt="Dodi Tom runway modeling with dreadlocks" 
              style={{ width: '100%', display: 'block', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', background: 'rgba(19, 17, 16, 0.9)', backdropFilter: 'blur(8px)', borderTop: '1px solid var(--color-border)', color: 'var(--bg-light)', padding: '1rem', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>DODI TOM / UNCLE DODI</span>
              <span style={{ color: 'var(--color-accent)' }}>RUNWAY MUSE ⚡</span>
            </div>
          </div>

          {/* Secondary Editorial Preview Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ border: '1px solid var(--color-border)', overflow: 'hidden', position: 'relative' }}>
              <img 
                src="./assets/tao_exodus_hero.jpg" 
                alt="Dodi Tom in Tao Exodus knit hood and goggles" 
                style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }}
              />
              <span style={{ position: 'absolute', bottom: '0.5rem', left: '0.5rem', fontSize: '0.7rem', fontWeight: 800, background: 'rgba(0,0,0,0.8)', padding: '0.2rem 0.5rem', color: 'var(--color-accent)' }}>
                TAO EXODUS
              </span>
            </div>
            <div style={{ border: '1px solid var(--color-border)', overflow: 'hidden', position: 'relative' }}>
              <img 
                src="./assets/tao_exodus_process.jpg" 
                alt="Dodi Tom seated at amphitheater steps" 
                style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }}
              />
              <span style={{ position: 'absolute', bottom: '0.5rem', left: '0.5rem', fontSize: '0.7rem', fontWeight: 800, background: 'rgba(0,0,0,0.8)', padding: '0.2rem 0.5rem', color: 'var(--color-accent)' }}>
                AMPHITHEATER
              </span>
            </div>
          </div>

          <div style={{ border: '1px dashed var(--color-border)', padding: '1.5rem', textAlign: 'center' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.1em', opacity: 0.6, display: 'block', marginBottom: '0.5rem' }}>
              INSTAGRAM SHOWROOM
            </span>
            <a 
              href="https://www.instagram.com/uncle_dodi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.3rem' }}
            >
              @UNCLE_DODI ↗
            </a>
          </div>
        </div>
      </section>

      {/* Principles grid */}
      <section className="border-bottom">
        <div className="grid-container border-bottom">
          <div style={{ gridColumn: 'span 12', padding: '2rem 4rem' }}>
            <span style={{ fontSize: '1.2rem', fontFamily: 'var(--font-display)', fontWeight: 800 }}>
              LIFE & CREATIVE PILLARS
            </span>
          </div>
        </div>
        <div className="grid-container">
          {principles.map((principle, index) => (
            <div 
              key={index} 
              className={`border-right border-bottom-mobile mobile-padding`}
              style={{ 
                gridColumn: 'span 3', 
                padding: '3rem 2.5rem', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '1.25rem', 
                borderRight: index === 3 ? 'none' : '1px solid var(--color-border)' 
              }}
            >
              <span style={{ fontSize: '2.5rem', fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--color-accent)' }}>
                {principle.num}
              </span>
              <h4 style={{ fontSize: '1.15rem', letterSpacing: '0.02em', minHeight: '2.8rem' }}>{principle.title}</h4>
              <p style={{ opacity: 0.75, fontSize: '0.95rem', lineHeight: 1.6 }}>{principle.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
