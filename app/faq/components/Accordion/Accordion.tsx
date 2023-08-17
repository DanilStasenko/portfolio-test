'use client'
import { useState } from "react";
import AccordionItem from "../AccordionItem/AccordionItem";
import { IFaqItem } from "../../../portfolio/models/IFaqtem";

interface Props {
  faqList: IFaqItem[]; 
}

const Accordion: React.FC<Props> = ({faqList}) => {
	const [openId, setOpenId] = useState<null | number>(null);

	return (  
		<ul>
			{faqList.map((faqItem:IFaqItem) => (
				<AccordionItem 
					key={faqItem.id}	
					faqItem={faqItem} 
					onClick={() => (faqItem.id === openId ? setOpenId(null) : setOpenId(faqItem.id))}
					isOpen={faqItem.id === openId} 
				/>
			))}
		</ul>
	);
}
 
export default Accordion;