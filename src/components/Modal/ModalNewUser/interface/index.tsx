import { MouseEvent, MouseEventHandler } from "react";

export interface ModalNewProps{
    size:'sm'|'md'|'xl',
    textHeader?:string,
    onClick?:MouseEventHandler<HTMLButtonElement>,
    onSuccess?: (success: boolean, message: string)=> void,
    // clickInput?: (clickInput: boolean | any) => void 
}