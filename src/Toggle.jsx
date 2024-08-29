import { useState } from "react";

const ToggleExample = () => {
  const [light, setLight] = useState(true);
  return (
    <div>
      <div
        style={{
          width: "80px",
          height: "80px",
          display: "grid",
          borderRadius: "50%",
          background: light ? "green" : "red",
          padding: "40px",
          marginBottom: "20px",
        }}
      >
        <h5>Hi,There</h5>
      </div>
      <button onClick={() => setLight(!light)}>
        {light ? "Turn Off" : "Turn On"}
      </button>
    </div>
  );
};

export default ToggleExample;
