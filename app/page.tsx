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
			<Link className={style.link} href="/modal-redux"><h2>Page with modal REDUX</h2></Link>
			<Link className={style.link} href="/cases-redux"><h2>All Cases REDUX</h2></Link>
			<Link className={style.link} href="/cases-pagination-redux"><h2>Cases with pagination REDUX</h2></Link>
			<Link className={style.link} href="/button-page"><h2>Button</h2></Link>
			<Link className={style.link} href="/button-page-css"><h2>Button CSS</h2></Link>
		</>
  )
}
