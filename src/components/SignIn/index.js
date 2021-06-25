import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signInWithGoogle } from '../../firebase/utils';
import {
  Typography,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Container,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  title: {
    fontSize: '30px',
    textDecoration: 'none',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(1, 0, 1),
    boxShadow: 'none',
  },
  link: {
    textDecoration: 'none',
  },
});

class SignIn extends Component {
  handleSubmit = async e => {
    e.preventDefault();
  };
  render() {
    const { classes } = this.props;

    return (
      <>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Вход
            </Typography>
            <form className={classes.form} onSubmit={this.handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Адрес эл. почты"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Введите пароль"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Войти
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                color="primary"
                className={classes.submit}
                onClick={signInWithGoogle}
              >
                Войти через Google
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="/" variant="body2" className={classes.link}>
                    Забыли пароль?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    to="/registration"
                    variant="body2"
                    className={classes.link}
                  >
                    {'Зарегистрироваться'}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={8}></Box>
        </Container>
      </>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SignIn);
