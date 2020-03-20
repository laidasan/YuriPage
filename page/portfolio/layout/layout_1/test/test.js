// var a = 3;
// console.log('外面的',this)
// function demo() {
//     console.log('function 裡面的',this);
//     // console.log(this.a);
// }
// demo();

// function test() {
//     var a  = 3;
//     function show() {
//         console.log(this.a);
//     }
//     show();
// }

// test()

// function Person() {
//     return function(){};
// }
// let p = new Person();
// console.log(p)

function add(x,y) {
    return x + y;
}

module.exports = {
    add : add
}