import { InputHTMLAttributes } from "react"

export interface InputsModalsProps {
	textTitle: string,
	size: 'file' | 'sm' | 'md' | 'lg' | 'xl',
	type: 'text' | 'number' | 'time' | 'date' | 'month' | 'tel' | 'file'
	onChange?: any,
	placeholder?: string,
	defaultValue?: string,
	name?: string,
	value?: any,
	required?: boolean | undefined
	disabled?: boolean,
	textId?: string
	onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined
	errorMsg?: string,
	hasError?: boolean,
	iconCalendar?: any,
	subText?: string,
}