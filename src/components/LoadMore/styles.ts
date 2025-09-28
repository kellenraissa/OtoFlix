import styled from "styled-components/native";

interface LoadMoreContainerProps {
  $canLoadMore?: boolean;
}
export const LoadMoreContainer = styled.TouchableOpacity<LoadMoreContainerProps>`
  padding: 16px;
  align-items: center;
  opacity: ${({ $canLoadMore }) => ($canLoadMore ? 1 : 0.5)};
`;
