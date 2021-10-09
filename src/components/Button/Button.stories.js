import React from 'react'
import Button from './Button'

export default {
  title: 'Compontents/Button',
  component: Button,
  argTypes: { handleClick: { action: 'handleClick' }}
}

const Template = (args) => <Button {...args}/>

export const Primary = Template.bind({})
Primary.args = {
  label: 'Click me!',
  backgroundColor: '#1e81b0',
  size: 'sm',
  color: 'white'
}

export const Sencondary = Template.bind({})
Sencondary.args = {
  label: 'Click me!',
  backgroundColor: '#e28743',
  size: 'sm',
  color: 'white'
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  label: 'Click me!',
  backgroundColor: '#76b5c5',
  size: 'sm',
  color: 'white'
}