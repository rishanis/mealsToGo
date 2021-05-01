import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet, View } from "react-native";
import { Card } from "react-native-paper";

const Title = styled.Text`
  padding: 15px;
  font-size: 20px;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Milan Vegies",
    icon,
    photos = [
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2011%2F12%2F13%2Franch-chicken-mac-cheese-sl-x.jpg",
    ],
    address = "100, Muhaisnah 4, Dubai",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 5,
    backgroundColor: "white",
  },
  title: {
    padding: 15,
  },
});
