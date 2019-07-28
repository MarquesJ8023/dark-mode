import { useLocalStorage } from './useLocalStorage';
import { useEffect } from "react";


const useDarkMode = (key, initialValue) => {
    const [darkValue, setDarkValue] = useLocalStorage(key, initialValue);
        useEffect(() => {
          const toggleMode = document.querySelector('body')
            if (darkValue) toggleMode.classList.add('dark-mode'); 

            else toggleMode.classList.remove('dark-mode'); 
         },[darkValue])

         return [darkValue, setDarkValue];
}

export default useDarkMode;