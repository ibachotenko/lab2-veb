import { useState, useEffect } from 'react';

function Footer() {
  const [userAgent, setUserAgent] = useState('');
  const [platform, setPlatform] = useState('');

  useEffect(() => {
    localStorage.setItem('userAgent', navigator.userAgent);
    localStorage.setItem('platform', navigator.platform);

    setUserAgent(localStorage.getItem('userAgent'));
    setPlatform(localStorage.getItem('platform'));
  }, []);

  return (
    <footer className="mt-10 py-6 bg-slate-800 text-slate-300 text-center tracking-wide">
      <p className="text-sm">© 2026 Nazar Glod</p>
      <a
        href="https://github.com/ibachotenko"
        target="_blank"
        className="text-blue-400 hover:text-blue-200 underline"
      >
        GitHub
      </a>
      <div className="mt-4 text-xs">
        <p>Платформа: {platform}</p>
        <p>Браузер: {userAgent}</p>
      </div>
    </footer>
  );
}

export default Footer;
