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

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    await axios
      .get(
        "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
      )
      .then((res) => setData(res.data))
      .catch((err) => console.log("Error : " + err));
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <SafeAreaView className="mt-8 mx-4">
      <ScrollView>
        <View className="flex-1 mt-4">
          <Image
            source={require("../../../assets/images/kozmo-logo.png")}
            className="w-10/12 h-16 p-4 m-auto mb-2"
          />
          <TextInput
            className="w-full h-10 rounded-full border mt-2 py-2 px-5"
            placeholder="Search"
          />
          <CarouselItem />
          <Text className="text-center mb-2">
            #Categories #Products #Popular
          </Text>
        </View>
        <View className="my-2 mb-4">
          <ScrollView horizontal={true} className="w-full">
            <FlatList
              numColumns={2}
              data={data}
              ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
              renderItem={({ item, index }) => (
                <ProductItem
                  item={item}
                  index={index}
                  navigation={navigation}
                />
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
