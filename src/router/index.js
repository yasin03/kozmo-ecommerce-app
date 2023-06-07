import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../components/home";
import Product from "../components/product";
import Chart from "../components/chart";
import ProductDetail from "../components/product/product-detail";

const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="Chart" component={Chart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
