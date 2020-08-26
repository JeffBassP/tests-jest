// 2 (Obrigatório) ​ - Crie uma função que some três números, logo após crie um teste utilizando Jest para garantir que a soma desses valores está correta.
const {soma} = require('./../E2');

test('verificar se a soma esta correta ', () => {
    expect(soma(2, 3, 4)).toBe(9);
});