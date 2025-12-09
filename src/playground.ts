const array: (string | number)[] = ["hello", "Ashish", "shah", 23, 33];
const arr: string[] | number[] = [23, 45, 11, 34, 55];

array.forEach((value: number | string) =>
  console.log("This is value: ", value),
);
arr.forEach((value: number) => console.log("This should be a number", value));

for (let value of array) {
  console.log("Hello value", value);
}
