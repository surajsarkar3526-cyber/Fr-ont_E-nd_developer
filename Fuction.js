let nums =[67,52,39]

nums.map((val) => {
    console.log(val)
})

let result = nums.map((val) => {
    return val*4
})

console.log(result)

function greet() {
    console.log("Hello Bhai!");
}

function welcome(callback) {
    callback();
}

welcome(greet);

let newArray = nums.filter((val) => {
    return val % 2 == 0
})

console.log(newArray)
let arr = nums.reduce((acc, val) => {
    return acc + val;
})

console.log(arr)
