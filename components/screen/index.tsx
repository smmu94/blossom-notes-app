import { View, ImageBackground, ScrollView } from "react-native";
import { background } from "./constants";

export function Screen({ children }: { children: React.ReactNode }) {
  return (
    <ScrollView className="flex-1">
      <ImageBackground source={background} className="pt-4 pb-4 px-4">
        <View className="justify-center">{children}</View>
      </ImageBackground>
    </ScrollView>
  );
}
