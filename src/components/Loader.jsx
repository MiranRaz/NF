import { useEffect, useState } from "react";

const Loader = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startDelay = 1000; // Delay in milliseconds before the increment starts
    const incrementDuration = 2000; // Duration in milliseconds for the increment

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, incrementDuration / 100); // Increment every (incrementDuration / 100) milliseconds

      return () => {
        clearInterval(interval); // Cleanup the interval on component unmount
      };
    }, startDelay);

    return () => {
      clearTimeout(timeout); // Cleanup the timeout on component unmount
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div
      style={{
        height: window.innerHeight,
        width: "100%",
        backgroundColor: "white",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {count}%
    </div>
  );
};

export default Loader;
