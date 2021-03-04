//Union Types - Um tipo ou outro tipo, ou mais de um.

//variável é string ou númerico
const nota: string | number | boolean = '5';

function exibirNota(nota: string | number){
    console.log(`A nota é ${nota}`);
}

exibirNota(5);
exibirNota('5');


