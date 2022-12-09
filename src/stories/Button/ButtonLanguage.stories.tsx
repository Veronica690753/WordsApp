import {ComponentMeta, ComponentStory} from '@storybook/react'
import { MouseEvent} from 'react'
import ButtonLanguage from '../../components/Button/LanguageButton/';

export default {
    title:'Button',
    component: ButtonLanguage
} as ComponentMeta<typeof ButtonLanguage>

const handleClick = (e: MouseEvent<HTMLButtonElement>)=>{
    console.log(e);
}

const Template:ComponentStory<typeof ButtonLanguage> = (args) => {
    return<ButtonLanguage {...args}/>
}

export const ButtonLanguageComponent = Template.bind({})
ButtonLanguageComponent.args={
    flag:'MX'
}