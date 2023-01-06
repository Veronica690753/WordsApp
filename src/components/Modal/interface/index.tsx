import { ReactNode, Dispatch, SetStateAction } from 'react';

export interface ModalProps {
	children: ReactNode | JSX.Element[],
	isOpen: boolean | undefined,
	setIsOpen?: Dispatch<SetStateAction<boolean>> | undefined,
	callback?: (isOpen: boolean) => void
}