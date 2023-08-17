import style from './Hero.module.scss';

interface Props {
	content: string;
}

const Hero: React.FC<Props> = ({content}) => {
	return (  
		<div className={style.hero}>
			<p className={style.text}>{content}</p>
		</div>
	);
}
 
export default Hero;