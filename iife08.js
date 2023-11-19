//Immediately Invoked Function Expressions (IIFE)
(function eSolutionHub() {
    //named IIFE
    console.log(`DB CONNECTED`);
})();


(   (name) => {
    //unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} ) ("nagama")



