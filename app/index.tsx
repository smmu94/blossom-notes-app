import React from "react";
import { View } from "react-native";
import { Screen } from "../components/screen";
import { Note } from "../components/note";
import { useNotes } from "../store/useNotes";

const Home = () => {
  const { notes } = useNotes();
  return (
    <Screen>
      <View className="flex flex-col justify-center">
        {notes.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </View>
    </Screen>
  );
};

export default Home;
