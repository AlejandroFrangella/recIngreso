/*
Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
nombre carrera("Quimica";"Fisica";"Sistemas")
sexo (masculino - femenino - no binario)
cantidad de materias(entre 1 y 5)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.
 */

function mostrar()
{
    let nombre;
    let carrera;
    let sexo;
    let cantidad;
    let nota;
    let edad;
    let mejorPromF = 0;
    let nombremejorPromF;
    let flagMejorPF = 1;
    let edadMin = 0;
    let nombreedadMin;
    let flagedadMin = 1;

    let contQui = 0;
    let contFis = 0;
    let contSis = 0;
    let porQui = 0;
    let porFis = 0;
    let porSis = 0;

    let materiaMax = 0;
    let edadmateriMax;
    let nombremateriMax;
    let flagMateria = 1;



    for(let i = 0; i<500 ; i++){

        nombre = prompt("Ingrese nombre del alumno: ");
        
        carrera = prompt("Ingrese carrera del alumno: Quimica/Fisica/Sistemas ").toLowerCase();
		while(carrera!="q" && carrera!="f" && carrera!="s"){
			carrera = prompt("Error. Ingrese carrera del alumno: Quimica/Fisica/Sistemas ").toLowerCase();
		}


        sexo = prompt("Ingrese sexo del alumno: femenino/masculino/no binario ");
		while(sexo!="f" && sexo!="m" && sexo!="no binario"){
			sexo = prompt("Error. Ingrese sexo del alumno: femenino/masculino/no binario ");
		}

        cantidad = parseInt(prompt("Ingrese cantidad de materias del alumno: "));
		while(isNaN(cantidad) || cantidad<1 || cantidad>5 ){
			cantidad = parseInt(prompt("Error. Ingrese cantidad de materias del alumno: "));
		}
        
        nota = parseInt(prompt("Ingrese nota del alumno: "));
		while(isNaN(nota) || nota<0 || nota>10 ){
			nota = parseInt(prompt("Error. Ingrese nota del alumno: "));
		}

        edad = parseInt(prompt("Ingrese edad del alumno: "));
		while(isNaN(edad) || edad<=0 ){
			edad = parseInt(prompt("Error. Ingrese edad del alumno: "));
		}

        if(carrera=="f" && (flagMejorPF || nota>mejorPromF)){
            nombremejorPromF=nombre;
            mejorPromF=nota;
            flagMejorPF=0;
        }

        if(sexo=="f" && (flagedadMin || edad<edadMin)){
            edadMin=edad;
            nombreedadMin=nombre;
            flagedadMin=0;
        }

        if(carrera!="q" && (flagMateria || cantidad>materiaMax)){
            materiaMax=cantidad;
            nombremateriMax=nombre;
            edadmateriMax=edad;
            flagMateria=0;
        }

        if(carrera=="f"){
            contFis++;
        }else if(carrera=="q"){
            contQui++;
        }else{
            contSis++;
        }

    }
    
    if(flagMejorPF==0){
		console.log("a) Alumno con mejor promedio en fisica " + nombremejorPromF);
	}
    else{
        console.log("a) No se ingresaron alumnos que cursen la carrera fisica ");
    }

    if(flagedadMin==0){
		console.log("b) Alumna mas joven " + nombreedadMin);
	}
    else{
        console.log("b) No se ingresaron alumnos femeninos ");
    }

    if(contFis!=0){
        porFis= contFis/500;
        console.log("c) " + porFis + " de 500 alumnos cursan la carrera de fisica" );
    }else{
        console.log("c) No se ingresaron alumnos que cursan la carrera de fisica " );
    }
    if(contQui!=0){
        porQui= contQui/500;
        console.log("c) " + porQui + " de 500 alumnos cursan la carrera de quimica" );
    }else{
        console.log("c) No se ingresaron alumnos que cursan la carrera de quimica " );
    }
    if(contSis!=0){
        porSis= contSis/500;
        console.log("c) " + porSis + " de 500 alumnos cursan la carrera de sistemas" );
    }else{
        console.log("c) No se ingresaron alumnos que cursan la carrera de sistemas " );
    }

    if(flagMateria==0){
        console.log("d) Estudiante que cursa mas materias exceptuando la carrera de Quimica: Nombre: " + nombremateriMax + " Edad: " + edadmateriMax );
    }
    else{
        console.log("d) Solo se ingresaron estudiantes que cursan la carrera de Quimica" );

    }

    
}
