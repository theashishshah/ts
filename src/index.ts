function printHello(name: string): string {
  console.log(`Hell, welcome ${name}!`);
  return `Thank you for visiting ${name}, come again!`;
}

const username = "Ashish Shah";
const age = 22;
const address = "blr, Karnataka";

// console.log(printHello(username));
//

async function getFavoriteNumber(): Promise<Function> {
  return Promise.resolve(() => console.log("Success callback ok ok."));
}

console.log(getFavoriteNumber().then((fn) => fn()));
