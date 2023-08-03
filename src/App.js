import React, { useMemo, useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, Setcounter] = useState(1);

  // const result = useMemo(() => factorial(counter), [counter]);
  const result = factorial(counter);

  const [name, Setname] = useState("");
  return (
    <div className="App">
      <h1>
        Factorial of {counter} : {result}
      </h1>
      <div>
        <button onClick={() => Setcounter(counter - 1)}>Decrement</button>
        <button onClick={() => Setcounter(counter + 1)}>Increment</button>
      </div>
      <hr />
      <input
        type="text"
        value={name}
        placeholder="Enter name"
        onChange={(e) => Setname(e.target.value)}
      />
      <p>Your name : {name}</p>
    </div>
  );
}

const factorial = (n) => {
  console.log(n);
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
};
