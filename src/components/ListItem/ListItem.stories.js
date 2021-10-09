import React from 'react'
import ListItem from './ListItem'

export default {
  title: 'Compontents/ListItem',
  component: ListItem
}

const Template = (args) => <ListItem {...args}/>

export const Item = Template.bind({})
Item.args = {
  label: 'Hello!'
}