//components
import Case from "../components/Case/Case";
import { ICard } from "../models/ICard";

type Props = {
	params: {
		path: string;
	}
}

async function getCaseFromStrapiByPath(path:string) {
	const res = await fetch(`http://95.163.229.14:1337/api/portfolios/${path}?populate=*`)
	return res.json();
}


const CasePage = async ({ params: {path}}: Props) => {
	const card = await getCaseFromStrapiByPath(path).then((data) => data.data);
	return (  
		<Case
			imgSrc={`http://95.163.229.14:1337${card.attributes.image.data.attributes.url}`}
			title={card.attributes.title}
			desc={card.attributes.desc}
			niche={card.attributes.niche}
			client={card.attributes.client}
			imgWidth={card.attributes.image.data.attributes.width}
			imgHeight={card.attributes.image.data.attributes.height}
		/> 
	);
}
 
export default CasePage;

//SSG
async function getAllCasesFromStrapi() {
	const url = 'http://95.163.229.14:1337/api/portfolios';
	const res = await fetch(`${url}/?populate=*`);
	return res.json();
}

export async function generateStaticParams() {
	const cards = await getAllCasesFromStrapi().then((data) => data.data);
	return cards.map((card:ICard) => ({
		path: card.attributes.path
	}))
}