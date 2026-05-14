import type { CSSProperties, ReactNode } from "react";

export function Stamp({
  children,
  rotate = -8,
  className = "",
  style,
}: {
  children: ReactNode;
  rotate?: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      className={`stamp ${className}`}
      style={{ transform: `rotate(${rotate}deg)`, ...style }}
    >
      {children}
    </span>
  );
}
