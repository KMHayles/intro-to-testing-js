// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    if(input === "Alex"){
        return "Hello, Alex!";
    } if (input === "Jane") {
        return "Hello, Jane!";
    } else {
        return "Hello, Pat!";
    }
    // return "Hello, " + input + "!";  (refactored)
    // return `Hello, ${input}!`;       (refactored)
}