let memory = 0;

function insert (num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean ()
{
    document.getElementById('resultado').innerHTML = "";
}

function addToMemory() 
{
    let displayValue = parseFloat(document.getElementById('resultado').innerHTML);
    memory += displayValue;
    clean();
}

function subtractFromMemory() 
{
    let displayValue = parseFloat(document.getElementById('resultado').innerHTML);
    memory -= displayValue;
    clean();
}

function recallMemory() 
{
    document.getElementById('resultado').innerHTML = memory;
}

function clearMemory() 
{
    memory = 0;
    clean();
}

function realizar_calculo()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);    
    }
    else 
    {
        document.getElementById('resultado').innerHTML = "Error";
    }
}

function chance_symbol ()
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero*(-1);    
}