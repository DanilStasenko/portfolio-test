'use client'
import { useState, useEffect } from "react";
import style from './page.module.scss';
import ResponsiveButton from "../components/ResponsiveButton";

export default function ButtonPage() {
    const [windowWidth, setWindowWidth] = useState<number | null>(null);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    const fullWidth = windowWidth && windowWidth < 500 ? style.extraButton_fullWidth : '';
    
    function handleClick() {
        return alert('click')
    }

    return (
        <div className={style.wrapper}>
            <h1>Page with responsive button by hooks</h1>
            <ResponsiveButton onClick={handleClick} extraClass={`${style.extraButton} ${fullWidth}`}>
                {'Click me'}
            </ResponsiveButton>
        </div>
    )
}