//Desafio 4

//- Una cadena de texto con tu Nombre
nombre = "Federico";

//- Otra cadena de texto con tu Apellido
apellido = "Chandia";

//- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
estudiante = (`${nombre}  ${apellido}`)

//- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
estudianteMayus = estudiante.toUpperCase()

//- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
estudianteMinus = estudiante.toLowerCase()

//- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let cantidad = estudiante.length

//- Una cadena de texto que elimine los espacios de la variable "estudiante"
estudiante.trim()

//- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
console.log(estudiante.includes(nombre))

//- Una variable que contenga la primera letra del Nombre
let primerLetra = estudiante.slice(0)

//- Otra variable que contenga la última letra del Apellido
let ultimaLetra = estudiante.slice(-1)













