import { View } from "react-native";
import { Image } from "expo-image";
import React from "react";
import Animated from "react-native-reanimated";

type Props = {
  imageSize: number;
  stickerSource: string;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  return (
    <View style={{ top: -350 }}>
      {/* <Image source={stickerSource} style={{ width: imageSize, height: imageSize }} /> */}
      {/* <Animated.Image
        source={stickerSource}
        resizeMode="contain"
        style={{ width: imageSize, height: imageSize }}
      /> */}
    </View>
  );
}
