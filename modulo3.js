//METODO DE CADENAS

// let cadena1 = "cadena de prueba prueba prueba  ";
// let cadena2 = "cadena";
// let cadena3 = "ca";


//PARA BUSCAR CADENAS Y DEVOLVER UN VALOR

// let resultado = cadena1.concat (" hola");

// let resultado = cadena1.startsWith (cadena3);
// let resultado = cadena2.startsWith (cadena3);

// let resultado = cadena1.endsWith ("prueba");
// let resultado = cadena1.includes (cadena2);
// let resultado = cadena2.includes (cadena1);

// let resultado = cadena1.indexOf ("de"); //si no la encuentra devuelve -1
// let resultado = cadena1.indexOf ("p");

//  let resultado = cadena1.lastIndexOf ("prueba");
// // let resultado = cadena2.lastIndexOf ("e");
// document.write (resultado)
 



//PARA MODIFICAR CADENA RELLENANDO


// let cadena1 = "cadena de prueba prueba prueba  ";
// let cadena2 = "cadena";
// let cadena3 = "ca";


// let resultado = cadena1.padStart (50, 123); //RELLENA CADENA AL PRINCIPIO
// let resultado = cadena2.padStart (10, 123) 

// let resultado = cadena1.padEnd (50, 123);
// let resultado = cadena3.padEnd (22, 12)

// let resultado = cadena1.repeat (3);



// let cadena1 = "metodo de cadenas";
// let cadena6 = "    método de cadena separado en arrays";


// let cadena2 = "bienvenido";
// let cadena3 = "BIENVENIDO";
// let cadena4 = " 354";
// let cadena5 = ["Pedro, Matias"];


// document.write (resultado);




//TRANSFORMACION DE CADENA



// let resultado = cadena1.split ("como"); //separa en array con un SEPARADOR entre "".
// let resultado = cadena6.split (" ")

// let resultado = cadena1.substring (8, 6);


// let resultado = cadena3.toLowerCase ();

// let resultado = cadena2.toUpperCase ();

// let resultado = cadena4.toString ();
// document.write (222 + resultado);

// let resultado = cadena5.toString ();
// document.write (resultado [0] , resultado [1], resultado [2], resultado [3], resultado [4]);


// let resultado1 = cadena1.trim ();
// document.write (resultado1.length);
// let resultado2 = cadena6;
// document.write (cadena6.length);

// let resultado = cadena1.trimStart ();
// let resultado = cadena1.trimEnd ();


// document.write (resultado)




                   //MÉTODOS DE ARRAYS


                   //MÉTODOS TRANSFORMADORES


// let nombres = ["pedro", "maria", "jorge"];

//POP () ELIMINA EL ULTIMO ELEMENTO DE UN ARRAY, Y LO DEVUELVE.
// let resultado = nombres.pop(); 


//SHIFT () ELIMINA EL PRIMERO ELEMENTO DE UN ARRAY, Y LO DEVUELVE.
// let resultado = nombres.shift (); 


// document.write ("Array original:  " + nombres + "<br>");
// let resultado = nombres.shift(); ////
// let resultado = nombres.pop();
// document.write ("Elemento removido:  " + resultado + "<br>");
// document.write ("Resultado:  " + nombres + "<br>");


//PUSH () AGREGA UN ELEMENTO AL ARRAY AL FINAL DE LA LISTA.
// let resultado = nombres.push ("juan", "roberto");
// document.write (nombres + "<br>");
// document.write (resultado);

//REVERSE () INVIERTE EL ORDEN DE LOS ELEMENTOS DE UN ARRAY.
// let resultado = nombres.reverse (); 




// let numeros = [3,4,5,1,2,6];
// let nombres = ["carlos", "pedro", "manzana", "monitor", "zapatos"];


//UNSHIFT () AGREGA UNO O MAS ELEMENTOS DE AL INICIO DEL ARRAY, Y DEVUELVE LA NUEVA 
//LONGITUD DEL ARRAY.

// let resultado = numeros.unshift (0,1,2);
// document.write (numeros)


//SORT () ORDENA LOS ELEMENTOS DE UN ARRAY LOCALMENTE Y DEVUELVE EL ARRAAY ORDENADO ALFABETICAMENTE.

// let resultado = numeros.sort ();

// let resultado = nombres.splice(-1, 3, "carlos", "silvana"); //Para eliminar el Ultimo: -1
// document.write (nombres);

//SPLICE () SI DESEO AGREGAR AL FINAL DEL ARRAY, INDICAR POSICION -1, y eliminando ese ultimo array:

// let resultado = numeros.splice (-1, 1, "7", "8")
// document.write (numeros)



                     //MÉTODOS ACCESORES

                     

//JOIN () UNE TODOS LOS ELEMENTOS DE UNA MATRIZ (U OBJETO SIMILAR)
//EN UNA CADENA Y LA DEVUELVE.

// document.write (nombres + "<br>");
// let resultado = nombres.join (" - ");
// document.write (resultado)

 
// document.write (nombres + "<br>");
// let resultado = nombres.join ("<br> elemento: ");
// document.write ("elemento: " + resultado)


//SLICE () DEVUELVE UNA PARTE DEL ARRAY DENTRO DE UN NUEVO ARRAY EMPEZANDO 
//POR EL INICIO HASTA EL FIN (SIN INCLUIRLO).

// document.write (numeros + "<br>");
// let resultado = numeros.slice (0, 3); ////
// document.write (resultado);


// document.write (numeros + "<br>");
// let resultado = numeros.slice (0, -1);
// document.write (resultado);

// document.write (numeros + "<br>");
// let resultado = numeros.slice (0);
// document.write (resultado);


//IDEM a metodos de cadena: toString(), inexOf(), lastIndexOf(); includes()


                       //MÉTODOS DE REPETICION (BUCLES)


//filter () CREA UN NUEVO ARRAY CON TODOS LOS ELEMENTOS QUE CUMPLAN LA CONDICION.
//a diferencia que en forEach, con filter podemos agregar una condicion.


let numeros = [3,4,5,1,2,6]; 
let nombres = ["carlos", "pedro", "manzana", "monitor", "zapatos"];


// nombres.filter (nombres => document.write (nombres + "<br>"));
// //ó con funcion flecha:
// nombres.filter (
//     (nombre) => {
//         document.write (nombre + "<br>")
//     }
// )
// //ó con function
// nombres.filter (function(nombre) {
//     document.write (nombre + "<br>")
// })

let resultado = nombres.filter (nombres => nombres.length > 6);
document.write (resultado)



//forEach () (IGUAL A FILTER)EJECUTA LA FUNCION INDICADA UNA VEZ POR CADA ELEMENTO DEL ARRAY.


// nombres.forEach (function(nombre) {
//     document.write (nombre + "<br>")
// })



//.Map()



