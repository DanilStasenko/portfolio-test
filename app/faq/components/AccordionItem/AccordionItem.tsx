import { IFaqItem } from "@/app/portfolio/models/IFaqtem";
import style from "./AccordionItem.module.scss";
import { useRef } from "react";

interface IAccordionItemProps {
	faqItem: IFaqItem;
	onClick: (id:number) => void;
	isOpen: boolean;
}


const AccordionItem: React.FC<IAccordionItemProps> = ({faqItem, onClick, isOpen}) => {
	const itemRef = useRef<HTMLParagraphElement>(null);
	return (  
		<li className={style.accordionItem}>
			<div className={style.accordionTop} onClick={() => onClick(faqItem.id)}>
				<button className={style.accordionTitle}>{faqItem.attributes.title}</button>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M20 20L5 5" stroke="#F4F4F0" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M20 7V20H7" stroke="#F4F4F0" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</div>
			<div 
				className={style.accordionCollapse}
				style={
					isOpen ? {height: itemRef.current?.scrollHeight} : {height: "0px"}
				}
			>
				<p className={style.accordionBody} ref={itemRef}>{faqItem.attributes.body}</p>
			</div>
		</li>
	);
}
 
export default AccordionItem;