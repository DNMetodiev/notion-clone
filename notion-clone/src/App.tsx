import { Page } from "./Page/Page";
import { AppStateProvider } from "../src/state/AppStateContext";
import { Route, Routes } from "react-router-dom";
import { Auth } from "../src/auth/Auth";
import { Private } from "../src/auth/Private";

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route
        path="/:id"
        element={
          <Private
            component={
              <AppStateProvider >
                <Page />
              </AppStateProvider>
            }
          />
        }
      />
      <Route
        path="/"
        element={
          <Private
            component={
              <AppStateProvider >
                <Page />
              </AppStateProvider>
            }
          />
        }
      />
    </Routes>
  );
}

export default App;