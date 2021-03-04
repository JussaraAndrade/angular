//Never - tipo de coisa que nunca ocorre, nunca vai ter o final.
function loopInfinito(): never{
    while(true){}
}

//Erro 
function erro(mensagem: string): never{
    throw new Error(mensagem);
}