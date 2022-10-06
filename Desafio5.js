//- Una variable que contenga tu altura en centímetros (entero)
let Altura = 192

//- Una variable que contenga tu altura en metros (número de coma flotante)
let Altura_M = 1.92

//- Una variable que contenga tu peso en kilogramos (número de coma flotante)
let Peso = 96.2

//- Una variable que contenga tu altura en metros redondeada hacia arriba
let Altura_R =  Math.round(1.92)
console.log(Altura_R)

//- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let Peso_R = Math.floor(Peso)
console.log(Peso_R)
//- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let Comparacion = Number.EPSILON + 1 == Number.EPSILON
console.log(Comparacion)