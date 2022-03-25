import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import AppPosts from "./pages/AppPosts";
import './App.css';
import SinglePost from "./components/SinglePost";

function App() {
  return (
    <Router>
    <div>

      <nav>
        <ul>
          <li>
            <Link to='/posts'>Posts</Link>
          </li>
        </ul>
      </nav>

      <Switch>
          <Route exact path="/"><Redirect to="/posts" /></Route>
          <Route path='/posts'>
            <AppPosts />
          </Route>
          <Route to='/post/:id'>
            <SinglePost />
          </Route>
      </Switch>

    </div>
    </Router>
  );
}

export default App;
