export const deleteTagsFromStrings = (text: string) => {
  return text.replace(/<[^>]*>/g, " ");
};
