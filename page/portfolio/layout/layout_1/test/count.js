// let num1 = 30;
// let num2 = 20;

function content(modulem) {
    function plus(num1, num2) {
        return num1 + num2;
    }
    if (typeof modulem === 'object') {
        // modulem.plus = plus;
        // modulem.sayHi = 'Hello!'
        modulem.export = {
             plus : plus,
             sayHi : 'Hello!'
        }
    } else {
        return {
            export : {
                plus: plus,
                sayHi: 'Hello!'
            }
        }
    }
}



// function plus(num1,num2) {
//     return num1 + num2;
// }

// export {plus};


