// JSON.stringify(), JSON.parse

// const friends = ["peter", "paul", "mary"];


// localStorage.setItem("friends", JSON.stringify(friends));

// const values = JSON.parse(localStorage.getItem("friends"));

// console.log(values[2]);


let fruits;

if(localStorage.getItem("fruits")){

  fruits = JSON.parse(localStorage.getItem("fruits"));
}
else{
  fruits = [];
}

console.log(fruits);
fruits.push("peach");
localStorage.setItem("fruits", JSON.stringify(fruits));