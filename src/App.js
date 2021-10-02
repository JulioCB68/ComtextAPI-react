import React from "react";
import Login from "./components/login";
import Profile from "./components/profile";
import { useAuth } from "./context/index";

function App() {
  const { user } = useAuth();

  console.log(user);

  return (
    <div className="App">
      <h1>Faça Login</h1>
      <Profile />
      <Login />
    </div>
  );
}

export default App;
