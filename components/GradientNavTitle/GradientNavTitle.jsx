import React, { useEffect, useRef } from "react";
import { Title } from "@mantine/core";
import Link from "next/link";

const GradientNavTitle = ({ text, order = 2, size = "2em" }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    let start = 0;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = ((timestamp - start) % 4000) / 4000;

      const hue1 = Math.floor(progress * 360);
      const hue2 = (hue1 + 70) % 360;

      title.style.backgroundImage = `linear-gradient(to right, hsl(${hue1}, 100%, 50%), hsl(${hue2}, 100%, 50%))`;

      requestAnimationFrame(animate);
    };

    const animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <Link href="/" style={{ textDecoration: "none" }}>
      <Title
        ref={titleRef}
        order={order}
        style={{
          fontSize: size,
          backgroundClip: "text",
          textFillColor: "transparent",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          transition: "all 1s ease-in-out",
        }}
      >
        {text}
      </Title>
    </Link>
  );
};

export default GradientNavTitle;
