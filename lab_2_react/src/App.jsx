import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Header />
      <main className="max-w-4xl mx-auto mt-6 px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Skills />
        <Education />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default App;
