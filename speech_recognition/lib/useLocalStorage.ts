import { useState, useEffect } from "react";


const useLocalStorage = (key: string) => {

    const [value, setValue] = useState(() => {
        return JSON.parse(localStorage.getItem(key) || '');
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
    
}

export default useLocalStorage