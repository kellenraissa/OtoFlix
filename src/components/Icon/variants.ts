export const variants = {
  sizes: {
    extraThin: 10,
    thin: 16,
    extraSmall: 20,
    small: 22,
    normal: 24,
    medium: 28,
    large: 32,
    extraLarge: 36,
    bold: 40,
  },
} as const;

export type IconSizeProps = keyof typeof variants.sizes;
