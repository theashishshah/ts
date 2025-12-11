// function getProductAPI(): Promise<{
//   id: string;
//   name: string;
//   price: number;
//   stock: number;
// }> {
//   return fetch("/api/product").then((res) => res.json());
// }
//
function getProductAPI(): Promise<Product> {
  return fetch("/api/product").then((res) => res.json());
}

// type ProductRecord = {
//   id: string;
//   name: string;
//   price: number;
//   stock: number;
// };
//
type ProductRecord = Product;

// function renderProduct(p: {
//   id: string;
//   name: string;
//   price: number;
//   stock: number;
// }) {
//   console.log(`Price of product: ${p.price}`);
// }
function renderProduct(p: Product) {
  console.log(`Price ${p.price}`);
}

// but here DRY principle is getting violeted
export interface Product {
  id: string;
  name: string;
  stock: number;
  price: number;
}

type CoffeeRecipe = {
  milk: number;
  sugar: boolean;
  coffee: "large" | "medium" | "small";
  brew: () => string;
};

class MakeCoffee implements CoffeeRecipe {
  milk: number = 10;
  sugar: boolean = false;
  coffee: "large" | "medium" | "small" = "medium";
  brew = () => {
    console.log("I'm brewing coffee");
    return "Thank you for visiting us!";
  };
}

const myCoffee = new MakeCoffee();
myCoffee.brew();

// type cupSize = "large" | "medium" | "small";
interface CupSize {
  size: "large" | "medium" | "small";
  makeMyCoffee: (sugar: boolean) => Promise<string>;
}

class Coffee implements CupSize {
  // here types will fails because it doesn't has any propery name, and in class we've to initiaze the value
  size: "large" | "medium" | "small" = "small";
  makeMyCoffee = function (sugar: boolean): Promise<string> {
    console.log(
      `Hey, I'm making your coffee, please wait for a while, and your sugar is ${sugar}`,
    );
    return new Promise((res) => res("Coffee done, visit us again."));
  };
}

const oneCoffee = new Coffee();
oneCoffee.makeMyCoffee(false).then((res) => console.log(res));

type Response = { ok: true } | { ok: false };
// class MyResponse implements Response{
//   ok: boolean = false
// }

function getResponse(res: Response): boolean {
  if (res) return true;
  else return false;
}

type BaseCoffee = {
  coffee: boolean;
  milk: boolean;
};
type Extra = {
  sugar: number;
  latte?: boolean;
};

type FilterCoffee = BaseCoffee & Extra;

const mug: FilterCoffee = {
  coffee: true,
  milk: true,
  sugar: 2,
  latte: false,
};

type Config = {
  readonly userId: string;
  name: string;
  username: string;
};

const userConfig: Config = {
  userId: "fdsa32242fdsjaj3g23",
  name: "Ashish Shah",
  username: "heyashish",
};

userConfig.userId = "hereahh"; // this is not applicable
