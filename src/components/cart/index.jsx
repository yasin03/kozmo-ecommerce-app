import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Cart = ({ route }) => {
  const { item, qty } = route.params;
  const [quantity, setQuantity] = useState(qty);

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      Alert.alert("Product Quantity", "Please select at least one product");
    }
  };

  const increment = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    } else {
      Alert.alert("Product Quantity", "You can buy up to 10 items");
    }
  };

  return (
    <SafeAreaView className="mx-4 mt-4">
      <ScrollView>
        {/* Cart Item */}
        <View role="list" className="mb-3 rounded-lg shadow-2xl bg-white p-3">
          <View className="flex-row shadow-2xl">
            <View className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <Image
                src={item.image_link}
                className="h-full w-full object-cover object-center"
              />
            </View>

            <View className="ml-4 flex flex-1 flex-row">
              <View className="flex justify-evenly text-base font-medium text-gray-900">
                <View>
                  <Text className="font-semibold">
                    {item.name.substring(0, 20)}...
                  </Text>
                  <Text className="text-xs">
                    {item.brand.charAt(0).toUpperCase() + item.brand.slice(1)}
                  </Text>
                </View>
                <View className="flex flex-row items-center my-1">
                  <TouchableOpacity
                    className="rounded-lg flex justify-center items-center bg-pBlack-50 border border-pBlack-400 w-5 h-5"
                    onPress={() => decrement()}
                  >
                    <Text className="font-semibold ">-</Text>
                  </TouchableOpacity>
                  <Text className="mx-4 font-bold text-md">{quantity}</Text>
                  <TouchableOpacity
                    className="rounded-lg flex justify-center items-center bg-pBlack-300 w-5 h-5"
                    onPress={() => increment()}
                  >
                    <Text className="font-semibold  text-pBlack-50">+</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View className="flex flex-1 items-end justify-evenly text-sm">
                <Text className="text-pPink-900 font-semibold text-xl ">
                  {item.price}$
                </Text>
                <TouchableOpacity
                  type="TouchableOpacity"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  <Text>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View
          role="list"
          className=" divide-y divide-pBlack-200 rounded-lg shadow-2xl bg-white p-3"
        >
          <View className="flex-row shadow-2xl">
            <View className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <Image
                src={item.image_link}
                className="h-full w-full object-cover object-center"
              />
            </View>

            <View className="ml-4 flex flex-1 flex-row">
              <View className="flex justify-evenly text-base font-medium text-gray-900">
                <View>
                  <Text className="font-semibold">
                    {item.name.substring(0, 20)}...
                  </Text>
                  <Text className="text-xs">
                    {item.brand.charAt(0).toUpperCase() + item.brand.slice(1)}
                  </Text>
                </View>
                <View className="flex flex-row items-center my-1">
                  <TouchableOpacity
                    className="rounded-md flex justify-center items-center bg-pBlack-50 border border-pBlack-400 w-5 h-5"
                    onPress={() => decrement()}
                  >
                    <Text className="font-semibold ">-</Text>
                  </TouchableOpacity>
                  <Text className="mx-4 font-bold text-md">{quantity}</Text>
                  <TouchableOpacity
                    className="rounded-md flex justify-center items-center bg-pBlack-300 w-5 h-5"
                    onPress={() => increment()}
                  >
                    <Text className="font-semibold  text-pBlack-50">+</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View className="flex flex-1 items-end justify-evenly text-sm">
                <Text className="text-pPink-900 font-semibold text-xl ">
                  {item.price}$
                </Text>
                <TouchableOpacity
                  type="TouchableOpacity"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  <Text>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* Cart Item */}
        <Text>{JSON.stringify(item)}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;
