// let ingredients_list = ["noodles", { list: ["eggs", "flour", "water"] }];

// let ingredients_list_copy = Array.from(ingredients_list);
// console.log(JSON.stringify(ingredients_list_copy)); //shallow copy

// ingredients_list_copy[1].list = ["rice flour", "water"];
// console.log(ingredients_list[1].list); //change in property reflected in source

// console.log(JSON.stringify(ingredients_list)); //modified src

// ingredients_list_copy[0] = "rice noodles";
// console.log(ingredients_list[0]); // noodles

// console.log(JSON.stringify(ingredients_list_copy));

// console.log(JSON.stringify(ingredients_list));

let mySample = ["cat", { name: ["Tommy", "Thunder"] }];
let mySampleCopy = Array.from(mySample);
console.log(mySampleCopy);

mySampleCopy[1].name = ["Zevi", "Zumi"];
console.log(mySample); //modified src

mySampleCopy[0] = "dog";
console.log(mySample[0]); //src not modified

console.log(mySample);
console.log(mySampleCopy);
