//next
import Image from "next/image";
import Link from "next/link";
//styles
import style from "./Card.module.scss";

interface ICardProps {
	imgSrc: string;
	title: string;
	desc: string;
	niche: string;
	client: string;
	imgWidth: number;
	imgHeight: number;
	path: string;
}

const Card = ({imgSrc, imgHeight, imgWidth, title, desc, niche, client, path}: ICardProps) => {
	return (  
		<li className={style.card}>
			<Image
				className={style.img}
				src={imgSrc}
				width={imgWidth}
				height={imgHeight}
				alt="cardImg"
				sizes="100vw"
			/>
			<h2 className={style.title}>{title}</h2>
			<p className={style.desc}>{desc}</p>
			<div className={style.cardBottom}>
				<div className={style.niche}>
					<p className={style.subtitle}>Ниша</p>
					<p className={style.subdesc}>{niche}</p>
				</div>
				<div>
					<p className={style.subtitle}>Клиент</p>
					<p className={style.subdesc}>{client}</p>
				</div>
				<Link className={style.btn} href={`/portfolio/${path}`}>Подробнее о проекте</Link>
			</div>
		</li>
	);
}
 
export default Card;