function Skills() {
  return (
    <section className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-lg border-2 border-gray-100 transition-transform hover:scale-105">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 border-b-2 border-blue-200 pb-2">Навички</h2>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-2">
        <li className="hover:text-blue-500 cursor-pointer">Мови програмування: Python, C#, CSS, JavaScript</li>
        <li className="hover:text-blue-500 cursor-pointer">Мережеві технології: Cisco Packet Tracer</li>
      </ul>
    </section>
  );
}

export default Skills;