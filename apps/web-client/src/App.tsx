import { useEffect } from "react";

import { Button } from "./components/ui/button";

function App() {
  const handleLogIn = async () => {
    window.location.href = "http://localhost:3000/api/auth/google/login";
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      localStorage.setItem("NEST_VITE_AUTH_ACCESS_TOKEN", token);

      window.location.href = "/";
    }
  }, []);

  return (
    <>
      <p>Login with Google</p>
      <Button onClick={() => handleLogIn()}>Log In</Button>
    </>
  );
}

export default App;
