import styled from "styled-components/native";

export const ModalConfirmContainer = styled.Modal``;

export const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
`;

export const Box = styled.View`
  background-color: ${({ theme }) => theme.colors.modal.background};
  padding: 24px;
  border-radius: 12px;
  width: 80%;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`;

export const IconContent = styled.View`
  padding: 8px;
  align-items: center;
  justify-content: center;
  margin-bottom: 6px;
`;
