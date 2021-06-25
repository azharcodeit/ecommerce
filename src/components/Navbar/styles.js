import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles(theme => ({
  appBar: {
    boxShadow: 'none',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    padding: theme.spacing(0),
    background: 'transparent',
  },
  space: { padding: theme.spacing(0) },
  // toolbar: theme.mixins.toolbar,

  title: {
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
    padding: '10px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 1,
  },
  links: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '20px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));
