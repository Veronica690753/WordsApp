import { EditProps } from './../components/Modal/ModalEditUsers/interface/index';
import { User } from 'phosphor-react';
import axios from '../helpers/InterceptorsToken';
import { IUser } from '../interface/FetchAllUserResponse'

export const getUsersCards = async () => {
	const response = await axios.get(`${import.meta.env.VITE_API_BACKEND}/users/list_users`)
	const resp = (response.data)
	return resp
}

export const getUsers = async () => {
	const response = await axios.get(`${import.meta.env.VITE_API_BACKEND}/users/list_users`)
	const resp = (response.data.users)
	return resp
}

export const createUsers = async (user: IUser) => {
	const response = await axios.post(`${import.meta.env.VITE_API_BACKEND}/users/create`,
		user
	)
	return response.data
};

export const updateUsers = async (user: EditProps) => {
	const response = await axios.put(`${import.meta.env.VITE_API_BACKEND}/users/update_user/${user.user.id}`,
		user,
	)
	return response.data
};

export const deleteUsers = async (user: IUser) => {
	const response = await axios.delete(`${import.meta.env.VITE_API_BACKEND}/users/delete_user/${user.id}`)
	const resp = (response.data)
	return resp
}
