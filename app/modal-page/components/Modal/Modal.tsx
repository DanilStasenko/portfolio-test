import style from "./Modal.module.scss";
import {ReactNode} from "react";

interface Props {
	active: boolean;
	setActive: (active:boolean) => void;
	children: ReactNode;
}

const Modal: React.FC<Props> = ({active, setActive, children}) => {
	return (  
		<div className={`${style.modal} ${active ? style.active : ''}`} onClick={() => setActive(false)}>
			<div className={style.content} onClick={e => e.stopPropagation()}>
				<button className={style.close} onClick={() => setActive(false)}>X</button>
				{children}
			</div>
		</div>
	);
}
 
export default Modal;