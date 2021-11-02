import { Route, Link } from "react-router-dom";
import { About } from "./About";
import { Home } from "./Home";
import { Admin } from "./Admin";
import { ErrorBoundary } from "react-error-boundary";
import { QueryClient, QueryClientProvider } from "react-query";

const brandColor = "blue";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
        <ErrorBoundary fallback={<>Sorry!</>}>
          <Admin />
        </ErrorBoundary>
      </Route>

      <Route path="/about">
        <About />
      </Route>
    </QueryClientProvider>
  );
}
