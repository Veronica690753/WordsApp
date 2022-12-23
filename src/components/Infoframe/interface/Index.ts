import { MouseEventHandler } from "react";


export interface InfoframeProps {
    size: 'sm' | 'md' | 'lg' | 'xl',
    backgroundColor?: string,
    icon?:string,
    flag?: string,
    // icon?:ReactElement|ReactElement[],
    text?: string,
    onClick?: MouseEventHandler<HTMLDivElement>,
}