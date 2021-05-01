import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background-color: white;
`;
const RestaurantCardCover = styled(Card.Cover)`
  background-color: white;
`;
const Title = styled.Text`
  padding: 10px;
  font-size: 20px;
  color: red;
  font-weight: bold;
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
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
