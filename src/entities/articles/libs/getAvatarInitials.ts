export const getAvatarIntials = (name: string) => {
  const stringArray = name.split(" ");
  const firstName = stringArray[0];
  const lastName = stringArray[stringArray.length - 1];

  if (lastName) {
    return `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`;
  }

  return firstName[0];
};
