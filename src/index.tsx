import { render } from "react-dom";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

render(
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorBoundary>,
  document.getElementById("root")
);
