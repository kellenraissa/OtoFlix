import { LinearGradient } from "expo-linear-gradient";
import { ReactElement } from "react";

interface ContainerGradient {
  children: ReactElement;
  isFull?: boolean;
}

export default function ContainerGradient({
  children,
  isFull = false,
}: ContainerGradient) {
  return (
    <LinearGradient
      colors={["#000000", "#16060b", "#27050f"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1, padding: isFull ? 0 : 10 }}
    >
      {children}
    </LinearGradient>
  );
}
