import styles from './Modal.module.css'
import { ModalProps } from './interface/index';
import { useState, useEffect, createContext } from 'react';

interface ModalContextProps {
	setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalContext = createContext({} as ModalContextProps)
const { Provider } = ModalContext

export const Modal = ({ children, isOpen, callback }: ModalProps) => {

	const [isOpenModal, setIsOpenModal] = useState(false)

	const handleClick = (e: MouseEvent) => {

		const { id } = e.target as HTMLDivElement
		if (id === 'overlayModal') setIsOpenModal(false)
	}

	useEffect(() => {
		setIsOpenModal(isOpen)
	}, [isOpen])

	useEffect(() => {
		callback && callback(isOpenModal)
	}, [isOpenModal])

	useEffect(() => {

		document.addEventListener('click', handleClick)
		return () => document.removeEventListener('click', handleClick)
	}, [])



	return (
		<Provider value={{ setIsOpenModal }}>
			<div
				style={{ display: isOpenModal ? 'block' : 'none' }}
				className={styles.modalContainer}
			>
				<div id='overlayModal' className={styles.containerCard}>
					{children}
				</div>
			</div>
		</Provider>
	)
}

export default Modal