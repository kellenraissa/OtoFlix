import styled from 'styled-components/native';

import {Text} from '../Text';

export const TextInputContentError = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const TextInputMessageError = styled(Text).attrs({
  color: 'offline',
  weight: 'semibold',
})`
  font-size: ${props => props.theme.window.scale(12)}px;
`;
