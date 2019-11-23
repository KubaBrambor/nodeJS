const colors = require('colors/safe');

console.log(colors.rainbow('Hello'), colors.green('Node.js'),colors.rainbow('!  This is nasty Christmas Tree!'));

    function tree(n){
        for(let i=1; i<=n; i++){
        let star;
        star = colors.green("*").repeat(2*i-1);
        console.log(" ".repeat(n-i), star)
        }
        console.log(" ".repeat(n-1), colors.black("U"))
    }

    tree(6);
    