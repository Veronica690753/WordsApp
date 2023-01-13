import {ComponentMeta, ComponentStory} from '@storybook/react'
import { MouseEvent} from 'react'
import { MessageNewUser } from '../../components/Messages/MessageNewUser/MessageNewUser'

export default {
    title:'Message',
    component: MessageNewUser
} as ComponentMeta<typeof MessageNewUser>

const handleClick = (e: MouseEvent<HTMLButtonElement>)=>{
    console.log(e);
    
}


const Template:ComponentStory<typeof MessageNewUser> = (args) => {

    return<MessageNewUser {...args}/>
}

export const MessageNewUserComponent = Template.bind({})
MessageNewUserComponent.args={
    onClick:handleClick,
    message: `Great! You've created new user  `  
}