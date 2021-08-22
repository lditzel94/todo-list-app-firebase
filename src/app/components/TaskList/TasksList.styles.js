import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
  },
  list: {
    width: '100%',
    marginTop: '1em',
    backgroundColor: theme.palette.background.paper,
  },
}))
