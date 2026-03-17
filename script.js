window.addEventListener('DOMContentLoaded', () => {
    // Theme toggle
    const toggle = document.getElementById('theme-toggle');
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', initial);
  
    toggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  
    // Constrain links width to profile-group
    const profileGroup = document.querySelector('.profile-group');
    const links = document.querySelector('.links');
    const updateWidth = () => {
      const w = profileGroup.getBoundingClientRect().width;
      links.style.maxWidth = `${w}px`;
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
  });
  