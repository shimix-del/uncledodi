import React from 'react';

export default function About() {


  const skills = [
    "Raw Handmade Brass", "Kitenge Heritage Prints", "Structured Vintage Wool",
    "Sartorial Draping", "Editorial Choreography", "Dual-Gel Light Concepts",
    "Visual Metaphors", "Runway Walk Consultant", "Contemporary Streetwear"
  ];

  const facts = [
    { num: "01", title: "SARTORIAL SYMMETRY", text: "Every fold of Kitenge cotton and every angle of raw brass jewelry is styled with mathematical care. Balance is what builds the narrative." },
    { num: "02", title: "STORY IN MOTION", text: "A pose isn't static—it's a dialogue. I believe in movement-based modeling that makes the viewer feel the heritage, not just scroll past." },
    { num: "03", title: "VINTAGE COFFEE & CULTURAL BEATS", text: "Choreographed under the influence of rich, dark Kenyan coffee, traditional rhythms, and contemporary Afro-fusion sounds." }
  ];

  return (
    <div className="border-bottom page-wrapper">
      {/* Title block */}
      <section className="grid-container border-bottom">
        <div style={{ gridColumn: 'span 12', padding: '5rem 4rem' }} className="p-container">
          <span style={{ fontSize: '1rem', fontWeight: 800, letterSpacing: '0.1em', color: 'var(--color-accent)' }}>ABOUT / THE MUSE</span>
          <h1 className="display-large" style={{ margin: 0, marginTop: '1rem' }}>UNCLE DODI.</h1>
        </div>
      </section>

      {/* Main split */}
      <section className="grid-container border-bottom">
        {/* Left Side: Biography & Philosophy */}
        <div 
          className="border-right mobile-padding border-bottom-mobile" 
          style={{ gridColumn: 'span 7', padding: '4rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}
        >
          <div>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--color-accent)', marginBottom: '1rem' }}>THE MISSION</h3>
            <p className="lead-text" style={{ fontWeight: 600 }}>
              "A model shouldn't just fit the clothes; they must carry the story. We craft visual statements that connect heritage craftsmanship with modern luxury."
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>THE STORY</h3>
            <p style={{ opacity: 0.8, fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              I entered modeling and creative direction to challenge the clean, sterile templates of modern luxury fashion. Every campaign felt generic, losing the warm, tactile spirit of heritage materials in favor of minimalist trends.
            </p>
            <p style={{ opacity: 0.8, fontSize: '1.1rem' }}>
              Uncle Dodi is a creative practice built on the belief that fashion is a form of cultural memory. I merge traditional African draping with sharp, vintage-inspired tailoring. Collaborating with designers like Zurika by Wambui and Gaitan Wardrobe, I bring raw brass, hand-spun fabrics, and historic silhouettes into a striking contemporary dialogue.
            </p>
          </div>

          {/* Skills Grid */}
          <div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>SIGNATURE ELEMENTS</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
              {skills.map((skill, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', border: '1px solid var(--color-border)' }}>
                  <span style={{ color: 'var(--color-accent)', fontWeight: 800 }}>⚡</span>
                  <span style={{ fontWeight: 700 }}>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Portrait image */}
        <div 
          className="mobile-padding" 
          style={{ gridColumn: 'span 5', padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#1A1C20' }}
        >
          <div style={{ border: '1px solid var(--color-border)', width: '100%', position: 'relative', overflow: 'hidden' }}>
            <img 
              src="/assets/dodi_portrait.jpg" 
              alt="Uncle Dodi portrait illustration" 
              style={{ width: '100%', display: 'block', filter: 'grayscale(0%) contrast(100%)' }}
            />
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', background: 'var(--color-accent)', color: 'var(--bg-dark)', padding: '1rem', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem', textAlign: 'center' }}>
              UNCLE DODI / CREATIVE MUSE
            </div>
          </div>
        </div>
      </section>

      {/* Facts grid */}
      <section className="border-bottom">
        <div className="grid-container border-bottom">
          <div style={{ gridColumn: 'span 12', padding: '2rem 4rem' }}>
            <span style={{ fontSize: '1.2rem', fontFamily: 'var(--font-display)', fontWeight: 800 }}>CREATIVE PRINCIPLES</span>
          </div>
        </div>
        <div className="grid-container">
          {facts.map((fact, index) => (
            <div 
              key={index} 
              className={`border-right border-bottom-mobile mobile-padding`}
              style={{ gridColumn: 'span 4', padding: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', borderRight: index === 2 ? 'none' : '1px solid var(--color-border)' }}
            >
              <span style={{ fontSize: '3rem', fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--color-accent)' }}>{fact.num}</span>
              <h4 style={{ fontSize: '1.2rem', letterSpacing: '0.05em' }}>{fact.title}</h4>
              <p style={{ opacity: 0.7, fontSize: '0.95rem' }}>{fact.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
