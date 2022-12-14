import {ComponentMeta, ComponentStory} from '@storybook/react'
import { EnvelopeOpen, Phone } from 'phosphor-react';
import { MouseEvent, MouseEventHandler } from 'react'
import Infoframe from '../../components/Infoframe';


export default {
    title:'Infoframe',
    component: Infoframe
} as ComponentMeta<typeof Infoframe>

const handleClick = (e: MouseEvent<HTMLDivElement>)=>{
    console.log(e);
    
}


const Template:ComponentStory<typeof Infoframe> = (args) => {

    return<Infoframe {...args}/>
}

export const InfoframeComponent = Template.bind({})
InfoframeComponent.args={
    icon:'Phone',
    size:'md',
    onClick:handleClick,
    backgroundColor:'var(--gray500)',
    text:'isabella@bluepixel.mx'
    
}