import { useMutation, useQuery, useQueryClient } from 'react-query';
import { createUsers, deleteUsers, getUsers, getUsersCards, searchUsers, updateUsers } from '../api/MicroServiceOne';

export function getUsersDataCards (){
    return useQuery('users',getUsersCards,{
    })
}

export function getUsersData({page, rowsPerPage}: any) {
	return useQuery('users', ()=> getUsers({page, rowsPerPage}), {
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

// export function searchUserData() {
// 	// return useQuery('users', searchUsers,{

// 	})
// }