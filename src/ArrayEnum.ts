const coffeeTypes: string[] = ["filter coeffee", "black coffee", "red coffee"];
const coffeePrices: number[] = [10, 20];
const rating: Array<number> = [2.3, 4.2, 5.5];

// Array of objects

type Coffee = {
  name: string;
  price: number;
};

const coffeeMenu: Coffee[] = [
  {
    name: "black coffee",
    price: 10,
  },
  {
    name: "filter coffee",
    price: 100,
  },
  {
    name: "test coffee",
    price: 300,
  },
];

const cities: readonly string[] = ["Bangalore", "Hydrabad", "Delhi", "Pune"];
const length = cities.length;

const table: number[][] = [[], [], []];

// Tuples: data type

let coffeeTuple: [string, number, boolean?] = ["Ashish shah", 22];
coffeeTuple = ["shah", 21, true];

const location: readonly [number, number] = [32.423, 232.44];

// names Tuples
const coffeeItems: [name: string, price: number] = ["Black coffee", 342];

// enum
enum MugSize {
  SMALL,
  MEDIUM,
  LARGE,
}

const mugSize = MugSize.LARGE; // mugSize = LARGE as string

enum Status {
  PENDING = 100,
  SERVED, // 101
  CANCELLED, // 102
}

enum ChaiTypes {
  MASALA = "masala",
  GINGER = "Ginger",
}

function makingChai(type: ChaiTypes) {
  console.log(`Making: ${type}`);
}

makingChai(ChaiTypes.GINGER);
makingChai("masala"); // error

// hetrogenous
//
enum RandomEnum {
  ID = 1,
  NAME = "Ashish",
}

const enum Sugars {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}
const s = Sugars.HIGH;

const t: [string, number] = ["chai", 1];
t.push("extra");
