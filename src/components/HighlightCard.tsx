"use client"

import { ReactNode } from "react";
import { Card } from "./ui/card";

interface HighlightCardProps {
  children?: ReactNode;
}

const HighlightCard = ({ children }: HighlightCardProps) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <Card
      id="highlight_card"
      onMouseMove={handleMouseMove}
      className="p-[2px] rounded-xl border-none"
    >
      <div id="card_border" />
      <div
        id="card_content"
        className="p-6"
        style={{ background: "rgba(20, 20, 20, 0.95)" }}
      >
        {children}
      </div>
    </Card>
  );
};

export default HighlightCard;
