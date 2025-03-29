import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import CreateAccount from "./components/signup";
import Auth from "./page/auth";
import Dashboard from "./page/dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />}>
          <Route index element={<Login />} />
          <Route path="signup" element={<CreateAccount />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
