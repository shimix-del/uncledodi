import React, { useEffect, useState } from 'react';

export default function PageTransition({ trigger, children }) {
  const [status, setStatus] = useState('idle'); // 'idle', 'entering', 'active', 'exiting'
  const [content, setContent] = useState(children);

  useEffect(() => {
    if (trigger.state === 'start') {
      setStatus('active');
      
      // Update page contents halfway through the animation (when overlay covers screen)
      const contentTimeout = setTimeout(() => {
        setContent(children);
        window.scrollTo(0, 0);
      }, 300); // 300ms is the peak of transition

      // End transition and wipe overlay out
      const endTimeout = setTimeout(() => {
        setStatus('exiting');
      }, 600);

      // Clean up classes and return to idle
      const idleTimeout = setTimeout(() => {
        setStatus('idle');
        trigger.onComplete();
      }, 1200);

      return () => {
        clearTimeout(contentTimeout);
        clearTimeout(endTimeout);
        clearTimeout(idleTimeout);
      };
    }
  }, [trigger, children]);

  // If we are not transitioning, just show the current content
  return (
    <>
      <div 
        className={`transition-overlay ${status === 'active' ? 'active' : ''} ${status === 'exiting' ? 'exiting' : ''}`}
        style={{
          backgroundColor: trigger.accent || 'var(--accent-cobalt)'
        }}
      />
      <div className="page-wrapper">
        {content}
      </div>
    </>
  );
}
