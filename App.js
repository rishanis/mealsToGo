import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StatusBar, StyleSheet, Text, View, SafeAreaView , Platform} from 'react-native';


export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <View style={{ backgroundColor: 'lightgreen', padding: 16}}>
          <Text>Search</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 16 }}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({

});
