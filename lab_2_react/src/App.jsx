// Імпортуємо наші компоненти
import Header from './components/Header';
import Skills from './components/Skills';

function App() {
    return (
        // У React всі елементи мають бути обгорнуті в один загальний тег (наприклад, div)
        <div>
            {/* Використовуємо наші компоненти як звичайні HTML-теги */}
            <Header />
            <Skills />
        </div>
    );
}

export default App;