'use client'
//react
import { useState, useEffect } from "react";
//components
import Button from "../Button/Button";
import Card from "../Card/Card";
//styles
import style from "./Portfolio.module.scss";
//models
import { ICard } from "../../models/ICard";

//get promise from strapi with pagination
async function dataWithLimit(pageSize:number) {
	const url = 'http://95.163.229.14:1337/api/portfolios';
	const res = await fetch(`${url}/?populate=*&pagination[page]=1&pagination[pageSize]=${pageSize}`);
	return res.json();
}

const Portfolio = () => {
	const [pageSize, setPageSize] = useState(4);
	const [cards, setCards] = useState([]);
	const [total, setTotal] = useState(null);

	//get metaData from strapi about total count cards in strapi
	useEffect(() => {
		const fetchData = async () => {
			const data = await dataWithLimit(1)
			setTotal(data.meta.pagination.total)
		}
		fetchData();
	}, [])

	//get cards from strapi by pagination parametr 
	useEffect(() => {
		const fetchData = async () => {
			const data = await dataWithLimit(pageSize)
			setCards(data.data)
		}
		fetchData();
	}, [pageSize])

	const handleClick = () => {
		setPageSize(size => size + 2)
		total && (pageSize >= total) && setPageSize(4);
	}

	return ( 
		<>
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
		<Button onClick={handleClick} mt={'60px'} btnText={ pageSize < total! ? `Показать еще` : 'Скрыть'}/>
		</> 
	);
}
 
export default Portfolio;