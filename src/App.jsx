import "./App.css";

import AppRoutes from "./routes/AppRoutes";
import AuthContextProvider from "./context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthContextProvider>
  );
}

export default App;
