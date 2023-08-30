import clsx from "clsx"
import './ResponsiveButton.scss'

interface Props {
    children: React.ReactNode,
    size?: 'small' | 'medium',
    onClick?: () => void,
    extraClass?: string
}

const ResponsiveButton: React.FC<Props> = ({children, size = 'medium', onClick, extraClass = ''}) => {
    const className = clsx(
        'responsive-button',
        {[`responsive-button_size_${size}`] : size},
        extraClass
    )

    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    )
}

export default ResponsiveButton