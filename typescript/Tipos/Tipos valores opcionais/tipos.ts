//Esse exemplo evita o erro ao acessar campo que não existe no objeto
function tratarFuncionarios(funcionarios: Funcionario[]) {
  console.log(funcionarios[0].nome);
}

type Contato = {
  nome: string;
  idade: number;
  telefone: string;
  //campo celular é opcional: celular?
  celular?: string;
};

const contato: Contato = {
  nome: "João",
  idade: 90,
  telefone: "32132132123",
  celular: "231321321",
};
