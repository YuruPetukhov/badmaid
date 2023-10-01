import Table from "./components/Table";
import { ErrorBoundary } from "react-error-boundary";

function fallbackRender({ error }: { error: Error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

function App() {
  return (
    <div className="App p-2">
      <ErrorBoundary fallbackRender={fallbackRender}>
        <Table />
      </ErrorBoundary>
    </div>
  );
}

export default App;
