'use client'
//react
import { useState, useEffect } from "react";
//components
import Button from "../Button/Button";
import Card from "../Card/Card";
//styles
import style from "./DynamicPortfolio.module.scss";
//models
import { ICard } from "../../models/ICard";

//get promise from strapi with pagination
async function dataWithLimit(start:number) {
	const url = 'http://95.163.229.14:1337/api/portfolios';
	const res = await fetch(`${url}/?populate=*&pagination[start]=${start}&pagination[limit]=2`);
	return res.json();
}

const DynamicPortfolio = () => {
	const [cards, setCards] = useState<ICard[]>([]);
	const [total, setTotal] = useState(null);
	const [cardsEnd, setCardsEnd] = useState(false);
	const [currentStart, setCurrentStart] = useState(4);

	//get metaData from strapi about total number cards in strapi
	useEffect(() => {
		const fetchData = async () => {
			const data = await dataWithLimit(4)
			setTotal(data.meta.pagination.total)
		}
		fetchData();
	}, [])

	function handleClick() {
		if (currentStart >= total!) {
			setCards([])
			setCardsEnd(true)
			setCurrentStart(4);
		} else {
			setCurrentStart(size => size + 2);
		}

		setCardsEnd(false)
		const fetchData = async () => {
			const data = await dataWithLimit(currentStart)
			setCards(prevCards => [...prevCards, ...data.data])
		}
		fetchData();
	}

	return ( 
		<>
			{cardsEnd ? null :
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
			}
			<Button 
				onClick={handleClick} 
				mt={'60px'} 
				btnText={ 
					currentStart < total! ? `Показать еще` : 'Скрыть'
				}
			/>
		</> 
	);
}
 
export default DynamicPortfolio;