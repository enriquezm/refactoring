const statement = require("./statement");
const plays = require("./plays.json");

const invoice = {
  customer: "BigCo",
  performances: [
    {
      playID: "hamlet",
      audience: 55,
    },
    {
      playID: "as-like",
      audience: 35,
    },
    {
      playID: "othello",
      audience: 40,
    },
  ],
};

test("returns a string", () => {
  expect(statement(invoice, plays)).toBe(
    "Statement for BigCo\n Hamlet: $949.70 (55 seats)\n As You Like It: $679.80 (35 seats)\n Othello: $799.70 (40 seats)\nAmount owed is $2,429.20\nYou earned 47 credits\n"
  );
});
