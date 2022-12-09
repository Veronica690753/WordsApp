import {ComponentMeta, ComponentStory} from '@storybook/react'
import { MouseEvent} from 'react'
import ModalEditUser from '../../components/Modal/ModalEditUsers'


export default {
    title:'Modal',
    component: ModalEditUser
} as ComponentMeta<typeof ModalEditUser>



const Template:ComponentStory<typeof ModalEditUser> = (args) => {

    return<ModalEditUser {...args}/>
}

export const ModalEditUserComponent = Template.bind({})
ModalEditUserComponent.args={
    size:'md',
    backgroundColor:'var(--gray600)',
    textHeader:'Edit User'
}