import { useState } from "react";

import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Count: {count}</h1>
      <Button onClick={() => setCount((count) => count + 1)}>Set Count</Button>
    </>
  );
}

export default App;
