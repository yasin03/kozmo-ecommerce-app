import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, View } from "react-native";
import ProductItem from "./product-item";
import axios from "axios";

const Product = ({ navigation }) => {
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
    <ScrollView horizontal={true} className="w-full">
      <FlatList
        numColumns={2}
        data={data}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        renderItem={({ item, index }) => (
          <ProductItem item={item} index={index} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </ScrollView>
  );
};

export default Product;
