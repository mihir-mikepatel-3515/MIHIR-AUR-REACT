import React, { useState, useEffect } from "react";

function Clock({ color = "yellow" }) {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "black",
        color: color,
        width: "220px",
        padding: "20px",
        borderRadius: "12px",
        fontSize: "36px",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: "15px",
      }}
    >
      {time}
    </div>
  );
}

export default Clock;