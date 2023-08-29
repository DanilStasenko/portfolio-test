'use client'
import { useGetAllCasesQuery } from "@/redux/apiCases";
import style from './page.module.scss';
import Card from "../portfolio/components/Card/Card";

export default function CasesRedux() {
    const {data, isLoading} = useGetAllCasesQuery();
    return (
        <div className={style.wrapper}>
            <h1>Cases Redux</h1>
            { isLoading ? 
                <p>Loading...</p> :
                <ul className={style.list}>
                    {data?.data.map((el:any) => (
                        <Card
                            key={el.id}
                            imgSrc={`http://95.163.229.14:1337${el.attributes.image.data.attributes.url}`}
                            imgHeight={el.attributes.image.data.attributes.height}
                            imgWidth={el.attributes.image.data.attributes.width}
                            title={el.attributes.title}
                            desc={el.attributes.desc}
                            niche={el.attributes.niche}
                            client={el.attributes.client}
                            path={el.attributes.path}
                        />
                    ))}
                </ul> 
            }

        </div>
    )
}