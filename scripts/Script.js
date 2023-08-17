//Calcular el promedio de 5 notas ingresadas por el usuario.
//Cuando tengo que preguntar varias veces utilizo un cliclo de repeticion 

let sumaNotas=0; 
for (let i=1; i<=5;i++) {
let nota = Number(prompt("Ingrese la nota" + i));
sumaNotas = sumaNotas + nota;
}  
 
let promedio = sumaNotas/5;
alert ("El promedio del estudiante es:" + promedio);

