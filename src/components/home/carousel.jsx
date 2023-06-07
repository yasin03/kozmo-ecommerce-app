import * as React from "react";
import { Dimensions, Image, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const CarouselItem = () => {
  const width = Dimensions.get("window").width;

  const images = [
    {
      url: "https://www.luksdukkan.com/class/INNOVAEditor/assets/markabanner/maybelline-mega-banner.jpg",
    },
    {
      url: "https://i.pinimg.com/originals/6e/4f/60/6e4f60ad96ab1380f0587200c84a9254.jpg",
    },
    {
      url: "https://img.freepik.com/premium-vector/foundation-makeup-advertising-design-template-catalog-with-concealer-bb-cream-packaging-tube_136277-345.jpg",
    },
  ];

  return (
    <View className="flex-1 my-2 rounded-2xl ">
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={images}
        mode="parallax"
        scrollAnimationDuration={3000}
        renderItem={({ index }) => (
          <View className="flex-1 rounded-2xl">
            {images.map((item, index) => {
              return (
                <Image
                  key={index}
                  source={{ uri: item.url }}
                  className="w-full h-full rounded-2xl"
                />
              );
            })}
          </View>
        )}
      />
    </View>
  );
};

export default CarouselItem;
