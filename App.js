
import React from "react";
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchBar}>
          <Text>Search</Text>
        </View>
        <View style={styles.body}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchBar: {
    backgroundColor: "lightgreen",
    padding: 16,
  },
  body: {
    flex: 1,
    backgroundColor: "lightblue",
    padding: 16,
  },
});
