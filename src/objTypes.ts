function printCoordinates(pt: { x: number; y: number }): void {
  console.log(`The coordinates of x value is ${pt.x}`);
  console.log(`The coordinates of y value is ${pt.y}`);
}

// printCoordinates({ x: 32, y: 11 });

type Points = {
  x: number;
  y: number;
};

function printt(pt: Points): string {
  const value = pt?.x + ", " + pt?.y;
  return value as string;
}

function printFullnam(obj: { first: string; last?: string }): number {
  if (obj.last) {
    console.log(obj.first.toUpperCase() + " " + obj.last);
  } else console.log(obj.first.toLocaleUpperCase());
  return 10;
}

printFullnam({ first: "Ashish" });
printFullnam({ first: "Ashish", last: "Shah" });

type Seat = "window" | "middle" | "aisle";
function printSeatType(seat: Seat) {
  switch (seat) {
    case "aisle":
      console.log("this is aisle seat");
      break;

    case "window":
      console.log("Hello this is window seat");
      break;
  }
}
