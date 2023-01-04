const { getData, staffMembers } = require("../exercise-4");

test("Exercise 4", () => {
  expect(getData(staffMembers, "title", "Web Developer II")).toStrictEqual([
    {
      name: "Jane Smith",
      skillLevels: { javascript: 7, python: 4, sql: 6 },
      title: "Web Developer II",
    },
  ]);
  expect(getData(staffMembers, "sql", 7)).toStrictEqual([
    {
      name: "Steve Rogers",
      title: "Database Admin",
      skillLevels: {
        javascript: 7,
        python: 4,
        sql: 9,
      },
    },
    {
      name: "Chuck Taylor",
      title: "Web Developer III",
      skillLevels: {
        javascript: 8,
        python: 7,
        sql: 8,
      },
    },
  ]);
});
