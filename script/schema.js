const schema = {
  projects: "projects",
  languages: "languages",
  technologies: "technologies",
  developers: "developers",
};
const schema_language = { name: "name", version: "version" };

var projects = [];
var languages = [];
var technologies = [];
var developers = [];

const Struct = (...keys) => (...values) =>
  keys.reduce((result, keyIndex, valueIndex) => {
    result[keyIndex] = values[valueIndex];
    return result;
  }, {});

const Item = Struct(
  schema.projects,
  schema.languages,
  schema.technologies,
  schema.developers
);

var myItem1 = Item("Tunturi", "Java", "Spring Boot", "algalopez");
var myItem2 = myItem1;

console.log(myItem1);
console.log(myItem2);


