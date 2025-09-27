import styled, {css} from 'styled-components/native';

interface TextContainerProps {
  $size: number;
  $weight: FontType;
  $color: TextColorType;
  $isCenter: boolean;
}

export const TextContainer = styled.Text<TextContainerProps>`
  ${({theme, $weight, $color, $size, $isCenter}) => css`
    color: ${theme.colors.text[$color]};
    font-family: ${theme.fonts.montserrat[$weight]};
    font-size: ${theme.window.scale($size)}px;
    text-align: ${$isCenter ? 'center' : 'start'};
  `};
`;
