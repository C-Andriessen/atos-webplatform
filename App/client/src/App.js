import './sass/App.scss';
import Header from './components/Header';
import Routing from './components/Routing';
import 'bootstrap/dist/js/bootstrap.min.js'
import ThemeContextProvider from './context/themeContext';

function App() {

  return (
    <>
    <ThemeContextProvider>
    <Header />
    <Routing />
    </ThemeContextProvider>
    </>
  );
}

export default App;
