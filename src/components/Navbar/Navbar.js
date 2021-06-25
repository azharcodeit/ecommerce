import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import useStyles from './styles';
import { auth } from '../../firebase/utils';
import ScrollHandler from './ScrollHandler';

const PrimarySearchAppBar = props => {
  const { totalItems, currentUser } = { totalItems: 1, ...props };
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const classes = useStyles();

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          component={Link}
          to="/cart"
          aria-label="Show cart items"
          color="inherit"
        >
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <ScrollHandler>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
          <Toolbar>
            <Typography
              component={Link}
              to="/"
              variant="h6"
              className={classes.title}
              color="inherit"
            >
              <img
                src={logo}
                alt="logo"
                height="35px"
                className={classes.image}
              />
            </Typography>
            <div className={classes.grow} />

            <div className={classes.links}>
              <Typography
                component={Link}
                to="/products"
                className={classes.title}
                color="inherit"
              >
                Каталог
              </Typography>

              {/* нужно сделать чтоб нажималась */}
              {currentUser && (
                <Typography
                  component={Link}
                  to="/"
                  className={classes.title}
                  color="inherit"
                  onClick={() => auth.signOut()}
                >
                  Выйти
                </Typography>
              )}

              {!currentUser && (
                <Typography
                  component={Link}
                  to="/login"
                  className={classes.title}
                  color="inherit"
                >
                  Войти
                </Typography>
              )}
            </div>
            <IconButton
              component={Link}
              to="/cart"
              aria-label="Show cart items"
              color="inherit"
            >
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart style={{ fontSize: 25 }} variant="outlined" />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
      </ScrollHandler>
      {renderMobileMenu}
      <div className={classes.toolbar} />
    </>
  );
};

PrimarySearchAppBar.defaultProps = {
  currentUser: null,
};
export default PrimarySearchAppBar;
