import { MouseEventHandler } from 'react';
export interface CardTableProps {
	name?: string,
	email?: string,
	phone?: any,
	country?: string,
	hasCheckBox?: boolean,
	checked?:boolean,
	onClick?: MouseEventHandler<HTMLDivElement>,
}