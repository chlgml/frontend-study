import "./App.css";
import { getDiary } from "./api/api";
import { QueryClientProvider, QueryClient } from "react-query";
import Router from "./router";

const queryClient = new QueryClient();

getDiary();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
