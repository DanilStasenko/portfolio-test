'use client'
import { openModal, closeModal } from "../../redux/features/modal-slice";
import { AppDispatch, useAppSelector } from "../../redux/store";
import { useDispatch } from "react-redux";
import style from './page.module.scss';
import { useGetModalContentQuery } from "../../redux/apiModal";


export default function ModalRedux() {
    const dispatch = useDispatch<AppDispatch>();
    const {data, isLoading} = useGetModalContentQuery();
    const isModalOpen = useAppSelector((state) => state.modalReducer.isOpen)

    function handleOpenModal() {
        dispatch(openModal())
    }

    function handleCloseModal() {
        dispatch(closeModal())
    }

    return (
        <div className={style.wrapper}>
            <h1>Modal Redux</h1>
            <button className={style.button} onClick={handleOpenModal}>{isLoading ? 'Loading...' : 'Open Modal Redux'}</button>
            {isModalOpen && (
                <div className={style.modal} onClick={handleCloseModal}>
                    <div className={style.modalContent} onClick={(e)=>e.stopPropagation()}>
                        <p>{data?.data.attributes.text}</p>
                        <button className={style.button} onClick={handleCloseModal}>Close Modal Redux</button>
                    </div>
                </div>
            )}
        </div>
    )
}
