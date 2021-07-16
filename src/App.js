import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { authUser, unauthUser } from './store/user/actions/user_auth';
import { getName, getIsAuthenticated } from './store/user/reducers/user'

import Products from './views/products/index';

function App() {
  const dispatch = useDispatch();

  const name = useSelector(getName)
  const isUserAuthenticated = useSelector(getIsAuthenticated)

  const classes = useStyles()

  function onLoginClick() {
    dispatch(authUser())
  }
  function onLogoutClick() {
    dispatch(unauthUser())
  }
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Product Listing App
          </Typography>
          {isUserAuthenticated ? (
            <>
              <span>{name}</span>
              <Button onClick={onLogoutClick}>Logout</Button>
            </>
          ) : (
            <>
              <Button onClick={onLoginClick}>Login</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Router>
        <>
          <Route exact path="/" component={Products} />
          <Route path="/products" component={Products} />
        </>
      </Router>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default App;
