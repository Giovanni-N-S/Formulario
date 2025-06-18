let mainform = document.getElementById("mainform");
let input_nom = document.getElementById("nombre")
let input_codigo_postal = document.getElementById("codigo_postal")
let input_edad = document.getElementById("edad")

mainform.addEventListener("submit",e=>{
    e.preventDefault();
    alert("uy kietos");
    console.log("El nombre es: " + input_nom);
    if (input_codigo_postal.value.length == 5) {
        console.log("El código postal es correcto: " + input_codigo_postal.value);
    } else {
        console.log("Codigo postal Invalido, contiene: " + input_codigo_postal.value.length + "caracteres");
    }
    if (isNaN(input_edad.value) == true ){
        console.log("La edad no es numerica");
    } else {
        console.log("La edad es numerica");
    }
    let carreras_de_interes = ["ciencias_de_la_computación,ingenieria_en_computación"];
    let input_carrera = document.querySelector("input[name='carrera']:checked")
    console.log("La carrera seleccionada es: " + input_carrera);
    

})
