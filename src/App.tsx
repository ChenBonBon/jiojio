import { Button, ConfigProvider, Slider } from "joy";
import "joy/dist/style.css";
import { useEffect, useState } from "react";
import theme from "../theme.json";
import "./App.css";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);
  const [variables, setVariables] = useState(theme);

  useEffect(() => {
    ConfigProvider.config({
      theme: {
        variables,
      },
    });
  }, [variables]);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button type="primary" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <Slider
          defaultValue={
            variables["btn-border-radius"]
              ? parseInt(variables["btn-border-radius"], 10)
              : 0
          }
          onChange={(value) => {
            setVariables({ ...variables, "btn-border-radius": `${value}px` });
          }}
        />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
