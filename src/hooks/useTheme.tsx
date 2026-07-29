import { useEffect, useState } from "react"

function store(key: string, data: unknown) {
    localStorage.setItem(key, JSON.stringify(data));
}
function get(key: string) {
    const data = localStorage.getItem(key);
    if (!data || data === null) {
        return null
    } else {
        return JSON.parse(data);
    }
}

export function useTheme() {
    const [theme, setTheme] = useState<'dark' | 'light'>(get('theme') ?? 'dark');
    const root = document.documentElement;
    const toggle = () => {
        if (theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
        console.log(theme)
    }
    useEffect(() => {
        root.classList.toggle('dark', theme === 'dark');
        store('theme', theme);
    }, [theme, root])
    return { theme, toggle };
}