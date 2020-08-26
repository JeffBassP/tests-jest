const { multiplica } = require('./../E3');

// 3 Crie uma função que multiplica dois números, logo após crie um teste Utilizando o Jest para garantir que a multiplicação desses valores está correta.

test('verifica se a multiplicacao esta correta ', () => {
    expect(multiplica(5, 5)).toBe(25);
});