import React, { useState } from "react";

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((currentCount) => currentCount + 1);
  };

  return (
    <>
      <h1 className="c-headline-1">React workshop</h1>
      {/* Plasser knappene i oppgave 1 her */}
    </>
  );
};

export default App;
