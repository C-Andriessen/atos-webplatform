import { useEffect, useState } from 'react';
import './sass/App.scss';
import Header from './components/Header';
import Routing from './components/Routing';

function App() {

  const body = document.querySelector('body');

  const [mode, setMode] = useState('dark');

  useEffect (() => {
    if (!getCookie('mode')) {
      document.cookie = 'mode=dark';
      setMode('dark')
  } else {
      let cookieMode = getCookie('mode')
      setMode(cookieMode);
  }
  }, []);


  function getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
          var c = ca[i];
          while (c.charAt(0)===' ') c = c.substring(1,c.length);
          if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
      }
      return null;
  }

    if (mode === 'light') {
      body.style.backgroundColor = '#FFF';
    } else if (mode === 'dark') {
      body.style.backgroundColor = '#2F3136';
    }

  return (
    <>
    <Header mode={mode} />
    <Routing mode={mode} />
    </>
  );
}

export default App;
