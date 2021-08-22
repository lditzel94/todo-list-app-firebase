import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link as RouterLink } from 'react-router-dom'
import { useStyles } from './Header.styles'

export default function Header() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Button component={RouterLink} to="/" color="inherit" disableRipple>
            <Typography variant="h6" className={classes.title}>
              To do App
            </Typography>
          </Button>
          <Button component={RouterLink} color="inherit" to="/signin">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}
