import React from 'react'
import {
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
} from '@material-ui/core'

export default function TaskItem({ data, changeStatus }) {
  function handleToggleCheck() {
    changeStatus(data.id, !data.completed)
  }

  return (
    <>
      <ListItem dense button onClick={handleToggleCheck}>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={data.completed}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText primary={data.text} />
      </ListItem>
    </>
  )
}
