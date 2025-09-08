// immdeately invoked function expression (IIFE)

(function chai() {
    // named IIFE 
    console.log("DB connected");
})();


( (name) => {
    // Unnamed IIFE
    console.log(` DB connected 2 ${name} `)
})("rijvan")