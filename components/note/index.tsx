import { View, Text, Image } from "react-native";
import { NoteProps, colors } from "./types";
import { FontAwesome } from "@expo/vector-icons";

export function Note({
  color = colors.yellow,
  image = "",
  textContent,
}: NoteProps) {
  return (
    <View
      className={`${color} p-4 rounded-lg shadow-lg w-full min-h-[150px] justify-between`}
    >
      <Text className="text-lg font-bold text-blue-950">
        {textContent.title}
      </Text>
      {image.length > 0 && (
        <View className="flex items-center my-4">
          <Image
            source={{ uri: image }}
            className="w-32 h-32 rounded-md"
            resizeMode="cover"
          />
        </View>
      )}
      <Text
        className="text-sm text-gray-700"
        numberOfLines={3}
        ellipsizeMode="tail"
      >
        {textContent.description}
      </Text>
      <View>
        <View className="border-t border-gray-400 my-2" />
        <View className="flex flex-row justify-between">
          <FontAwesome name="edit" size={24} color="#072C5F" />
          <FontAwesome name="trash" size={24} color="#072C5F" />
        </View>
      </View>
    </View>
  );
}
