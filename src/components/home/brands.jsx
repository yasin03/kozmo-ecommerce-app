import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const Brands = () => {
  const brands = `almay
alva
anna sui
annabelle
benefit
boosh
burt's bees
butter london
c'est moi
cargo cosmetics
china glaze
clinique
coastal classic creation
colourpop
covergirl
dalish
deciem
dior
dr. hauschka
e.l.f.
essie
fenty
glossier
green people
iman
l'oreal
lotus cosmetics usa
maia's mineral galaxy
marcelle
marienatie
maybelline
milani
mineral fusion
misa
mistura
moov
nudus
nyx
orly
pacifica
penny lane organics
physicians formula
piggy paint
pure anada
rejuva minerals
revlon
sally b's skin yummies
salon perfect
sante
sinful colours
smashbox
stila
suncoat
w3llpeople
wet n wild
zorah
zorah biocosmetiques`;

  const brandArray = brands.split("\n");

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {brandArray.map((brand, index) => (
        <TouchableOpacity key={index} className="px-5 h-9 flex justify-center border border-pBlack200 bg-white rounded-lg mr-2">
          <Text key={index}>
            {brand.charAt(0).toUpperCase() + brand.slice(1)}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Brands;
