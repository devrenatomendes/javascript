let num = [5, 8, 2, 9, 3]
num[3] = 6
num.push(7)
num.sort()

console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let teste = num[0]
let pos = num.indexOf(teste)
let neg = -1
if (pos == neg) {
    console.log(`O valor não foi encontrado`)
} else
console.log(`O valor ${teste} está na posição ${pos}`)