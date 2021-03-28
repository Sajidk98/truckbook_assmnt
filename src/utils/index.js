export const getGenre = (list, genre) => {
  const currentGenre =
    list.length !== 0 &&
    list.map((item) => {
      const p = genre.data && genre.data.find((g) => g.id === item);
      return p.name;
    });
  return currentGenre.toString();
};
