import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
const ProductDetail = ({ navigation, route }) => {
  const [qty, setQty] = useState(1);

  const decrement = () => {
    if (qty > 1) {
      setQty(qty - 1);
    } else {
      Alert.alert("Product Quantity", "Please select at least one product");
    }
  };

  const increment = () => {
    if (qty < 10) {
      setQty(qty + 1);
    } else {
      Alert.alert("Product Quantity", "You can buy up to 10 items");
    }
  };

  const { item } = route.params;

  const colors = item.product_colors.map((color) => color.hex_value);
  const hasColors = colors.length > 0;

  const desc = item.description.replace(/\s+/g, " ").replace(/\n/g, "");

  return (
    <SafeAreaView className="relative flex-1 mx-4 ">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image src={item.image_link} className="w-full h-72" />
        {/* Brand Name */}
        <View className="flex flex-row justify-between items-center my-2">
          <Text className=" text-pBlack900 text-lg font-semibold">
            {item.name}
          </Text>
        </View>

        {/*Price Area */}
        <View className="flex flex-row justify-between items-center my-1">
          <View className="flex flex-row items-center">
            <TouchableOpacity
              className="rounded-lg flex justify-center items-center bg-pBlack-50 border border-pBlack-400 w-8 h-8"
              onPress={() => decrement()}
            >
              <Text className="font-semibold text-lg ">-</Text>
            </TouchableOpacity>
            <Text className="mx-4 font-bold text-lg">{qty}</Text>
            <TouchableOpacity
              className="rounded-lg flex justify-center items-center bg-pBlack-300 w-8 h-8"
              onPress={() => increment()}
            >
              <Text className="font-semibold text-lg text-pBlack-50">+</Text>
            </TouchableOpacity>
          </View>
          <View className="flex items-end">
            <Text className="line-through">{item.price} $</Text>
            <Text className="text-xl font-semibold text-pPink-900">
              {(item.price * qty).toFixed(2)}$
            </Text>
            <Text className="text-sm">219 people buy this</Text>
          </View>
        </View>
        {/* Color Choices Area */}
        <View className="my-2">
          <Text className="mb-2 text-pBlack-500">Color Choices</Text>
          <View className="flex flex-row ">
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {hasColors ? (
                colors.map((color, index) => (
                  <View
                    key={index}
                    className="h-10 w-14 rounded-lg"
                    style={{
                      backgroundColor: color,
                      marginRight: index < colors.length - 1 ? 5 : 0,
                    }}
                  />
                ))
              ) : (
                <Text className="mb-2 text-pBlack-500">
                  No available colors
                </Text>
              )}
            </ScrollView>
          </View>
        </View>
        {/* Brand Follow Area */}
        <View className="flex-row justify-between items-center border-y border-pBlack-100 py-2">
          <View className="flex-row items-center gap-4">
            <Image
              source={{
                uri: "https://t-2.tstatic.net/tribunnewswiki/foto/bank/images/maybelline.jpg",
              }}
              className="w-14 h-14 rounded-full"
            />
            <Text className=" text-pBlack-700 text-xl font-semibold">
              {item.brand.charAt(0).toUpperCase() +
                item.brand.toLowerCase().slice(1)}
            </Text>
          </View>
          <TouchableOpacity className="p-2 px-5 border border-secondary bg-pPink-50 rounded-lg cursor-pointer">
            <Text className="text-pPink-700 font-medium text-lg">Follow</Text>
          </TouchableOpacity>
        </View>
        {/* Description Area */}
        <View className="mb-16">
          <Text className="text-xl my-2 font-bold ">Product Description</Text>
          <Text className="text-lg my-2 text-justify">{desc}</Text>
        </View>
      </ScrollView>
      {/* Add Chart Section */}
      <View className="absolute bottom-0 left-0 right-0 bg-pBlack-50 p-3">
        <View className="flex flex-row items-center justify-between">
          <TouchableOpacity className="p-2 px-6 bg-[#075E54] rounded-lg cursor-pointer">
            <Text className="text-white font-medium text-lg">WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-pPink-700 rounded-md p-2 px-6"
            onPress={() => navigation.navigate("Cart", { item, qty })}
          >
            <Text className="text-white font-medium text-lg">Add Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;
