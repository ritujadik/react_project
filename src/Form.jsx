import { useState } from "react";

const UNameExample = () => {
  const [uName, setUName] = useState("Rituja");
  console.log("Re-Rendering: ", uName);
  return (
    <div>
      <button onClick={() => setUName("Sam")}>Change Name on Click</button>
      <h1>name:{uName}</h1>
      <div>
        <div>
          <div>
            <p>my name is:{uName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UNameExample;
