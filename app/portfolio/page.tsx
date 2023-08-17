// next
import { Metadata } from "next";
//style
import style from './page.module.scss';
//components
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import StaticPortfolio from "./components/StaticPortfolio/StaticPortfolio";
import DynamicPortfolio from "./components/DynamicPortfolio/DynamicPortfolio";

export const metadata: Metadata = {
  title: 'Portfolio',
}

async function pageDataFromStrapi() {
	// для увеличения глубины populate используется плагин Populate deep
	// https://market.strapi.io/plugins/strapi-plugin-populate-deep
	const res = await fetch('http://95.163.229.14:1337/api/portfolio-page/?populate=*');
	return res.json();
}

//получить первые четыре карточки с кейсами
async function getStaticCases() {
	const res = await fetch('http://95.163.229.14:1337/api/portfolios/?populate=*&pagination[page]=1&pagination[pageSize]=4');
	return res.json();
}

const PortfolioPage = async () => {
	const pageData = await pageDataFromStrapi().then((data)=> data.data);
	const headerContent = pageData.attributes.header;
	const heroContent = pageData.attributes.hero;
	const staticPortfolioCards = await getStaticCases().then((data)=> data.data);
	return ( 
		<section className={style.wrapper}>
			<Header content={headerContent}/>
			<Hero content={heroContent}/>
			<StaticPortfolio cards={staticPortfolioCards}/>
			<DynamicPortfolio/>
		</section> 
	);
}
 
export default PortfolioPage;