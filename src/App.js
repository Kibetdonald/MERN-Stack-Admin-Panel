
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import MyLogin from './components/login.component';
import "bootstrap/dist/css/bootstrap.min.css";
import './fontawesome-free-5.15.2-web/css/all.min.css';

//style
import './style/animate.css';
import './style/main.css';
import './style/select2.min.css';
import './style/style.css';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

import HomeContainer from './container/home/home.container';

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/login" component={MyLogin}/>
      <Route path="/" component={HomeContainer}/>

      </Switch>
  
      
     
    </Router>
    
  );}
   
export default App;
