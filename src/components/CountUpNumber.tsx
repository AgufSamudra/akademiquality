"use client";

import { useEffect, useRef, useState } from "react";

type CountUpNumberProps = {
  className?: string;
  duration?: number;
  value: string;
};

function parseStatValue(value: string) {
  const match = value.match(/^(\d+)(.*)$/);

  if (!match) {
    return {
      suffix: "",
      target: 0,
    };
  }

  return {
    suffix: match[2],
    target: Number(match[1]),
  };
}

export function CountUpNumber({
  className = "",
  duration = 1400,
  value,
}: CountUpNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const { suffix, target } = parseStatValue(value);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) {
      return;
    }

    let animationFrame = 0;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(target * easedProgress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [duration, hasStarted, target]);

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  );
}
