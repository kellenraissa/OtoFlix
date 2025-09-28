import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const Content = styled.View`
  padding: 0 16px;
`;

export const HeaderWrap = styled.View`
  position: relative;
`;

export const DetailsScroll = styled.ScrollView.attrs({
  contentContainerStyle: { paddingBottom: 24 },
})`
  flex: 1;
`;

export const styles = StyleSheet.create({
  headerImage: {
    width: "100%",
    height: 300,
    borderRadius: 12,
    overflow: "hidden",
  },
  fade: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 140,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
});
