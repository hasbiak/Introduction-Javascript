const names = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

const searchName = (name, limit, callback) => {
  const namesFilter = names.filter((value) =>
    value.toLowerCase().includes(name.toLowerCase())
  );
  const result = namesFilter.slice(0, limit);
  callback(result);
};

const showResult = (result) => {
  console.log(result);
};

searchName("an", 3, showResult);
