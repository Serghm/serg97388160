//para declarar una función
function saludar(){
    console.log("hola ese");
}
saludar();

// declarar argumentos

function saludo(nombre_usuario){
    console.log("hola como estas: "+nombre_usuario)
}
saludo("sergio");

//funcion con retorno

function adios(user_name) {
    return "Adios que estes bien: "+user_name;
    
}

console.log(adios("muchacho"));