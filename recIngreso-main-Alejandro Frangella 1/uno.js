/*
Una software factory registra la siguiente informacion de sus empleados:
Nombre edad (validar)
sexo (masculino - femenino - no binario)
puesto (programador - analista - Qa)
sueldo (entre 15000 y 70000)
La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) promedio de sueldos para cada puesto
b) el sexo del que percibe el mayor sueldo
c) el nombre del empleado femenino con mas sueldo
d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000
 */
function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let puesto;
	let sueldo;
	let pregunta;
	let promP = 0;
	let acumP = 0;
	let contP = 0;
	let promA = 0;
	let acumA = 0;
	let contA = 0;
	let promQ = 0;
	let acumQ = 0;
	let contQ = 0;
	let sexoMS;
	let mayorSueldo = 0;
	let flagSueldo = 1;
	let nombreMS;
	let flagMSF = 1;
	let contProgNB = 0;

	do{
		nombre = prompt("Ingrese nombre del empleado: ");

		edad = parseInt(prompt("Ingrese edad del empleado: "));
		while(isNaN(edad) || edad<=0 ){
			edad = parseInt(prompt("Error. Ingrese edad del empleado: "));
		}
		
		sexo = prompt("Ingrese sexo del empleado: femenino/masculino/no binario ");
		while(sexo!="f" && sexo!="m" && sexo!="no binario"){
			sexo = prompt("Error. Ingrese sexo del empleado: femenino/masculino/no binario ");
		}
		
		puesto = prompt("Ingrese puesto del empleado: programador/analista/Qa ");
		while(puesto!="programador" && puesto!="analista" && puesto!="Qa"){
			puesto = prompt("Error. Ingrese puesto del empleado: programador/analista/Qa ");
		}
		
		sueldo = parseInt(prompt("Ingrese sueldo del empleado: "));
		while(isNaN(sueldo) || sueldo<15000 || sueldo>70000 ){
			sueldo = parseInt(prompt("Error. Ingrese sueldo del empleado: "));
		}

		if(puesto=="programador"){
			acumP+=sueldo;
			contP++;
		}else if(puesto=="analista"){
			acumA+=sueldo;
			contA++;
		}
		else if (puesto=="Qa"){
			acumQ+=sueldo;
			contQ++;
		}
		
		if(flagSueldo || sueldo>mayorSueldo){
			mayorSueldo=sueldo;
			sexoMS=sexo;
			flagSueldo=0;
			if(sexo=="f" && (flagMSF ||sueldo==mayorSueldo)){
				nombreMS=nombre;
				flagMSF=0;
			}
		}
		
		if(puesto=="programador" && sexo=="no binario"){
			if(sueldo>20000 || sueldo<55000){
				contProgNB++;
			}
		}

		pregunta = prompt("Desea ingresar otro empleado? ");
	}while(pregunta=="s");



	if(contP!=0){
	promP = acumP / contP;
	console.log("a) Promedio de sueldo para programadores: " + promP);
	}
	else{
		console.log("a) No se ingresaron empleados programadores ");
	}

	if(contA!=0){
		promA = acumA / contA;
		console.log("a) Promedio de sueldo para analistas: " + promA);
	}
	else{
		console.log("a) No se ingresaron empleados analistas ");
	}

	if(contQ!=0){
	promQ = acumQ / contQ;
	console.log("a) Promedio de sueldo para Qa: " + promQ);
	}
	else{
		console.log("a) No se ingresaron empleados Qa ");
	}

	console.log("b) El sexo con mayor sueldo es " + sexoMS);
	
	if(flagMSF==0){
	console.log("c) Nombre de empleado femenino con mas sueldo " + nombreMS);
	}
	else{
	console.log("c) No se ingresaron empleados femeninos ");
	}

	if(contProgNB!=0){
		console.log("d) Cantidad de programadores no binarios con sueldos entre 20000 y 55000: " + contProgNB);
	}
	else{
		console.log("d) No se ingresaron programadores no binarios");
	}

}
