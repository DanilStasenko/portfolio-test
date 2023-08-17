import Image from "next/image";

import style from "./Case.module.scss";

interface ICaseProps {
	imgSrc: string;
	title: string;
	desc: string;
	niche: string;
	client: string;
	imgWidth: number;
	imgHeight: number;
}

const Case = ({imgSrc, imgHeight, imgWidth, title, desc, niche, client}: ICaseProps) => {
	return (  
		<div className={style.container} style={{maxWidth: `${imgWidth}px`}}>
			<Image
				src={imgSrc}
				width={imgWidth}
				height={imgHeight}
				alt="cardImg"
			/>
			<h2>{title}</h2>
			<p>{desc}</p>
			<div className={style.cardBottom}>
				<div>
					<p>Ниша</p>
					<p>{niche}</p>
				</div>
				<div>
					<p>Клиент</p>
					<p>{client}</p>
				</div>
			</div>
		</div>
	);
}
 
export default Case;