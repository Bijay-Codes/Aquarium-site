import { useState, useEffect } from "react";

export function useCheckDesktop(breakpoint = 1024) {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth <= breakpoint);
    useEffect(() => {
        const mediaQuerry = window.matchMedia((`min-width: ${breakpoint}px`));
        const check = (e) => setIsDesktop(e.matches);
        mediaQuerry.addEventListener('change', check);
        return mediaQuerry.removeEventListener('change', check);
    }, [breakpoint])
    return isDesktop;
}