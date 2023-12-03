// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {
    cats = cats.push(name)
}

function destructivelyPrependCat(name) {
    cats = [name, ...cats]
}