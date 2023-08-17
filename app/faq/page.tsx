import Accordion from "./components/Accordion/Accordion";
import style from "./page.module.scss";

async function pageDataFromStrapi() {
	// для увеличения глубины populate используется плагин Populate deep
	// https://market.strapi.io/plugins/strapi-plugin-populate-deep
	const res = await fetch('http://95.163.229.14:1337/api/faq-page/?populate=*');
	return res.json();
}

const faqPage = async () => {
	const pageData = await pageDataFromStrapi().then((data)=> data.data);
	return (  
		<section >
			<div className={style.header}>
				<h1 className={style.title}>{pageData.attributes.title}</h1>
				<p className={style.desc}>{pageData.attributes.description}</p>
			</div>
			<Accordion faqList={pageData.attributes.faqs.data}/>
		</section>
	);
}
 
export default faqPage;