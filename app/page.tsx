import Link from 'next/link'
import style from './page.module.scss';

export default function Home() {
  return (
		<>
			<h1 className={style.text}>WBS</h1>
			<Link className={style.link} href="/portfolio"><h2>Portfolio</h2></Link>
			<Link className={style.link} href="/faq"><h2>Faq</h2></Link>
			<Link className={style.link} href="/modal-page"><h2>Page with modal</h2></Link>
			<Link className={style.link} href="/constructor"><h2>Constructor</h2></Link>
		</>
  )
}
