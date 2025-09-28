import styled from "styled-components/native";

export const CardContainer = styled.TouchableOpacity`
  flex-direction: row;
  padding: 12px;
  gap: 12px;
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: 10px;
`;

export const Overlay = styled.View`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const InfoContent = styled.View`
  flex-shrink: 1;
  padding: 10px;
  gap: 2px;
`;
