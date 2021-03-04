//Alias - Criando um novo tipo

//É um tipo funcionário que tem nome e idade
type Funcionario = {
  //tipo especifico
  nome: string;
  idade: number;
};

//Anotação de Array de funcionário: Funcionario[]
const funcionarios: Array<Funcionario> = [
  {
    //valores
    nome: "João",
    idade: 10,
  },
  {
    nome: "Maria",
    idade: 20,
  },
  {
    nome: "Pedro",
    idade: 30,
  },
];
