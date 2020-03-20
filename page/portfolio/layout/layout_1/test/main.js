;(function() {
    // import {plus} from './count.js';
    let num1 = 30;
    let num2 = 25;
    // console.log(plus(num1,num2));
    const count = content();
    function r() {return count.export;}

    function main(require) {
        let obj = require('./count.js');
        console.log(obj.sayHi)
        console.log(obj.plus(num1,num2));
    }

  

    main(r);



})();