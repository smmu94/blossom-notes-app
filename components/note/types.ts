export const colors = {
  yellow: "bg-yellow-100",
  pink: "bg-pink-100",
  blue: "bg-blue-100",
  green: "bg-green-100",
} as const;

export type NoteProps = {
  id: string;
  textContent: {
    title: string;
    description: string;
  };
  color?: (typeof colors)[keyof typeof colors];
  image?: string;
};
