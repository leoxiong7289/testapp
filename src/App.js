import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from '../src/pages/login'
import Reset from '../src/pages/reset'
import Register from '../src/pages/register'
import Welcome from '../src/pages/welcome'

import './App.css';


// define all the routes
function App() {
  return (
    <Router>  
      <Route path='/' exact component={Login} />
      <Route path='/login/' exact component={Login} />
      <Route path='/reset/' exact component={Reset} />
      <Route path='/register/' exact component={Register} />
      <Route path='/welcome/' exact component={Welcome} />
    </Router>
  );
}

export default App;


// import React from 'react';
// // import { createBrowserHistory } from 'history';
// import { Router } from 'react-router-dom';
// import { GuardProvider, GuardedRoute } from 'react-router-guards';
// import { getIsLoggedIn } from 'utils';
 
// // const history = createBrowserHistory();
 
// const requireLogin = (to, from, next) => {
//   if (getIsLoggedIn()) {
//     next();
//   }
//   next.redirect('/login');
// };
 
// const App = () => (
//   <Router 
//     // history={history}
//   >
//     <GuardProvider error={()=><div>Not Found</div>}>
//       <GuardedRoute path="/login/" exact component={Login} />
//       <GuardedRoute path="/register/" exact component={Register} />
//       <GuardedRoute path="/" exact component={Login} />
//       <GuardProvider guards={[requireLogin]}>
//         <GuardedRoute path="/welcome" exact component={Welcome} />
//         <GuardedRoute path="/reset" exact component={Reset} />
//       </GuardProvider>
//       <GuardedRoute path="*" component={()=><div>Not Found</div>} />
//     </GuardProvider>
//   </Router>
// );

// export default App;
