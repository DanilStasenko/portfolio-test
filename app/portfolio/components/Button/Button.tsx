import style from './Button.module.scss';

interface Props {
	onClick: () => void;
	mt: string;
	btnText: string;
}

const Button: React.FC<Props> = ({onClick, mt, btnText}) => {
	return (  
		<div className={style.btnBox}>
			<button style={{ marginTop: `${mt}` }} className={style.btn} onClick={onClick}><span className={style.btnAddittional}></span>
				{btnText}
				<div className={style.arrow}>
					<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M11.6666 2.3335L2.91663 11.0835" stroke="#EBEBEB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M11.6666 9.91699V2.33366H4.08329" stroke="#EBEBEB" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</div>
			</button>
		</div>
	);
}
 
export default Button;