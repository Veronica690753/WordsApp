import { MouseEventHandler } from "react";
export interface ModalEditProps {
    size:'sm'|'md'|'xl',
    textHeader?:string,
    onClick?:MouseEventHandler<HTMLButtonElement>,
    user?: EditUser 
}

export interface EditUser {
    birthday?: string,
    email?: string,
    id?: string,
    image?: string,
    is_admin?: boolean,
    language?: string,
    lastname?: string,
    middlename?: string,
    name?: string,
    phone?: string,
    second_lastname?: string,    
    timezone?: string 
}

export interface EditProps{
    user: EditUser
}