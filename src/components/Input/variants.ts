import {css} from 'styled-components/native';

export const variantsInput = {
  default: {
    icon: css`
      left: 16px;
    `,
    field: css`
      padding-right: ${props => props.theme.window.scale(16)}px;
      padding-left: ${props => props.theme.window.scale(16 + 20 + 8)}px;
    `,
  },
  inverted: {
    icon: css`
      right: 16px;
    `,
    field: css`
      padding-left: ${props => props.theme.window.scale(16)}px;
      padding-right: ${props => props.theme.window.scale(16 + 20 + 8)}px;
    `,
  },
} as const;

export type VariantsInput = keyof typeof variantsInput;
