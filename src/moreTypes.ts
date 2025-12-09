// type assertion forcefull

let response: any = "45";
let len: number = (response as string).length;

type Book = {
  name: string;
};

let bookString = '{"name":"who moved my cheese"}'; // this is stored in our localstorage
// now parse it
let bookObj = JSON.parse(bookString) as Book;

console.log(bookObj.name);

const inputElement = document.getElementById("username") as HTMLInputElement; // type assertion

/**
 * unknown vs any
 */

let value: any;
value = "chai";
value = [1, 2, 3];
value.toUpperCase();

let newValue: unknown;
newValue = "chai";
newValue = [1, 2, 34];
newValue = 2.3;
if (typeof newValue === "string") {
  newValue.toUpperCase();
}

// ! important next.js concept
try {
  const response = fetch("https://ashishshah.me")
    .then((res) => JSON.stringify(res))
    .then((res) => {
      const data = JSON.parse(res);
      return data;
    })
    .catch((error) => {
      if (error instanceof Error) {
        console.log("Getting error while fetching api", error.message);
        return;
      }

      console.log("Error", error);
    });
} catch (error) {
  if (error instanceof Error) {
    console.error("Getting error message: ", error.message);
  }

  console.log("Simple error logs: ", error);
}

const data: unknown = "hello ji, welcome to this world";
const strData: string = data as string;

type Role = "admin" | "user" | "superadmin";

function redirectBasedOnRole(role: Role): void {
  if (role === "admin") {
    console.log("Redirecting to admin dashboard");
    return;
  }

  if (role === "user") {
    console.log("Redirecting to user dashboard");
    return;
  }

  role;
}

function neverReturn(): never {
  while (true) {}
}

// any, unknown and never data types.
// you know the environment better than TypeScript.
