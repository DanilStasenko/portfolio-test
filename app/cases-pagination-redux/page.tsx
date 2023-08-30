'use client'
import { useGetSomeCasesQuery } from '@/redux/apiCases';
import style from './page.module.scss';
import { useState, useEffect } from 'react';
import Card from '../portfolio/components/Card/Card';
import { ICase } from '@/redux/models/ICases';

export default function SomeCasesRedux() {
    const [cases, setCases] = useState<ICase[]>([]);
    const [start, setStart] = useState(0);
    const [total, setTotal] = useState<null | number>(null);
    const [cardsEnd, setCardsEnd] = useState(false);

    const {data} = useGetSomeCasesQuery(start);
    
    // console.log('init>>>',data)
    // console.log("start>>>", start)
    // console.log("total>>>>",total)
    // console.log("cardsEnd>>>",cardsEnd)
    // console.log("cards>>>",cases)

    useEffect(() => {
        if (data) {
            setTotal(data.meta.pagination.total);
            setCases(data.data)
        } 
    }, [data])
  
    function handleClick() {
        if (total && (start + 2 >= total)) {
            setCardsEnd(true)
            setStart(0)
            setCases([])
        } else {
            setStart(prev => prev + 2)
            setCardsEnd(false)
            data && setCases(prevCards => [...prevCards, ...data.data])
        }
    }

    return (
        <>
            { cardsEnd ? null :
                <ul className={style.list}>
                    {cases?.map((el:any) => (
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
            <button onClick={handleClick}>click</button>
        </>
    )
}