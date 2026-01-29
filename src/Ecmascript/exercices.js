import { Search } from "./fonction.js";







// ==================================================

export const findLongestWord = (wordsArray) => {
  let [...words] = wordsArray;

  let mapped = words.map((mot) => ({ mot, longueur: mot.length }));
  let longest = mapped.reduce(
    (best, cur) => (cur.longueur > best.longueur ? cur : best),
    { mot: "", longueur: 0 }
  );

  return longest;
};

const input1 = ["bonjour", "salut", "hello", "react", "developpement"];
console.log("1) Input :", input1);
console.log("1) Output:", findLongestWord(input1));


// ==================================================



export const countOccurrences = (nested) => {
  const flattened = nested.flat();
  return flattened.reduce((acc, value) => {
    acc[value] = (acc[value] ?? 0) + 1;
    return acc;
  }, {});
};

const input = [
  ["a", "b", "c"],
  ["c", "d", "f"],
   ["d", "f", "g"],
];

console.log(" 2) Input :", input);
console.log(" 2) Output:", countOccurrences(input));

// ==================================================

export const totalAfterBonus = (students) =>
  students
    .map((s) => ({
      ...s,
      marks: s.marks < 50 ? s.marks + 15 : s.marks,
    }))
    .filter((s) => s.marks > 50)
    .reduce((sum, s) => sum + s.marks, 0);

const input3 = [
  { name: "John", id: 123, marks: 98 },
  { name: "Baba", id: 101, marks: 23 },
  { name: "John", id: 200, marks: 45 },
  { name: "Wick", id: 115, marks: 75 },
];
console.log("3) Input :", input3);
console.log("3) Output:", totalAfterBonus(input3));

// ==================================================

let lastId = 0;
const withId = (obj) => ({ ...obj, ID: ++lastId });

export const Tab = [
  withId({ nom: "Ali", age: 21, filiere: "twin" }),
  withId({ nom: "Sara", age: 20, filiere: "Math" }),
  withId({ nom: "Yassine", age: 22, filiere: "Physique" }),
];

// Ajoutez de nouvelles entrées (push / unshift)
Tab.push(withId({ nom: "Omar", age: 23, filiere: "Info" }));
Tab.unshift(withId({ nom: "Noura", age: 19, filiere: "Chimie" }));

console.log("4) Tab (avec ID):", Tab);

const wantedId = 2;
console.log(`4) Search(Tab, ${wantedId}) =>`, Search(Tab, wantedId));

