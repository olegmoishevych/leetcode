//1 - enum
enum Direction {
  Up,
  Down,
  Left,
  Right
}
//2 - Tuple
let tuple: [number, string] = [1, 'hello'];

//3 - Any
let value: any = 42;
value = 'a string';

//4 - Unknown
let value: unknown = 42;
if (typeof value === 'number') {
  let numberValue: number = value;
}

//5 - Void
function log(message: string): void {
  console.log(message);
}


