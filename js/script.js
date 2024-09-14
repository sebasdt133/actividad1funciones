function area()
{
    var base=document.getElementById('base').value;
    var altura=document.getElementById('altura').value;
    if (base>0&&altura>0)
    {
        var area=(base*altura)/2;
        document.getElementById('resultado').innerHTML=`Área: ${area} cm2`;
    } 
    else 
    {
        document.getElementById('resultado').innerHTML='Por favor ingresa valores válidos.';
    }
}

function datos()
{
    var nombre=document.getElementById('nombre').value;
    var edad=document.getElementById('edad').value;
    var ciudad=document.getElementById('ciudad').value;
    var telefono=document.getElementById('telefono').value;
    var colonia=document.getElementById('colonia').value;
    document.getElementById('datos').innerHTML=`Los datos son: <br> ${'Nombre: '+nombre+'<br> Edad: '+edad+'<br> Ciudad: '+ciudad+'<br> Teléfono: '+telefono+'<br> Colonia: '+colonia}`;
}

function calcularNomina() 
{
    let totalNomina=0;
    for (let i=1;i<=5;i++) 
    {
        var sueldo=parseFloat(document.getElementById(`sueldo${i}`).value);
        if (!isNaN(sueldo))
        {
            totalNomina+=sueldo;
        }
    }
    document.getElementById("resultadoN").innerHTML=`El total de la nómina a pagar es: $${totalNomina.toFixed(2)}`;
}

function calcularPromedio() {
    // Obtener las calificaciones ingresadas
    let materia1 = parseFloat(document.getElementById('materia1').value);
    let materia2 = parseFloat(document.getElementById('materia2').value);
    let materia3 = parseFloat(document.getElementById('materia3').value);

    // Verificar si las entradas son válidas
    if (isNaN(materia1) || isNaN(materia2) || isNaN(materia3)) {
        document.getElementById('resultado').innerHTML = 'Por favor, ingresa todas las calificaciones.';
        return;
    }

    // Calcular el promedio
    let promedio = (materia1 + materia2 + materia3) / 3;

    // Mostrar el resultado
    document.getElementById('resultadoC').innerHTML = 'El promedio es: ' + promedio.toFixed(2);
}