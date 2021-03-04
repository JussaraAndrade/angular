//Boolean - ela pode ser true ou false
const contaPaga: boolean = true;

//Number - inteiro
const idade: number = 40;

//Number - Decimais: float
const avaliacaoDoFilme: number = 4.55;

//String
const meuNome: string = 'João';
const meuNome2: string = "João";

//Array - array de números
const idades:number[] = [23, 34, 65];
const idades2: Array<number> = [23, 34, 65];

//Tuple - é um tipo array
let jogadores: [string, number, boolean] = ['João', 20, true];

//Enum - estruta de dados (acesso mapeamento de chaves)
enum StatusAprovacao {
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}

const statusDaAprovacao: StatusAprovacao  = StatusAprovacao.Aprovado;

//Any - aceita qualquer tipo array, string, números ... (não é recomendavel, só em caso de não saber o tipo da variável)
const minhaIdade: any = 10;
const retornoDaApi: any[] = [123, 'João', true];
const nome: any = 'Maria';

//Any - Objetos
const retornoApi: any ={
    //....
}

//Void - não retorna nada
function printarNaTela(msg: string){
    console.log(msg);
}

//Null e Underfined
const u: undefined = undefined; //Variáveis indefinida
const n: null = null; //valor nulos

function criar(objecto: object){
    //...
}

criar({
    nome: 'João',
    altura: 1.7
});

//Object
const eu = {
    nome: 'João',
    altura: 1.7
}




