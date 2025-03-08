import { create } from "zustand";
import { NoteProps } from "../components/note/types";

type NotesStore = {
  notes: NoteProps[];
};

export const useNotes = create<NotesStore>(() => ({
  notes: [
    {
      id: "1",
      textContent: {
        title: "Title",
        description: "Description",
      },
      color: "bg-green-100",
      image:
        "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
    },
    {
      id: "2",
      textContent: {
        title: "Title",
        description: "Description",
      },
      color: "bg-yellow-100",
      image:
        "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
    },
    {
      id: "3",
      textContent: {
        title: "Title",
        description: "Description",
      },
      color: "bg-pink-100",
      image:
        "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
    },
    {
      id: "4",
      textContent: {
        title: "Title",
        description: "Description",
      },
      color: "bg-blue-100",
      image:
        "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
    },
  ],
}));
