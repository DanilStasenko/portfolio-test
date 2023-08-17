'use client'

import { useEffect, useState } from "react";
import Modal from "./components/Modal/Modal";
import Button from "../portfolio/components/Button/Button";



const ModalPage = () => {
	const [modalActive, setModalActive] = useState(false);
	const [modalData, setModalData] = useState(null);

	async function fetchDataFormStrapi() {
		const res = await fetch("http://95.163.229.14:1337/api/modal");
		const data = await res.json()
		setModalData(data.data.attributes.text);
	}

	useEffect(() => {
		modalActive && fetchDataFormStrapi()
	}, [modalActive])

	return (  
		<>
			<Button onClick={() => setModalActive(true)} mt="0" btnText="Open modal"/>
			<p style={{marginTop: "100px", color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cumque quasi quidem obcaecati, laborum dignissimos quo. Expedita quidem qui fuga aperiam, sint facere earum modi laborum voluptates aliquid debitis, unde cum veniam quos iusto praesentium esse amet asperiores laboriosam a hic perferendis? Cum dolorum vitae velit qui optio accusamus natus quia assumenda ut soluta, sunt obcaecati suscipit magni dolorem enim exercitationem? A ut nostrum officia sint qui nobis, blanditiis molestiae veniam magnam deleniti reiciendis quidem laudantium, iure laboriosam distinctio nesciunt inventore reprehenderit totam excepturi hic? Iste numquam obcaecati minima delectus amet nam molestias, explicabo harum consectetur quia quod provident, laborum aut labore reiciendis ex eius? Fugit sapiente doloribus itaque ut fuga praesentium amet quidem non obcaecati deleniti nulla laboriosam iusto, perferendis enim architecto velit, harum tempore! Inventore, at illo, porro possimus id ipsum asperiores quis dolore maxime tempore labore quos ab, consequuntur alias impedit. Est ipsum tempore temporibus pariatur, necessitatibus eum qui, voluptate eligendi labore veniam, consectetur asperiores autem! Culpa illum qui, nihil voluptate esse inventore ipsa quibusdam nam perspiciatis in dolor quo aliquam maiores expedita quisquam saepe. Dolores possimus doloribus dolorum magnam praesentium ipsam enim dolor unde maxime quasi repellat, illo laboriosam distinctio explicabo. Repellendus animi corrupti mollitia voluptate quia accusantium saepe quam, quaerat commodi. Fugit perferendis ullam, dolores iure porro esse! Perferendis sint tempore unde illum dolore, animi placeat! Unde velit assumenda aut voluptatibus amet adipisci provident. Dolore adipisci ratione dolor harum minus rem hic tempora suscipit reprehenderit eos itaque ex earum ipsum praesentium error quaerat autem, iure vel recusandae dicta. Molestiae nisi odio, quis velit error placeat, eius beatae veritatis amet exercitationem magni, vitae architecto ipsa qui nemo. Neque illo quisquam, praesentium temporibus corporis similique eligendi nihil laudantium numquam ipsum ipsa placeat aliquam reprehenderit aspernatur est fuga inventore, enim eos blanditiis sint dolorum? Minima cum corporis amet alias ex provident cupiditate atque expedita dolor temporibus! Placeat consequatur omnis aliquam illo labore a dolorum architecto totam aperiam accusantium praesentium quam, pariatur vero sequi quaerat at magnam repudiandae tempora, nostrum nemo molestias id! Nam, harum, dolor a temporibus expedita, numquam blanditiis maxime ducimus voluptas dolorum exercitationem excepturi perspiciatis illum. Eaque odio ducimus voluptate sed consequatur at, quos deleniti qui inventore suscipit, explicabo consequuntur molestias harum ratione velit? Fuga consequuntur dicta eligendi rem ut adipisci voluptatibus possimus nemo natus nihil ullam, quo inventore in harum sed placeat alias recusandae aspernatur, quas facilis laudantium ipsum culpa error. Nostrum ducimus commodi omnis consectetur in fuga officiis? Aspernatur reiciendis autem temporibus iure aliquam ab amet placeat recusandae cumque impedit blanditiis tempore officiis itaque ipsa, esse delectus saepe consequuntur corrupti. Rem nisi doloremque molestias commodi ipsam quaerat est excepturi perspiciatis molestiae quisquam, cum, laudantium culpa quibusdam ab dolorem earum praesentium, in libero unde minima nobis! Ipsum harum sit earum accusamus ad velit impedit qui corrupti nesciunt sapiente odit natus quae aspernatur, mollitia atque obcaecati tempora quia! Earum possimus omnis odio odit nam in sit deserunt aut nobis dolores maiores, quaerat est? Adipisci voluptas ullam beatae? Facere exercitationem dolore nemo autem, necessitatibus ratione doloremque saepe provident dolor vitae? Molestias perferendis quis sapiente quas commodi aut eius laudantium aperiam. Minus nulla magni iste molestiae esse sed similique libero delectus, quos officia consequuntur accusamus adipisci aliquam sit consectetur, repellendus aperiam numquam dolores? Voluptate consequuntur ratione excepturi modi non blanditiis similique unde exercitationem quis! Iste accusantium, consectetur, deleniti voluptas, itaque hic nisi totam blanditiis ipsa enim perferendis necessitatibus iusto doloremque voluptate! Ex, voluptatem, hic repudiandae, aliquid perferendis fuga laudantium architecto libero veritatis quod expedita consequatur provident dicta quidem aspernatur tempore! Eius ad, eum culpa saepe quo quia quos maxime velit harum. Nemo, possimus iste. Ipsa omnis vitae, deleniti nobis culpa fuga sint ipsam optio numquam delectus distinctio repudiandae cupiditate? Sed odio velit ut, beatae, voluptas deserunt consequatur, suscipit consectetur tenetur quam quidem dolore obcaecati! Tenetur cupiditate dolorem autem dolores exercitationem, in ab labore non dicta quia amet expedita similique vel eligendi beatae rerum dolorum tempore ipsam? Labore quasi accusamus eius, at qui doloribus facilis ad placeat. Quos aspernatur iure quo fugiat assumenda iste laudantium porro saepe! Et autem cupiditate omnis quisquam deserunt, possimus vel itaque, culpa inventore ex, voluptate modi reiciendis distinctio quia doloribus soluta ea officiis. Modi sequi distinctio ratione quia quod voluptates libero ducimus aliquid doloribus nostrum accusamus consequatur dolores dicta consectetur vitae, quas iure illum tenetur magni, provident eius iste nisi inventore. Illum quam, quisquam ut quis voluptatem nostrum repellendus exercitationem corrupti soluta vitae, ex minima iure voluptas quod, omnis ea sit nihil vero quidem aliquam ratione. Suscipit nihil sint sapiente iste velit ipsa voluptatum, pariatur eos reiciendis voluptas expedita id, rem neque. Repudiandae reiciendis ratione blanditiis. Velit voluptatibus numquam laudantium, rem ipsa corrupti maiores nihil neque iste. Quam esse quia aliquid? Quidem voluptates, vero optio eos deserunt laudantium amet veritatis nostrum quae in maxime quisquam quo aliquid iste iure alias facilis beatae cupiditate incidunt ullam saepe nulla? Atque quos at maxime recusandae quam, autem quia eaque velit sunt minus consectetur accusamus nobis nostrum! Porro maxime adipisci vel consequatur modi necessitatibus? Voluptas, corrupti? Iusto unde ad earum mollitia repellendus illum beatae corrupti. Quibusdam, et incidunt ea iste assumenda explicabo minima commodi deleniti? Commodi, ut! Quod excepturi inventore amet consequatur quis, illo iste reiciendis, id tempora cum in aliquam sunt impedit quidem quasi, nobis officia saepe veritatis eos asperiores? Sit voluptas similique quos dolore repellendus voluptatum eligendi, delectus, accusamus accusantium fugit quo earum consectetur necessitatibus dolorum voluptate sed velit reiciendis ea natus temporibus impedit quae aliquam explicabo tempore. Magni odio perferendis temporibus, ducimus tenetur soluta? Ducimus ab veniam vero aut eligendi eos cumque, consequatur praesentium officia eius aspernatur quam eum, consectetur obcaecati vitae reiciendis. Fuga laborum voluptatibus eaque placeat officia perferendis tenetur, repellendus debitis iure, natus, nisi fugiat aliquid animi? Culpa atque modi cupiditate, tempora officia impedit soluta voluptatum magnam error incidunt nam facere sit veniam, quasi eaque quibusdam repudiandae eligendi alias animi aspernatur, nostrum consequatur a. Minima est obcaecati neque, nobis error quod in explicabo rem cumque quo dolorum? Consequuntur enim praesentium excepturi exercitationem nam tempore molestias corrupti dolorem quam. Provident, doloremque? Corrupti, cupiditate quia.</p>
			<Modal active={modalActive} setActive={setModalActive}>
				{modalData ? (
					<p>{modalData}</p>
				) : (
					<p>Loading modal content...</p>
				)}
			</Modal>
		</>
	);
}
 
export default ModalPage;