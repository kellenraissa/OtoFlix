import { LinearGradient } from "expo-linear-gradient";
import { ReactElement } from "react";

interface ContainerGradient {
  children: ReactElement;
}

export default function ContainerGradient({ children }: ContainerGradient) {
  return (
    <LinearGradient
      colors={["#000000", "#16060b", "#27050f"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1, padding: 10 }}
    >
      {children}
    </LinearGradient>
  );
}
