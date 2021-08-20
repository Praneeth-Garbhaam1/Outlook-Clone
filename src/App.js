import './App.css';
import Navbar from './Components/Navbar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Icon } from 'office-ui-fabric-react/lib/Icon';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          {/* <Route path='/' exact component={Home} /> */}
          {/* <Route path='/profile' component={Profile} />
          <Route path='/shareinfo' component={Shareinfo} />
          <Route path='/operations' component={Operations} />
          <Route path='/calendar' component={Calendar} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
