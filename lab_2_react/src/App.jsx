import { useState, useEffect } from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours >= 7 && hours < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  function toggleTheme() {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="bg-slate-50 dark:bg-slate-800 dark:text-white min-h-screen font-sans">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main className="max-w-4xl mx-auto mt-6 px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Skills />
          <Education />
          <Experience />
        </main>
        <Reviews />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;
