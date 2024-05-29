//import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import { Home } from './components/Home/Home';
// import { LoginRegister } from './components/LoginRegister/LoginRegister';
// import { AuthState } from './context/AuthContext';

// function App() {
  

//   return (
//     <div className="flex-column justify-center align-center min-100-vh bg-primary">
//         <Outlet />
//       </div>
//     <AuthState>
//       <Router>
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/auth" component={LoginRegister} />
//           <Redirect to="/" />
//         </Switch>
//       </Router>
//     </AuthState>
//   );
// }

// export default App;
// import styles from './App.module.css';
import { Outlet } from 'react-router-dom';
function App() {
  return (
              <Outlet />
  )
}
export default App;
