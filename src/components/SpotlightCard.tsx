"use client";

import { ReactNode, useEffect } from "react";

interface SpotlightCardProps {
  height?: string;
  width?: string;
  children?: ReactNode;
}

const SpotlightCard = ({ height, width, children }: SpotlightCardProps) => {
  useEffect(() => {
    let cards: HTMLDivElement[] = document.querySelectorAll(
      "#card"
    ) as unknown as HTMLDivElement[];
    cards.forEach((card) => {
      card.onmousemove = function (e) {
        let x = e.pageX - card.offsetLeft;
        let y = e.pageY - card.offsetTop;

        card.style.setProperty("--x", x + "px");
        card.style.setProperty("--y", y + "px");
      };
    });
  }, []);

  return (
    <div id="container" className="container w-full overflow-hidden flex justify-center">
      <div
        id="card"
        className={`container ${height ? height : ""} ${
          width ? width : "w-full"
        } overflow-hidden relative bg-[#151515] rounded-2xl p-6`}
      >
        <div className="absolute z-10">{children}</div>
      </div>
    </div>
  );
};

export default SpotlightCard;
