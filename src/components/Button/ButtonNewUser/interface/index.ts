import { MouseEventHandler } from "react";

export interface ButtonNewUser{
    size:'sm'|'md'|'lg'|'xl',
    backgroundColor?:string,
    text?:string,
    onClick?:MouseEventHandler<HTMLButtonElement>,
}