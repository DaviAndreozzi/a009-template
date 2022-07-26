// console.log('teste')
// // console.log(prompt('Qual seu nome?'));
// // console.log(prompt('Qual sua cor favorita?'));
// // const templateString = `Nome: ${nome}`
// // pratica guiada - parte 1
// const nome = prompt('Qual e seu nome?')

// const nomeMaiusculas = nome.toUpperCase();
// console.log(nomeMaiusculas)
// const cor = prompt('Qual a sua cor favorita?')
// const citacao = prompt('Qual é a sua citação favorita?')

// const stringConcatenada = 'A cor favorita de ' + nome + ' é a ' + cor + 'e sua citacao predileta é:\'' + citacao +'\'.';

// console.log('SRING CONCATENADA', stringConcatenada)

// const templateString = `A cor favorita de ${nome} é ${cor}`
// console.log(templateString)

// const tamanho = nome.length 
// console.log('O seu nome tem', tamanho, 'caracteres!')

// const temA = nomeMaiusculas.includes('A')
// console.log('Seu nome tem a letra A', temA)

const emaiDoUsuario = (prompt('Qual seu emai?'))
console.log(emaiDoUsuario)
const nomeDoUsuario = (prompt('Qual seu usuario'))
console.log('O e-mail', emaiDoUsuario, 'foi cadastrado com sucesso', 'Boas vindas', nomeDoUsuario)
const tamanho = nomeDoUsuario.length
console.log(tamanho)
const substituir = emaiDoUsuario.replaceAll("r","l")
console.log(substituir)
const temA = emaiDoUsuario.includes('@')
console.log('Seu email tem um @',temA)

