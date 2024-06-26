import { useState } from "react";
import DiceLogo from "../../assets/dice-svgrepo-com.svg";
import "./index..scss";

const HomePage = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <a href="/about" target="_blank">
          <img src={DiceLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>App for tabletop home tournaments</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
};

export default HomePage;
