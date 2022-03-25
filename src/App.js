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
import AddPost from "./pages/AddPost";

function App() {
  return (
    <Router>
    <div>

      <nav>
        <ul>
          <li>
            <Link to='/posts'>Posts</Link>
          </li>
          <li>
              <Link to='/add'>Add Post</Link>
          </li>
        </ul>
      </nav>

      <Switch>
          <Route exact path="/"><Redirect to="/posts" /></Route>
          <Route path='/posts'>
            <AppPosts />
          </Route>
          <Route exact path='/post/:id'>
            <SinglePost />
          </Route>
          <Route path='/add'>
            <AddPost />
          </Route>
          <Route path='/edit/:id'>
            <AddPost />
          </Route>
      </Switch>

    </div>
    </Router>
  );
}

export default App;
