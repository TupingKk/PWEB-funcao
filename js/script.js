/*
PROCEDIMENTO
Descrição: Exibe uma mensagem fixa
Nome: mostraAlerta
Parâmetro: void
Retorno: void
void -> significa que não retorna valor
*/

function mostraAlerta() 
{
    alert("Não é que isso funciona mesmo!!!");
}

/*
PROCEDIMENTO
Descrição: Exibe uma mensagem com parâmetro
Nome: mostraAlerta1
Parâmetro: string
Retorno: void
void -> significa que não retorna valor
*/


function mostraAlerta1(msg) 
{
    alert("Boa noite! "+msg);
}

function mensagem_com_parametro_return(msg1) 
{
    return("voce digitou " + msg1 )
}

function mensagem_com_parametro_return1(msg2)
{
    return("voce digitou" + msg2)
}
function somar(num1 , num2)
{
    var soma =parseFloat(num1 + num2);
    return(soma);
}