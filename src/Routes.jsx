
import Login from './authentication/Login'
import Home from './components/Home'
import Signup from './authentication/Signup'
import Setname from './authentication/Setname'
import {
    BrowserRouter as Router,
    Route,
    // Link,
    Redirect
  } from 'react-router-dom'
  import { AuthContextProvider, useAuthState } from './secure/firebase'
  const AuthenticatedRoute = ({ component: C, ...props }) => {
    const { isAuthenticated } = useAuthState()
    console.log(`AuthenticatedRoute: ${isAuthenticated}`)
    return (
      <Route
        {...props}
        render={routeProps =>
          isAuthenticated ? <C {...routeProps} /> : <Redirect to="/login" />
        }
      />
    )
  }
  
  const UnauthenticatedRoute = ({ component: C, ...props }) => {
    const { isAuthenticated } = useAuthState()
    console.log(`UnauthenticatedRoute: ${isAuthenticated}`)
    return (
      <Route
        {...props}
        render={routeProps =>
          !isAuthenticated ? <C {...routeProps} /> : <Redirect to="/" />
        }
      />
    )
  }
  
  function Routes() {
    return (
      <AuthContextProvider>
        <Router>
          {/* <div>
            <Link to="/">Home</Link> | <Link to="/login">Login</Link> |{' '}
            <Link to="/signup">SignUp</Link>
            
          </div> */}
          {/* 
          <UnauthenticatedRoute exact path="/login" component={Login} /> */}
          <AuthenticatedRoute exact path="/" component={Home} />
          <AuthenticatedRoute exact path="/setname" component={Setname} />
          <UnauthenticatedRoute exact path="/login" component={Login} />
          <UnauthenticatedRoute exact path="/signup" component={Signup} />
        </Router>
      </AuthContextProvider>
    )
  }
  
  export default Routes
  