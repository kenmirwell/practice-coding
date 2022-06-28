// var firstColor = document.querySelector(".first-color")
// var secondColor = document.querySelector(".second-color")

// firstColor.addEventListener("input", function(){
//     console.log(firstColor.value);
// })

// secondColor.addEventListener("input", function(){
//     console.log(secondColor.value);
// })

// let input = 1;
// let level = 0;
// var value = 1;
// var amount = 0;

// if(input > 0) {
//     let level = 100
//     console.log(level)
// }

// if (value) {
//     var amount = 100
//     console.log(amount)
// }




// const objAnimals = {
//     type: "cat",
//     behaviour: "timid",
//     skill: function() {
//         console.log(this)
//     }
// }

// class player{                                                                                                  
//     constructor(name, type, favColor) {
//         console.log(this)
//         this.name = name;
//         this.type = type;
//         this.favColor = favColor;
//     }
//     introduce(){
//         console.log(`Hi T'm ${this.name} my role is ${this.type} my fav color is ${this.favColor}`)
//     }
// }

// class wizard extends player{
//     constructor(name, type) {
//         super(name, type)
//         console.log(this)
//     }
//     play() {
//         console.log(`You're going down on this ${this.type}`)
//     }
// }

// let arr = [`apple`, `grapes`, `banana`]

// for(item of arr) {
//     console.log(item)
// }




// console.log(`1`)
// setTimeout(() => {
//     console.log(`2`)
// }, 2000)               
// setTimeout(() => {
//     console.log(`3`)
// }, 0)                  
// console.log(`4`)
// console.log(`5`)
// console.log(`6`)

//auto organizing array
// const arr = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]
let arr = [4, 32, 2, 5, 8];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      temp = arr[i];
      console.log(`temp:`, temp)
      arr[i] = arr[j];
      console.log(`arr[j]`, arr[j])
      arr[j] = temp;
      console.log(`arr[j] 2`, arr[j])
    }
  }
}
console.log("Sorted array=>", arr);