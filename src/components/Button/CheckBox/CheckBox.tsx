import React from 'react'
import { User } from '../../Table/interface/index';
import styles from './CheckBox.module.css'
import { useContext, useEffect, useState } from 'react';
import { send } from 'vite';
import { TableContext } from '../../../context/TableContext';

interface CheckBoxProps {
	defaultChecked?: boolean,
	onChange: (e: React.ChangeEvent<HTMLInputElement> | undefined) => void
	user: User | undefined
}


export const CheckBox = ({ defaultChecked, onChange, user }: CheckBoxProps) => {

	const { state } = useContext(TableContext)
	const { deleteUser } = state
	const [isCheked, setIsCheked] = useState(false)

	useEffect(() => {
		if (deleteUser?.id === user?.id) {
			console.log(deleteUser?.id)
			setIsCheked(true)
			
		} else {
			setIsCheked(false)
		}

		console.log(setIsCheked);

	}, [deleteUser])

	return (

		<input checked={defaultChecked ? defaultChecked : isCheked} className={styles.input} type='checkbox'/*  defaultChecked={defaultChecked} */ onChange={onChange} />
	)
}