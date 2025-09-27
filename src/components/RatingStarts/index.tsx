import { View } from "react-native";
import { Icon } from "../Icon";
import { Text } from "../Text";

interface RatingStarsProps {
  rating10?: number;
  size?: number;
  showNumber?: boolean;
}

export function RatingStars({
  rating10,
  size = 18,
  showNumber = false,
}: RatingStarsProps) {
  const rating5 = !!rating10
    ? Math.round((Math.max(0, Math.min(10, rating10)) / 2) * 2) / 2
    : 0;
  const full = Math.floor(rating5);
  const hasHalf = rating5 - full === 0.5;
  const empty = 5 - full - (hasHalf ? 1 : 0);

  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
      <View
        style={{ flexDirection: "row" }}
        accessible
        accessibilityLabel={`Nota ${rating10} de 10`}
      >
        {Array.from({ length: full }).map((_, i) => (
          <Icon
            name="Star"
            key={`f-${i}`}
            size={"thin"}
            color={"yellow"}
            weight="fill"
          />
        ))}
        {hasHalf && (
          <Icon name="StarHalf" size={"thin"} color="yellow" weight="fill" />
        )}
        {Array.from({ length: empty }).map((_, i) => (
          <Icon
            name="Star"
            key={`e-${i}`}
            size={"thin"}
            color="yellow"
            weight="regular"
          />
        ))}
      </View>

      {showNumber && <Text color={"white"}>{rating10?.toFixed(1)}/10</Text>}
    </View>
  );
}
