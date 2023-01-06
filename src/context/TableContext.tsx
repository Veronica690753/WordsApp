import { createContext } from "react"
import { User } from "../components/Table/interface"
import { TableContextState } from "./TableContextProvider"

interface TableContextProps {
    state:TableContextState,
    setCurrentUser:(currentUser?: User) => void
    setDeleteUser:(deleteUser?: User) => void
    setIsOpenModalEditUser:(isOpenModalEditUser: boolean) => void
    setIsOpenModalNewCategory:(isOpenModalNewCategory?: boolean) => void 
}

export const TableContext = createContext<TableContextProps>({} as TableContextProps)