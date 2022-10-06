let factor = 1
let num = 10
while (true) {
    factor *= num
    num--
    if (num === 1) break
}
console.log(factor)