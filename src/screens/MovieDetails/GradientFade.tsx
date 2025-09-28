import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";

export default function GradientFade() {
  return (
    <LinearGradient
      colors={["transparent", "rgba(0,0,0,0.6)", "#16060b", "#120207"]}
      locations={[0, 0.5, 0.8, 1]}
      style={styles.fade}
    />
  );
}
