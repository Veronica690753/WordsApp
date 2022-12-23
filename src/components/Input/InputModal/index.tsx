import { InputsModalsProps } from './interface/index';
import styles from './InputModal.module.css'

export const InputModal = ({ textTitle, size, type, placeholder, onChange, text, name, value, defaultValue }: InputsModalsProps) => {
	return (
		<div>
			<p className={`${styles.textTitle}`}>{textTitle}</p>
			<div className={`${styles[size]} ${styles.borders}`}>
				<input className={`${styles.contenido}`} type={type} 
				defaultValue={defaultValue} 
				value={value} name={name} onChange={onChange} 
				placeholder={placeholder} />
			</div>
		</div>
	)
}

export default InputModal
InputModal.defaultProps = {
	type: 'text',
	placeholder: 'User@email.com',
	size: 'lg',
	textTitle: 'Email*'
}