let memory = 0;
document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(event) 
{
    const key = event.key;

    if (isNumeric(key) || ['/', '*', '-', '+', '.'].includes(key)) { insert(key);} 
    else if (key === '=') { realizar_calculo(); } 
    else if (key === 'C' || key == 'c') { clean(); }
    else if (key === 'Q' || key == 'q') { clearMemory(); }
    else if (key === 'W' || key == 'w') { addToMemory(); }
    else if (key === 'E' || key == 'e') { subtractFromMemory(); }
    else if (key === 'R' || key == 'r') { recallMemory(); }
}

function insert(num) 
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean() 
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
    if (resultado) { document.getElementById('resultado').innerHTML = eval(resultado);} 
    else { document.getElementById('resultado').innerHTML = "Error";}
}

function chance_symbol() 
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero * (-1);
}

function isNumeric(value) 
{
    return !isNaN(parseFloat(value)) && isFinite(value);
}