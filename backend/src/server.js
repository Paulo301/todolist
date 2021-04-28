// const database = require('./db');

// (async () => {
//   try {
//     const resultado = await database.sync();
//     console.log(resultado);
//   } catch (error) {
//     console.log(error);
//   }
// })();

(async () => {
    const database = require('./db');
    const User = require('./user');
 
    try {
        const resultado = await database.sync();
        console.log(resultado);
 
        const resultadoCreate = await User.create({
            nome: 'mouse',
            preco: 10,
            descricao: 'Um mouse USB bonitão'
        })
        console.log(resultadoCreate);
    } catch (error) {
        console.log(error);
    }
})();