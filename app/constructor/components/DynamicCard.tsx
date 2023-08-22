import Image from "next/image";
import style from "./DynamicCard.module.scss";

const DynamicCard = ({item} : any) => {
    return (
        <li className={style.card}>
            {item.Text ? (
            item.Text
            ) : item.Photo ? (
            <Image
                alt={item.Photo.data.attributes.name}
                src={`http://95.163.229.14:1337${item.Photo.data.attributes.url}`}
                width={item.Photo.data.attributes.width}
                height={item.Photo.data.attributes.height}
            />
            ) : null}
      </li>
    )
}

export default DynamicCard