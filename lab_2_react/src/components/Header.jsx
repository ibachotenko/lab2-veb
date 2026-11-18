function Header({ theme, toggleTheme }) {
  return (
    <header className="flex flex-col items-center bg-blue-600 dark:bg-slate-900 text-white p-6 shadow-md">
      <h1 className="text-4xl font-bold mb-2 tracking-wide">Nazar Glod</h1>
      <p className="text-xl opacity-90">Студент спеціальності "Кібербезпека"</p>
      <p className="text-md opacity-80 mt-1">Email: nazarglod@example.com</p>
      <button onClick={toggleTheme} className="mt-4 bg-white text-blue-600 px-4 py-2 rounded">
        {theme === 'light' ? 'Нічна тема' : 'Денна тема'}
      </button>
    </header>
  );
}

export default Header;
