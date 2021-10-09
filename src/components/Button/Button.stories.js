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

export const Secondary = Template.bind({})
Secondary.args = {
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

export const PrimaryMedium = Template.bind({})
PrimaryMedium.args = {
  label: 'Click me!',
  backgroundColor: '#1e81b0',
  size: 'md',
  color: 'white'
}

export const SecondaryMedium = Template.bind({})
SecondaryMedium.args = {
  label: 'Click me!',
  backgroundColor: '#e28743',
  size: 'md',
  color: 'white'
}

export const TertiaryMedium = Template.bind({})
TertiaryMedium.args = {
  label: 'Click me!',
  backgroundColor: '#76b5c5',
  size: 'md',
  color: 'white'
}

export const PrimaryLarge = Template.bind({})
PrimaryLarge.args = {
  label: 'Click me!',
  backgroundColor: '#1e81b0',
  size: 'lg',
  color: 'white'
}

export const SecondaryLarge = Template.bind({})
SecondaryLarge.args = {
  label: 'Click me!',
  backgroundColor: '#e28743',
  size: 'lg',
  color: 'white'
}

export const TertiaryLarge = Template.bind({})
TertiaryLarge.args = {
  label: 'Click me!',
  backgroundColor: '#76b5c5',
  size: 'lg',
  color: 'white'
}