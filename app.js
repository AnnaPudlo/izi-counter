function makeCounter() {
    let i = 0;
    return () => ++i;
}

const counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());



