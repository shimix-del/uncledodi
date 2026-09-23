import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

// Pages
import Home from './pages/Home';
import WorkIndex from './pages/WorkIndex';
import CaseStudy from './pages/CaseStudy';
import About from './pages/About';
import Contact from './pages/Contact';

// Static Data
import { projects } from './data/projects';

export default function App() {
  const [route, setRoute] = useState('home'); // 'home', 'work', 'about', 'contact', 'project/:id'
  const [projectId, setProjectId] = useState(null);
  
  // Transition state
  const [transitionTrigger, setTransitionTrigger] = useState({
    state: 'idle',
    target: null,
    accent: null,
    onComplete: () => {}
  });

  // Track Custom Cursor Coordinates without React-re-renders
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const onMouseMove = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cursor.remove();
    };
  }, []);

  // Sync state with URL Hash routing (SEO/Shareable link support)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#/';
      
      if (hash.startsWith('#/project/')) {
        const id = hash.replace('#/project/', '');
        setRoute(`project/${id}`);
        setProjectId(id);
        
        // Find project color to set as active variable
        const proj = projects.find(p => p.id === id);
        if (proj) {
          document.documentElement.style.setProperty('--color-accent', proj.accentColor);
        }
      } else {
        const path = hash.replace('#/', '') || 'home';
        setRoute(path);
        setProjectId(null);
        
        // Reset global accent to Gold on default pages
        document.documentElement.style.setProperty('--color-accent', 'var(--accent-gold)');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Trigger on initial load
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Programmatic custom navigation with animation wipe
  const navigateTo = (targetPath, accentColor = null) => {
    // If target matches current route, skip
    const currentHash = window.location.hash || '#/';
    const targetHash = targetPath === 'home' ? '#/' : `#/${targetPath}`;
    if (currentHash === targetHash) return;

    // Determine transitioning color
    let wipeColor = accentColor || 'var(--accent-cobalt)';
    if (!accentColor && targetPath.startsWith('project/')) {
      const pid = targetPath.replace('project/', '');
      const proj = projects.find(p => p.id === pid);
      if (proj) wipeColor = proj.accentColor;
    }

    setTransitionTrigger({
      state: 'start',
      target: targetPath,
      accent: wipeColor,
      onComplete: () => {
        setTransitionTrigger(prev => ({ ...prev, state: 'idle' }));
      }
    });

    // Peak of the wipe animation (overlay fully covering screen)
    setTimeout(() => {
      window.location.hash = targetPath === 'home' ? '#/' : `#/${targetPath}`;
    }, 300);
  };

  // Render the current view
  const renderView = () => {
    if (route.startsWith('project/')) {
      return <CaseStudy projectId={projectId} onNavigate={navigateTo} />;
    }
    
    switch (route) {
      case 'home':
        return <Home onNavigate={navigateTo} />;
      case 'work':
        return <WorkIndex onNavigate={navigateTo} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
      <Header currentRoute={route} onNavigate={navigateTo} />
      
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <PageTransition trigger={transitionTrigger}>
          {renderView()}
        </PageTransition>
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
}
