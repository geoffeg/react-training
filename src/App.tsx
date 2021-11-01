import { Route, Link } from "react-router-dom";
import { About } from "./About";
import { Home } from "./Home";
import { Admin } from "./Admin";

const brandColor = "blue";

export function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/admin">
        <Admin />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </>
  );
}
