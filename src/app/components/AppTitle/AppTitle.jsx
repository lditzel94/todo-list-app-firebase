import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
  },
}))

export default function AppTitle() {
  const classes = useStyles()

  return (
    <>
      <Typography color={'primary'} className={classes.title} variant={'h1'}>
        TO DO APP
      </Typography>
      <Typography variant={'subtitle1'} className={classes.title}>
        Hit enter to insert new tasks
      </Typography>
    </>
  )
}
