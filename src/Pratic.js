import React from "react";
function Pratic() {
  const arrayName = ["teju", "tanvi", "swapnali"];
  const status = arrayName.includes("teju");
  console.log(`Is teju present ${status}`);

  const status2 = arrayName.includes("yuraj");
  console.log(`Is yuraj presnet ${status2}`);
  const bank = {
    type: ["credited", "debited"],
    amount: 10000,
    balance: 20000,
  };
  console.log(`${bank.amount} amount has been ${bank.type[0]}/${bank.type[1]} from your account,
your account balance is ${bank.balance} `);

  return arrayName.map((a) => console.log(`hello ${a}`));
}
export default Pratic;
