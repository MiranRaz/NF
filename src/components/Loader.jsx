import { useEffect, useState } from "react";

const Loader = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startDelay = 1000; // Delay in milliseconds before the increment starts
    const incrementDuration = 2000; // Duration in milliseconds for the increment

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (count < 101) {
          setCount((prevCount) => prevCount + 1);
        } else {
          clearInterval(interval);
        }
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
        height: "100vh",
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
