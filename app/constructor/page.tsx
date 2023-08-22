import DynamicCard from "./components/DynamicCard";
import style from "./page.module.scss";

async function dataFromStrapi() {
	const res = await fetch('http://95.163.229.14:1337/api/dynamic-pages?populate=deep');
	return res.json();
}

export default async function Constructor() {
    const dynamicCases = await dataFromStrapi().then((data) => data.data)
    return (
        <div>
            <h1 className={style.title}>Dynamic Cards from Strapi</h1>
            <ul className={style.list}>
                {dynamicCases.map((dynamicCase: any) => (
                    <li key={dynamicCase.id}>
                        <ul className={style.card}>
                            {dynamicCase.attributes.Case.map((el: any) => (
                                <DynamicCard key={el.id} item={el}/>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    )
}