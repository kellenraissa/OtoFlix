import React from "react";
import { Text } from "react-native";
import Button from "../Button";
import { Icon } from "../Icon";
import {
  Box,
  IconContent,
  ModalConfirmContainer,
  Overlay,
  Row,
} from "./styles";

export default function ConfirmRemoveFavoritesModal({
  visible,
  onConfirm,
  onCancel,
}: {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <ModalConfirmContainer transparent visible={visible} animationType="fade">
      <Overlay>
        <Box>
          <IconContent>
            <Icon name="HeartBreak" size="large" />
          </IconContent>

          <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
            Remover todos os favoritos?
          </Text>
          <Text style={{ color: "#ccc", marginTop: 8 }}>
            Essa ação não poderá ser desfeita.
          </Text>

          <Row>
            <Button
              style={{ flex: 1, marginRight: 12 }}
              size="small"
              text="Cancelar"
              onPress={onCancel}
              variant="secondary"
            />

            <Button
              style={{ flex: 1 }}
              size="small"
              text="Remover"
              onPress={onConfirm}
              variant="danger"
            />
          </Row>
        </Box>
      </Overlay>
    </ModalConfirmContainer>
  );
}
