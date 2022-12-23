import { MouseEvent, MouseEventHandler, ReactElement } from "react";

export interface BasicButtonProps{
    size:'sm'|'md'|'lg'|'xl',
    backgroundColor?:string,
    borderColor?:string,
    fontWeight?:number,
    colorText?:string,
    text?:string,
    onClick?:MouseEventHandler<HTMLButtonElement>,
}