const coffee = {
  name: "black coffee",
  price: 100,
  isCold: false,
};

// Declaring object types

let coffe: {
  name: string;
  price: number;
  isCold: boolean;
};

type Coffee = {
  name: string;
  price: number;
  ingredients: string[];
};

const myCoffee: Coffee = {
  name: "Black coffee",
  price: 100,
  ingredients: ["water", "coffee powder", "nothing"],
};

type Mug = {
  size: string;
};

let smallMug: Mug = {
  size: "200ml",
};

let bigMug = {
  size: "399ml",
  material: "crockery",
};

smallMug = bigMug;

type Brew = {
  time: number;
};

const coffeeOne = {
  time: 45,
  beans: "Arabica",
};

const coffeeTwo = {
  beans: "Arabica Hot",
  taste: "awful",
  time: 45,
};
const charBrew: Brew = coffeeOne; // we can give more data but not less than the required
const chaiBrew: Brew = coffeeTwo;

type User = {
  username: string;
  password: string;
};
const usr: User = {
  username: "eyashish",
  password: "124",
};

type Item = {
  name: string;
  quantity: number;
};

type Address = {
  street: string;
  pin: number;
};

type Order = {
  id: string;
  items: Item[];
  address: Address;
};

type CoffeeType = {
  name: string;
  type: "espresso" | "latte" | "black";
  price: number;
  isCold: boolean;
};

const brewCoffee = (coffee: Partial<CoffeeType>) => {
  console.log("Brewing coffee...");
};

brewCoffee({}); // this is issue
brewCoffee({ type: "espresso" });


type CoffeeOrder = {
  name?: string;
  quantity?: number;
}
const placeOrder = (order: Required<CoffeeOrder>){
  console.log("order is placed!")
}

placeOrder({name: "black", quantity: 34})


type CoffeeTypeTwo = {
  name: string;
  price: number;
  isCold: boolean;
  ingredients: string[]
}

type BasicCoffeeType = Pick<CoffeeTypeTwo, "name" | "price">
type BasicCoffeeInfo = Omit<CoffeeTypeTwo, "name">
const coffeeInfo: BasicCoffeeType = {
  name: "black coffee",
  price: 42
}
