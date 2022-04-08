import React, { useEffect, useState, createContext } from "react";


const themeContext = createContext();

const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState('dark')

    const body = document.querySelector('body');
  
    useEffect (() => {
      if (!getCookie('theme')) {
        document.cookie = 'theme=dark';
        setTheme('dark')
    } else {
        let cookieMode = getCookie('theme')
        setTheme(cookieMode);
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
  
      if (theme === 'light') {
        body.style.backgroundColor = '#FFF';
      } else if (theme === 'dark') {
        body.style.backgroundColor = '#2F3136';
      }

      return <themeContext.Provider value={{theme, setTheme}}>
          {children}
      </themeContext.Provider>
}



    export default ThemeContextProvider;
    export {themeContext}