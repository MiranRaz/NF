import { useEffect, useRef } from "react";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const RedEpic = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const html = document.documentElement;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const frameCount = 639;
    const scrollMultiplier = 0.1; // Adjust the scroll speed multiplier

    const currentFrame = (index) =>
      `src/assets/red_epic_frames/red_${index
        .toString()
        .padStart(0, "0")}.jpeg`; // Update the path and filename pattern for your images

    const preloadImages = () => {
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
      }
    };

    const img = new Image();
    img.src = currentFrame(1);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    img.onload = function () {
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    const updateImage = (index) => {
      img.src = currentFrame(index);
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    const handleScroll = () => {
      const scrollTop = html.scrollTop;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount * scrollMultiplier) // Apply scrollMultiplier
      );

      requestAnimationFrame(() => updateImage(frameIndex + 1));
    };

    window.addEventListener("scroll", handleScroll);
    preloadImages();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        backgroundColor: "#f7f7f7",
      }}
    >
      <canvas
        id="hero-lightpass"
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <Button
        variant="text"
        sx={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          color: "black",
        }}
        endIcon={<ArrowForwardIcon />}
      >
        Check out our gear
      </Button>
    </div>
  );
};

export default RedEpic;
