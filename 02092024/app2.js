//iniciamos un arreglo para poder almacenar las tareas
let tareas = [];

//funcion para mostrar opciones

function mostrarMenu(){
    return parseInt(prompt (`
        "Opciones disponibles"
        1.- Agregar tarea
        2.- Ver todas las tareas
        3.- Marcar mis tareas como completadas
        4.- Salir
        `));
}
// funcion para agregar tarea
function AgregarTarea(){
    let nombre = prompt("ingresa el nombre de la tarea;");
    if(nombre){
        let tarea={
            nombre: nombre,
            completada: false
        };
        tareas.push(tarea);
        alert("Tarea agregada con exito");

    }else{
        alert("El nombre de la tarea no puede estar vacio");


    }
}
// funcion para ver tarea

function Vertotodaslastareas(){
   if(tareas.length === 0){
    alert("No hay tareas en la lista");
    
   }else{
    let mensaje = "lista de tareas: \n";
    tareas.forEach((tarea, index)=> {
        

    });
    {

    }
   } 

}

// funcion principal para poder manejar nuestro programa
function inciarPrograma(){
    let coninutar = true;
    while(coninutar){
        let opcion = mostrarMenu();
        switch (opcion) {
            case 1:
                AgregarTarea();
                break;
            case 2:
                    Vertotodaslastareas();
                    break;
            case 3:
                    MarcarTareaCompletada();
                        break;
            case 4:
                    Alert("saliendo del programa");
                    continuar = false;
                            break;
            default:
                alert("Opcion no vlida. Intentalo nuevamente")
                break;
        }

    }
    alert("Programa finalizado")
}

console.log(inciarPrograma());
