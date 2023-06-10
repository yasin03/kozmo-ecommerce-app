import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import axios from "axios";
import CarouselItem from "./carousel";
import ProductItem from "../product/product-item";
import Brands from "./brands";
import Product from "../product";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView className="mt-8 mx-4">
      <ScrollView>
        <View className="flex-1 mt-4">
          <Image
            source={require("../../../assets/images/kozmo-logo.png")}
            className="w-10/12 h-16 p-4 m-auto mb-2"
          />
          <TextInput
            className="w-full h-10 rounded-lg border mt-2 py-2 px-5"
            placeholder="Search"
          />
          <CarouselItem />
          <Text className="text-center mb-2">
            #Categories #Products #Popular
          </Text>
          <Brands />
        </View>
        <View className="my-2 mb-4">
          <Product navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
