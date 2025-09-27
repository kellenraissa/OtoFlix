import {TextProps as TextPropsRN} from 'react-native';

import {TextContainer} from './styles';

export interface TextProps extends TextPropsRN {
  size?: number;
  weight?: FontType;
  color?: TextColorType;
  isCenter?: boolean;
}

export function Text({
  size = 16,
  weight = 'medium',
  color = 'primary',
  isCenter = false,
  ...rest
}: TextProps) {
  return (
    <TextContainer
      $weight={weight}
      $color={color}
      $size={size}
      $isCenter={isCenter}
      {...rest}
    />
  );
}
