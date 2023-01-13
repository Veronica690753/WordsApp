import { useMutation, useQuery, useQueryClient } from 'react-query';
import { createUsers, deleteUsers, getUsers, getUsersCards, searchUsers, updateImg, updateUsers } from '../api/MicroServiceOne';

export function getUsersDataCards() {
	return useQuery('users', getUsersCards, {
	})
}

export function getUsersData({ page, rowsPerPage, name }: any) {
	const callback = Boolean(name) ? searchUsers({name}) : getUsers({ page, rowsPerPage })
	return useQuery('users', () => (callback), {
		cacheTime: 0, staleTime: 0
	})
}

// Metodo para crear usuarios 
export function createUserData() {
	const queryClient = useQueryClient()
	return useMutation(createUsers, {
		onSuccess: async () => {
			await queryClient.invalidateQueries('users')
		},
	})
}

// Metodo para acualizar un usuario
export function updateUserData() {
	const queryClient = useQueryClient()
	return useMutation(updateUsers, {
		onSuccess: async () => {
			await queryClient.invalidateQueries({
				queryKey: ['users']
			})
		}
	})
}

export function deleteUserData() {
	const queryClient = useQueryClient()
	return useMutation(deleteUsers, {
		onSuccess: async () => {
			await queryClient.invalidateQueries({
				queryKey: ['users']
			})
		}
	})
}

export function updateImgData() {
	const queryClient = useQueryClient()
	return useMutation(updateImg, {
		onSuccess: async () => {
			await queryClient.invalidateQueries({
				queryKey: ['users']
			})
			// await queryClient.invalidateQueries({
			// 	queryKey: ['usersCards']
			// })
		},
	})
}