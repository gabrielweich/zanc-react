console.clear()
console.log('-----------( let & const )-----------')
let nome_let = 1;
const nome_const = 1;

console.log(++nome_let);
//console.log(++nome_const);


console.log('\n-----------( Arrays & Objetos )-----------')
const arr1 = [1, 2, 3]
const obj1 = {
    chave: 'valor',
    chave2: 'valor2',
}

console.log(arr1[0])

obj1.random = 'gesiel'
obj1.chave = 'testeb'

console.log(obj1.chave)
console.log(obj1['chave'])
console.log(obj1)

console.log('\n-----------( Funções )-----------')
function nome_funcao(param1) {
    console.log(param1)
}

new nome_funcao('manuel')

console.log('\n-----------( Arrow Functions )-----------')
const nome_funcao2 = (param1) => {
    console.log(param1)
}

nome_funcao2('manuel2')


console.log('\n-----------( Spread Operator )-----------')
const arr2 = [5, 6, ...arr1]
console.log(arr2)


const obj2 = { ...obj1, 'nome': 'teste' }

console.log(obj2)


console.log('\n-----------( Rest Operator )-----------')
const somatorio = (...args) => {
    let sum = 0
    for (a of args) {
        sum += a
    }
    console.log(sum)
}

somatorio(...arr2)


console.log('\n-----------( Destructuring )-----------')


console.log('\n-----------( forEach )-----------')
const sumatorio2 = (...args) => {
    let sum2 = 0
    args.forEach(a => sum2 += a)
    console.log(sum2)
}

sumatorio2(1, 2, 3, 4)


console.log('\n-----------( Map )-----------')
const dobra = (...args) => {
    const dobrado = args.map(numero => numero * 2)
    console.log(dobrado)
}

dobra(1, 2, 3)


console.log('\n-----------( Classes )-----------')

class Pessoa {
    constructor(nome, idade = 20) {
        this.nome = nome
        this.idade = idade
    }

    dizNome() {
        console.log(this.nome + ' ' + this.idade)
    }
}

const pessoa1 = new Pessoa('gesiel', 30)
pessoa1.dizNome()

const dizNome = pessoa1.dizNome.bind(pessoa1)
dizNome()