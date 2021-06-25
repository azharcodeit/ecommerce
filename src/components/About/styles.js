import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0),
    backgroundColor: '#e1e3e3',
    minHeight: '100vh',
  },
  hr: {
    width: '2%',
    border: 'none',
    borderTop: '3px solid #505459',
    margin: theme.spacing(5, 0, 5, 0),
  },
}));
