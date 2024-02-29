import { useState, useEffect } from "react";


const useLocalStorage = (key: string, deafultValue: string[]) => {

    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : deafultValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
    
}

export default useLocalStorage