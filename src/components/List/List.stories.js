import React from 'react'
import List from './List'
import ListItem from '../ListItem/ListItem'

export default {
  title: 'Compontents/List',
  component: List,
  subcomponents: { ListItem },
  argTypes: {
    childrenNumber: { type: 'number', defaultValue: 3 },
  },
}

const Template = ({ childrenNumber, ...args }) => (
  <List {...args}>
    {[...Array(childrenNumber).keys()].map(n => (
      <ListItem label={`List item #${n+1}`}/>
    ))}
  </List>
)

export const Empty = Template.bind({})
Empty.args = {
  direction: 'row',
  spacing: 1,
  wrap: true,
  childrenNumber: 0
}

export const OneItem = Template.bind({})
OneItem.args = {
  direction: 'row',
  spacing: 1,
  wrap: true,
  childrenNumber: 1
}

export const ManyItemsColumn = Template.bind({})
ManyItemsColumn.args = {
  direction: 'column',
  spacing: 1,
  wrap: true,
  childrenNumber: 5
}

export const ManyItemsRow = Template.bind({})
ManyItemsRow.args = {
  direction: 'row',
  spacing: 1,
  wrap: true,
  childrenNumber: 5
}