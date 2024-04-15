import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import UserProfile from './UserProfile';

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/user/:userId" component={UserProfile} />
    </Switch>
  </Router>
);



//example typing route parameters in a component:
import { useParams } from 'react-router-dom';

interface UserParams {
userId: string; // Assuming userId is a string
}

const UserProfile: React.FC = () => {
  const { userId } = useParams<UserParams>();

  return <div>User ID: {userId}</div>;
};

