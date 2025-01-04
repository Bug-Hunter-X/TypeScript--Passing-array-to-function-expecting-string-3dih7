function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User", "John Smith"];

// Solution 1: Iterate over the array and call greeter for each element
for (const name of user) {
  console.log(greeter(name));
}

// Solution 2: Modify greeter to accept an array
function greeterArray(people: string[]): string {
  return "Hello, " + people.join(", ");
}

console.log(greeterArray(user));