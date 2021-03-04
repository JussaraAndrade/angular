//Type Assertion - casting (conversão de tipos)
const minhaIdade:any = 24;

//Informando o typescript que essa variável é um número 
//pode ser: as string, as boolean etc...
(minhaIdade as number).toString();
(<number>minhaIdade).toString();

//Informando ao typescript que o input é tipo um HTMLInputElement
const input = document.getElementById('numero1') as HTMLInputElement;
const input2 = <HTMLInputElement>document.getElementById('numero1');
console.log(input2.value);




