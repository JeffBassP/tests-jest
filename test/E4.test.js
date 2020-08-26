const {somaMultiplica} = require('./../E4');
// 4 (Obrigatório) ​ - Crie uma função que recebe três parâmetros, essa função deve 
//retornar a soma dos dois primeiros parâmetros e multiplicar pelo terceiro parâmetro,
//por fim crie um teste utilizando o Jest para garantir o resultado está correto.

test('Verifica se esta somando o num1 e num2 e multiplicando por num3', () => {
    expect(somaMultiplica(3,3,2)).toBe(12);
});