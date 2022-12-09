import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputTypeUser } from '../../components/Input/InputTypeUser';


export default {
	title: 'Input',
	component: InputTypeUser,
} as ComponentMeta<typeof InputTypeUser>

const handleClick = () => {

}

const Template: ComponentStory<typeof InputTypeUser> = (args) => {
	return <InputTypeUser {...args} />
}

export const InputTypeUserComponent = Template.bind({})
InputTypeUserComponent.args = {
	size: 'lg',
	type: 'text',
	text: 'Search User',
    eventHandler: handleClick,
}