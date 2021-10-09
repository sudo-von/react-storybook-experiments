import React from 'react'
import Button from './Button'

export default {
  title: 'Compontents/Button',
  component: Button,
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