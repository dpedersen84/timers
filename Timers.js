// Timer functions are higher order functions that can be 
// used to delay or repeat the execution of other functions
// that are received as their first argument

// Delaying the execution of a function

// example 1

setTimeout(
    () => {
        console.log('Hello after 4 seconds');
    },
    4 * 1000
);

// the second argument is in milliseconds, hence the * 1000

// same example without inline function

const func = () => {
    console.log('Hello after 4 seconds!');
};

setTimeout(func, 4 * 1000);

// Passing arguments
// If a function accepts arguments, you can use the remaining
// arguments for setTimeout itself (after the first 2)

// example 2

const rocks = who => {
    console.log(who + ' rocks');
};

setTimeout(rocks, 2 * 1000, 'Dan');