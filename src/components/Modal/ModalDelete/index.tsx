import { ChangeEvent, useContext, useState } from 'react'
import { ModalContext } from '..'
import { deleteUserData } from '../../../hooks/useUsers'
import { IUser } from '../../../interface/FetchAllUserResponse'
import BasicBtn from '../../Button/BassicButton'
import styles from './ModalDelete.module.css'


interface ModalDeleteProps {
	title?: string,
	body?: string
}



export const ModalDelete = ({ title, body}: ModalDeleteProps) => {

	const initialValue = {
		birthday: '',
		auth0_id: '',
		email: '',
		id: '',
		language: '',
		lastname: '',
		middlename: '',
		name: '',
		phone: '',
		second_lastname: '',
		timezone: '',
		image: '',
		is_admin: false
	  }
	
		const [user, setUser] = useState<IUser>(initialValue)
		const { setIsOpenModal } = useContext(ModalContext)
	
		const { mutate } = deleteUserData()
		function handleChange(e: ChangeEvent<HTMLInputElement>) {
			setUser(
				{ ...user, [e.target.id]: e.target.value }
			)
		}
		function handleSubmit() {
			mutate(user)
			setUser(initialValue)
			setIsOpenModal(false)
		}

	return (
		<div className={styles.content}>
			<div className={styles.border}>
				<h4 className={styles.titleH4}>{title}</h4>
				<p className={styles.textoContent}>{body}</p>
			</div>

			<div className={styles.linea} />
			<div className={styles.border2}>

				<BasicBtn
				onClick={() => setIsOpenModal(false)}
					size='sm'
					text='Cancel'
					fontWeight={700}
					backgroundColor='var(--white)'
					colorText='var(--neutral900)'
					borderColor='var(--neutral300)'
				/>
				<BasicBtn
					size='sm'
					text='Delete'
					fontWeight={700}
					backgroundColor='var(--red400)'
					borderColor='var(--red400)'
					colorText='var(--white)'
					onClick={handleSubmit}
				/>


			</div>
		</div>
	)
}

export default ModalDelete
ModalDelete.defaultProps = {
	title: 'Delete Users',
	body: 'The users you selected will be permanently deleted, do you want to continue?'
}