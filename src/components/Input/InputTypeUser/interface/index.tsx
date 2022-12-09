export interface InputTypeUsers {
	size: 'sm' | 'md' | 'lg',
	type: 'button' | 'checkbox'|'text',
	text?: string,
	eventHandler?: React.ChangeEventHandler<HTMLInputElement>
}