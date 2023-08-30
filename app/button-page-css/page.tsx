'use client'
import ResponsiveButton from '../components/ResponsiveButton';
import style from './page.module.scss';

export default function ButtonPageByCSS() {
    function handleClick() {
        return alert('click')
    }
    return (
        <div className={style.wrapper}>
            <h1>Page with responsive button by only CSS</h1>
            <ResponsiveButton onClick={handleClick} extraClass={`${style.extraButton} ${style.extraButton_fullWidth}`}>
                {'Click me'}
            </ResponsiveButton>
        </div>
    )
}