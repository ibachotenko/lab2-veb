import { useState, useEffect } from 'react';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white dark:bg-slate-700 p-6 rounded-xl w-96">
            <h2 className="text-2xl font-bold mb-4">Зворотний зв'язок</h2>

            <form action="https://formspree.io/f/xrppyvzj" method="POST">
              <label>Ім'я:</label>
              <input type="text" name="name" required className="border w-full p-2 mb-3 rounded" />

              <label>Email:</label>
              <input type="email" name="email" required className="border w-full p-2 mb-3 rounded" />

              <label>Номер телефону:</label>
              <input type="tel" name="phone" required className="border w-full p-2 mb-3 rounded" />

              <label>Повідомлення:</label>
              <textarea name="message" rows="4" required className="border w-full p-2 mb-3 rounded"></textarea>

              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded mr-2">
                Надіслати
              </button>
              <button type="button" onClick={() => setIsOpen(false)} className="bg-gray-400 text-white px-4 py-2 rounded">
                Закрити
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactForm;
