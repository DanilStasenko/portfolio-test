import style from './Header.module.scss'

interface Props {
	content: string
}


const Header: React.FC<Props> = ({content}) => {
	return (  
		<div className={style.header}>
			<h2 className={style.title}>{content}</h2>
			<span className={style.desc}>&#91;портфолио&#93;</span>
		</div>

	);
}
 
export default Header;