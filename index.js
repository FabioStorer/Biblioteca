const biblioteca = ['livro1', 'livro2', 'livro3'];
let livros = {
    nome: '',
    tamanho: '',
    autor: '',
    genero: ''
};
let opcao = 0;
let entradaUsuario = '';
let remover;

console.log('1. Para adicionar um livro novo a biblioteca.');
console.log('2. Para remover um livro da biblioteca.');
console.log('3. Para listar os livros da biblioteca.');

process.stdin.on('data', function (data) {
    entradaUsuario = data.toString().trim();

    if (entradaUsuario == 'Sair' || entradaUsuario == 'sair') {
        process.exit();
    }
    
    if (!opcao) {
        opcao = Number(entradaUsuario);
        if (opcao == 1) {
            console.log('Insira o nome do livro.');
        } else if (opcao == 2) {
            console.log('Aqui estão todos os livros na biblioteca atualmente.');
            for (let i = 0; i < biblioteca.length; i++) {
                console.log([i], ' - ', biblioteca[i]);
            }
            console.log('Escolha pelo índice qual livro deseja remover.');
        }
    } else
    
    switch (opcao) {
        case 1:
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
                livros = {
                    nome: '',
                    tamanho: '',
                    autor: '',
                    genero: ''
                };
                console.log(biblioteca);
                console.log('Escolha uma nova opção ou digite "Sair" para finalizar.');
                console.log('1. Para adicionar um livro novo a biblioteca.');
                console.log('2. Para remover um livro da biblioteca.');
                console.log('3. Para listar os livros da biblioteca.');
                opcao = 0;
            }
            
            break;
            
            case 2:
                if (biblioteca == false) {
                    console.log('Biblioteca vazia.');
                } else {
                    remover = Number(entradaUsuario);
                    biblioteca.splice(remover, 1);
                    console.log(remover)
                }
                console.log(biblioteca);
                console.log('Escolha uma nova opção ou digite "Sair" para finalizar.');
                console.log('1. Para adicionar um livro novo a biblioteca.');
                console.log('2. Para remover um livro da biblioteca.');
                console.log('3. Para listar os livros da biblioteca.');
                opcao = 0;
                
                break;
                
                case 3:
                    console.log(biblioteca);
                    console.log('Escolha uma nova opção ou digite "Sair" para finalizar.');
                    console.log('1. Para adicionar um livro novo a biblioteca.');
                    console.log('2. Para remover um livro da biblioteca.');
                console.log('3. Para listar os livros da biblioteca.');
                opcao = 0;

                break;

            default:
                console.log('Insira uma opção válida.');
                opcao = 0;
                break;
        }
})