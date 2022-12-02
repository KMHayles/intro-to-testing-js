// helloWorld function
// function helloWorld() {
//     return "Hello, World!";
// }

function sayHello(input) {
    if (input === "Alex") {
        return "Hello, Alex!";
    }
    if (input === "Jane") {
        return "Hello, Jane!";
    }
    if (input === "Pat") {
        return "Hello, Pat!";
    }
    if (input === true) {
        return "Hello, World!";
    }
    if (input === false) {
        return "Hello, World!";
    }
    if (input === undefined) {
        return "Hello, World!";
    }
}
    //return `Hello, ${input}!`; (refactored)
    // return "Hello, " + input + "!";  (refactored)
    // the above function can be refactored as such

function isFive(input){
    if(input === "5"){
        return false;
    }
    if (input != false) {
        return true;
    } else if (input === 5) {
        return true;
    }
}
