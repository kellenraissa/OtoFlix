import Button from "@/components/Button";
import Card from "@/components/Card";
import ContainerGradient from "@/components/ContainerGradient";
import Empty from "@/components/Empty";
import ConfirmRemoveFavoritesModal from "@/components/ModalConfirm";
import { clear } from "@/store/favorites";
import { selectFavoritesList } from "@/store/favorites/selectors";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import React, { useState } from "react";
import { FlatList, View } from "react-native";

export default function FavoritesScreen() {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(selectFavoritesList);
  const [showModal, setShowModal] = useState(false);

  if (favorites.length === 0) {
    return (
      <ContainerGradient>
        <Empty text="Sem favoritos no momento" />
      </ContainerGradient>
    );
  }

  return (
    <>
      <ContainerGradient>
        <>
          <View style={{ padding: 20 }}>
            <Button
              text="Remover todos"
              icon="Heart"
              colorIcon="white"
              onPress={() => setShowModal(true)}
            />
          </View>
          <FlatList
            data={favorites}
            keyExtractor={(m) => String(m.id)}
            renderItem={({ item }) => <Card movie={item} />}
          />
        </>
      </ContainerGradient>
      <ConfirmRemoveFavoritesModal
        visible={showModal}
        onCancel={() => setShowModal(false)}
        onConfirm={() => {
          dispatch(clear());
          setShowModal(false);
        }}
      />
    </>
  );
}
