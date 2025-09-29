import Button from "@/components/Button";
import Card from "@/components/Card";
import ContainerGradient from "@/components/ContainerGradient";
import Empty from "@/components/Empty";
import ConfirmRemoveFavoritesModal from "@/components/ModalConfirm";
import { toast } from "@/helpers/toast";
import { clear } from "@/store/favorites";
import { selectFavoritesList } from "@/store/favorites/selectors";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import React, { useState } from "react";
import { FlatList, View } from "react-native";

export default function FavoritesScreen() {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(selectFavoritesList);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ContainerGradient>
        <>
          <View style={{ padding: 20 }}>
            {favorites.length !== 0 && (
              <Button
                text="Remover todos"
                icon="HeartBreak"
                colorIcon="white"
                onPress={() => setShowModal(true)}
              />
            )}
          </View>
          <FlatList
            data={favorites}
            keyExtractor={(m) => String(m.id)}
            renderItem={({ item }) => <Card movie={item} />}
            ListEmptyComponent={
              <Empty text="Sem filmes favoritos no momento" />
            }
          />
        </>
      </ContainerGradient>
      <ConfirmRemoveFavoritesModal
        visible={showModal}
        onCancel={() => setShowModal(false)}
        onConfirm={() => {
          dispatch(clear());
          setShowModal(false);
          toast.success("Favoritos removido com sucesso");
        }}
      />
    </>
  );
}
