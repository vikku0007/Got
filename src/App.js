
import './App.css';
import Navbar from './Navigation/Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Pages/Login';
import Home from './Pages/Home';
import Userpro from './Pages/Users/Userprofile';
import News from "./Pages/Users/News";
import Creatorprofile from './Pages/Creator/Creator';
import Createcontent from './Pages/Creator/Createcontent';
import Kycbank from './Pages/Kyc/Kyc';
import Curatorprofile from './Pages/Curator/Curatorprofile';
import Validatecontent from './Pages/Curator/Validatecontent';
import Advertiserprofile from './Pages/Advertiser/Advertiserprofile';
import Placeads from './Pages/Advertiser/Placeads';
import Notfound from './Pages/Notfound';
import Notification from './Pages/Notify/Notification';
import Live from './Pages/Live/Live';

function App() {
  return (
    <>
    
    <Router>
      <Navbar /> 
        <Switch>
          <Route exact path="/" component={Home} /> 
          <Route exact path="/login" component={Login} />
          <Route exact path="/userprofile" component={Userpro} />
          <Route exact path="/creatorprofile" component={Creatorprofile} />
          <Route exact path="/news" component={News} />
          <Route exact path="/kyc" component={Kycbank} />
          <Route exact path="/createcontent" component={Createcontent} />
          <Route exact path="/curatorprofile" component={Curatorprofile} />
          <Route exact path="/validatecontent" component={Validatecontent} />
          <Route exact path="/advertiserprofile" component={Advertiserprofile} />
          <Route exact path="/placeads" component={Placeads} />
          <Route exact path="/notification" component={Notification} />
          <Route exact path="/live" component={Live} />
          <Route component={Notfound} />
        </Switch>        
      </Router>
    </>
  );
}

export default App;
