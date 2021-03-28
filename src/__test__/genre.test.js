import { getGenre } from "../utils";
const list = [1, 2, 3];

const genre = {
  data: [
    { name: "drama", id: 1 },
    { name: "thriller", id: 2 },
    { name: "romance", id: 3 },
  ],
};

test("adds genre to string", () => {
  expect(getGenre(list, genre)).toBe("drama,thriller,romance");
});
