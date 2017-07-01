console.log('module 1')

let encapsulatedVariable = 'Xurupitas'
function sayHello(name=''){
    console.log(`Hi ${name}`)
}

function getEncapsulated(){
    return encapsulatedVariable
}

//exports

module.exports = {
    sayHello,
    getEncapsulated
}