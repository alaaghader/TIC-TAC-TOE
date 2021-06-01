import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import * as Font from "expo-font";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import homePage from "./components/homePage";
import playGame from "./components/playGame";
import rules from "./components/rules";

const fetchFont = () => {
  return Font.loadAsync({
    "YellowtailRegular": require("./assets/fonts/Yellowtail-Regular.ttf"),
  });
};

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const Stack = createStackNavigator();
  useEffect(() => {
    fetchFont().then(() => setFontLoaded(true));
  });

  if (!fontLoaded)
    return <Text>Loading</Text>
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="Home"
          component={homePage}
        />
        <Stack.Screen
          name="Game"
          component={playGame}
        />
        <Stack.Screen
          name="Rules"
          component={rules}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App