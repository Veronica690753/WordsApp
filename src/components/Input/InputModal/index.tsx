import { InputsModalsProps } from './interface/index';
import styles from './InputModal.module.css'
import { useState } from 'react';

export const InputModal = ({ hasError, errorMsg, onBlur, textId, textTitle, size, type, 
	placeholder, onChange, required, name, value, defaultValue, disabled, iconCalendar, subText, inputNumber }: InputsModalsProps) => {

	const [focus, setFocus] = useState(false)
		
	return (
		<div>
			<label id={textId} className={`${styles.textTitle}`} style={{ color: hasError ? 'red' : 'var(--neutral800)' }} >{textTitle}</label>
			<label id={textId} className={`${styles.textSubTitle} ${hasError ? 'red' : styles.textSubTitle}`}>{subText}</label>

			<div className={`${styles[size]} ${hasError && styles.emailError} ${focus && styles.focusStyle} ${styles.borders}`} >
				<input
					className={`
					${styles.contenido} 
					${hasError ? styles.errorCont : styles.contenido } 
					${styles[iconCalendar]}
					`}
					onFocus={() => setFocus(true)}
					onBlur={() => { onBlur; setFocus(false) }}
					id={textId}
					required={required}
					type={type}
					disabled={disabled}
					defaultValue={defaultValue}
					value={value}
					name={name}
					onChange={onChange}
					placeholder={placeholder}
					style={{color: value === placeholder ? 'var(--gray400)' : value ? 'var(--gray800)' : 'var(--gray400)'}}
				/>
			</div>
			<span>{errorMsg}</span>
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