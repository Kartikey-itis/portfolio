"use client";

import React, { useEffect, useRef, useState } from "react";

export default function AntigravityBuddy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nekoRef = useRef<HTMLDivElement>(null);
  const [speechText, setSpeechText] = useState("");
  const [showSpeech, setShowSpeech] = useState(false);
  const [basePath, setBasePath] = useState("");
  const speechTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.pathname.startsWith("/portfolio")) {
      setBasePath("/portfolio");
    }
  }, []);

  useEffect(() => {
    const isReducedMotion =
      window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
    if (isReducedMotion) return;

    const containerEl = containerRef.current;
    const nekoEl = nekoRef.current;
    if (!containerEl || !nekoEl) return;

    // Center cat initially
    let nekoPosX = window.innerWidth / 2;
    let nekoPosY = window.innerHeight / 2;
    let mousePosX = nekoPosX;
    let mousePosY = nekoPosY;
    let frameCount = 0;
    let idleTime = 0;
    let idleAnimation: string | null = null;
    let idleAnimationFrame = 0;
    const nekoSpeed = 10;

    const spriteSets: Record<string, [number, number][]> = {
      idle: [[-3, -3]],
      alert: [[-7, -3]],
      scratchSelf: [
        [-5, 0],
        [-6, 0],
        [-7, 0],
      ],
      scratchWallN: [
        [0, 0],
        [0, -1],
      ],
      scratchWallS: [
        [-7, -1],
        [-6, -2],
      ],
      scratchWallE: [
        [-2, -2],
        [-2, -3],
      ],
      scratchWallW: [
        [-4, 0],
        [-4, -1],
      ],
      tired: [[-3, -2]],
      sleeping: [
        [-2, 0],
        [-2, -1],
      ],
      N: [
        [-1, -2],
        [-1, -3],
      ],
      NE: [
        [0, -2],
        [0, -3],
      ],
      E: [
        [-3, 0],
        [-3, -1],
      ],
      SE: [
        [-5, -1],
        [-5, -2],
      ],
      S: [
        [-6, -3],
        [-7, -2],
      ],
      SW: [
        [-5, -3],
        [-6, -1],
      ],
      W: [
        [-4, -2],
        [-4, -3],
      ],
      NW: [
        [-1, 0],
        [-1, -1],
      ],
    };

    function setSprite(name: string, frame: number) {
      const set = spriteSets[name];
      if (!set) return;
      const sprite = set[frame % set.length];
      nekoEl.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
    }

    function resetIdleAnimation() {
      idleAnimation = null;
      idleAnimationFrame = 0;
    }

    function idle() {
      idleTime += 1;

      // Randomly trigger sleeping or scratching animations when idle
      if (
        idleTime > 10 &&
        Math.floor(Math.random() * 200) === 0 &&
        idleAnimation === null
      ) {
        let availableIdleAnimations = ["sleeping", "scratchSelf"];
        if (nekoPosX < 32) {
          availableIdleAnimations.push("scratchWallW");
        }
        if (nekoPosY < 32) {
          availableIdleAnimations.push("scratchWallN");
        }
        if (nekoPosX > window.innerWidth - 32) {
          availableIdleAnimations.push("scratchWallE");
        }
        if (nekoPosY > window.innerHeight - 32) {
          availableIdleAnimations.push("scratchWallS");
        }
        idleAnimation =
          availableIdleAnimations[
            Math.floor(Math.random() * availableIdleAnimations.length)
          ];
      }

      switch (idleAnimation) {
        case "sleeping":
          if (idleAnimationFrame < 8) {
            setSprite("tired", 0);
            break;
          }
          setSprite("sleeping", Math.floor(idleAnimationFrame / 4));
          if (idleAnimationFrame > 192) {
            resetIdleAnimation();
          }
          break;
        case "scratchWallN":
        case "scratchWallS":
        case "scratchWallE":
        case "scratchWallW":
        case "scratchSelf":
          setSprite(idleAnimation, idleAnimationFrame);
          if (idleAnimationFrame > 9) {
            resetIdleAnimation();
          }
          break;
        default:
          setSprite("idle", 0);
          return;
      }
      idleAnimationFrame += 1;
    }

    function frame() {
      frameCount += 1;
      const diffX = nekoPosX - mousePosX;
      const diffY = nekoPosY - mousePosY;
      const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

      // Idle behavior when close to cursor
      if (distance < nekoSpeed || distance < 48) {
        idle();
        return;
      }

      idleAnimation = null;
      idleAnimationFrame = 0;

      // Alerted state before starting the chase
      if (idleTime > 1) {
        setSprite("alert", 0);
        idleTime = Math.min(idleTime, 7);
        idleTime -= 1;
        return;
      }

      let direction = "";
      if (diffY / distance > 0.5) direction = "N";
      else if (diffY / distance < -0.5) direction = "S";

      if (diffX / distance > 0.5) direction += "W";
      else if (diffX / distance < -0.5) direction += "E";

      if (!direction) direction = "E";

      setSprite(direction, frameCount);

      nekoPosX -= (diffX / distance) * nekoSpeed;
      nekoPosY -= (diffY / distance) * nekoSpeed;

      // Constrain position to viewport boundaries
      nekoPosX = Math.min(Math.max(16, nekoPosX), window.innerWidth - 16);
      nekoPosY = Math.min(Math.max(16, nekoPosY), window.innerHeight - 16);

      containerEl.style.left = `${nekoPosX - 16}px`;
      containerEl.style.top = `${nekoPosY - 16}px`;
    }

    // Set initial position
    containerEl.style.left = `${nekoPosX - 16}px`;
    containerEl.style.top = `${nekoPosY - 16}px`;

    const handleMouseMove = (e: MouseEvent) => {
      mousePosX = e.clientX;
      mousePosY = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    let lastFrameTimestamp = 0;
    let animationFrameId: number;

    function onAnimationFrame(timestamp: number) {
      if (!lastFrameTimestamp) {
        lastFrameTimestamp = timestamp;
      }
      if (timestamp - lastFrameTimestamp > 100) {
        lastFrameTimestamp = timestamp;
        frame();
      }
      animationFrameId = window.requestAnimationFrame(onAnimationFrame);
    }

    animationFrameId = window.requestAnimationFrame(onAnimationFrame);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const triggerSpeech = (text: string) => {
    if (speechTimeoutRef.current) clearTimeout(speechTimeoutRef.current);
    setSpeechText(text);
    setShowSpeech(true);
    speechTimeoutRef.current = setTimeout(() => {
      setShowSpeech(false);
    }, 2500);
  };

  const handleNekoClick = () => {
    const meows = [
      "Meow! 🐾",
      "Purrr...",
      "Feeding on code! 💻",
      "Anti-gravity mode: ON! 🚀",
      "Catch me if you can! 🐱",
      "Need a bug catcher? 🐞",
      "Hello human! ⭐",
    ];
    const randomMeow = meows[Math.floor(Math.random() * meows.length)];
    triggerSpeech(randomMeow);
  };

  return (
    <>
      <style jsx global>{`
        .oneko-container {
          position: fixed;
          width: 32px;
          height: 32px;
          pointer-events: none;
          z-index: 999999;
          /* Scale cat sprite for higher resolution and modern retro feel */
          transform: scale(2.2);
          transform-origin: center center;
          transition: transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .oneko-sprite {
          width: 32px;
          height: 32px;
          image-rendering: pixelated;
          pointer-events: auto;
          cursor: pointer;
        }

        .oneko-speech {
          position: absolute;
          bottom: 44px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(15, 23, 42, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #f8fafc;
          padding: 6px 12px;
          border-radius: 12px;
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 10px;
          font-weight: 600;
          white-space: nowrap;
          pointer-events: none;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(6px);
          z-index: 1000000;
          animation: oneko-fade-in-up 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .oneko-speech::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          border-width: 5px 5px 0;
          border-style: solid;
          border-color: rgba(15, 23, 42, 0.95) transparent;
          display: block;
          width: 0;
        }

        @keyframes oneko-fade-in-up {
          from {
            opacity: 0;
            transform: translate(-50%, 6px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
      `}</style>

      {/* Dynamic Oneko Neko wrapper */}
      <div className="oneko-container" ref={containerRef}>
        <div
          className="oneko-sprite"
          ref={nekoRef}
          onClick={handleNekoClick}
          onMouseEnter={() => triggerSpeech("Meow? 😺")}
          style={{ backgroundImage: `url("${basePath}/oneko.gif")` }}
        />
        {/* Speech bubble following Oneko container */}
        {showSpeech && <div className="oneko-speech">{speechText}</div>}
      </div>
    </>
  );
}
