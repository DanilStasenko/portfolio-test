import { ICard } from "../../models/ICard";
import Card from "../Card/Card";
import style from "./StaticPortfolio.module.scss"; 

type Props = {
	cards: ICard[]
}

const StaticPortfolio = async ({cards}:Props) => {
	return ( 
		<ul className={style.portfolio}>
			{cards.map((card:ICard) => (
				<Card
					key={card.id}
					imgSrc={`http://95.163.229.14:1337${card.attributes.image.data.attributes.url}`}
					title={card.attributes.title}
					desc={card.attributes.desc}
					niche={card.attributes.niche}
					client={card.attributes.client}
					imgWidth={card.attributes.image.data.attributes.width}
					imgHeight={card.attributes.image.data.attributes.height}
					path={card.attributes.path}
				/>
			))}
		</ul>
	);
}
 
export default StaticPortfolio;