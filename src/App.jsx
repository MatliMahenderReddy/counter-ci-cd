import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="container">
      <section className="counter-card">
        <p className="tag">REACT + VITE</p>
        <h1>Counter App</h1>
        <p className="description">My first CI/CD project</p>
        <div className="count" aria-live="polite">{count}</div>
        <div className="buttons">
          <button onClick={() => setCount((value) => value - 1)}>
            − Decrease
          </button>
          <button onClick={() => setCount((value) => value + 1)}>
            + Increase
          </button>
        </div>
        <button className="reset" onClick={() => setCount(0)}>
          Reset Counter
        </button>
        <p className="footer">Built with React and deployed automatically</p>
      </section>
    </main>
  );
}
