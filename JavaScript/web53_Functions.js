console.log("This is 53");

function greet(name, text="Good Morning"){
    console.log(text + " "+ name);
    console.log(name + " is a good boy");
}

function sum(x,y,z){
    let d=x + y +z;
    return d;
}

let name1="sumanta";
let name2="Ram";
let name3="Syam";
let name4="Sd";

let text="Good Morning";

greet(name1, text);
greet(name2, text);
greet(name3, text);
greet(name4);


let return1=sum(1,2,3);
console.log(return1);

// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");
// console.log(name4 + " is a good boy");