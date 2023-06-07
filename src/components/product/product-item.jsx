import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const ProductItem = ({ navigation, item, index }) => {
  return (
    <TouchableOpacity
      className="flex flex-col justify-between bg-pBlack-50 p-4 rounded-lg 
    w-44 h-72 border border-pBlack-200"
      style={{ marginRight: index % 2 !== 0 ? 0 : 10 }}
      onPress={() => {
        navigation.navigate("ProductDetail", { item: item });
      }}
    >
      {/* Image Area */}
      <View className="w-36 h-32">
        <Image
          source={{ uri: item.image_link }}
          className="w-full h-full object-cover "
        />
      </View>

      {/* Brand Area */}
      <Text className="font-semibold text-pBlack-500 ">
        {item.brand.charAt(0).toUpperCase() + item.brand.slice(1)}
      </Text>

      {/* Item Name Area */}
      <Text className=" text-pBlack-950" numberOfLines={2}>
        {item.name}
      </Text>

      {/* Price Area */}
      <Text className=" text-secondary font-bold text-2xl">{item.price}$</Text>
    </TouchableOpacity>
  );
};

export default ProductItem;
