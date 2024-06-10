const biblioteca = {};
let livros = {
    nome: '',
    tamanho: '',
    autor: '',
    genero: ''
};
let opcao = 0;
let entradaUsuario = '';

console.log('1. Para adicionar um livro novo a biblioteca.');
console.log('2. Para remover um livro da biblioteca.');
console.log('3. Para listar os livros da biblioteca.');

process.stdin.on('data', function (data) {
    entradaUsuario = data.toString().trim();

    if (!opcao) {
        opcao = Number(entradaUsuario);
    }
    
    switch (opcao) {
        case 1:
            console.log('Insira o nome do livro.');
            if (!livros.nome) {
                livros.nome = entradaUsuario;
                console.log('Insira a quantidade de páginas que o livro possui.');
            } else if (!livros.tamanho) {
                livros.tamanho = entradaUsuario;
                console.log('Insira o nome do autor(a).');
            } else if (!livros.autor) {
                livros.autor = entradaUsuario
                console.log('Insira o gênero do livro.');
            } else {
                livros.genero = entradaUsuario;
                biblioteca.push(livros);
                console.log(biblioteca);
            }

            break;

        case 2:

            break;

        case 3:

            break;

        default:
            break;
    }
})