import { MovieType } from "@/types/movies";
import { FlatList } from "react-native";
import styled from "styled-components/native";

export const MoviesList = styled(FlatList<MovieType>).attrs({
  contentContainerStyle: {
    gap: 12,
  },
})``;

export const UserContent = styled.View`
  margin-bottom: 10px;
  padding: 10px;
  background-color: transparent;
  border-radius: 10px;
  gap: 4px;
`;
