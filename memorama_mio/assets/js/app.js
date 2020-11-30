//Lets detect a change in the button and the variable
//Detect the button
var button = d3.select("#start");

//function to randomize an array
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

//See if someone press the button and go to function Handle_click
button.on("click", handleClick);


//Function that get activated if some click a button
function handleClick(){
    //Print in console that some one click the button
    console.log("Someone prees the button");

    //Create empety arrays
    cartas1 = []
    cartas2 = []
    data.forEach((element,index) => {
        console.log(element);
        cartas1.push(element);
        cartas2.push(element);
        console.log(index);
    });

    console.log(cartas1);
    console.log(cartas2);

    shuffleArray(cartas1);
    shuffleArray(cartas2);
    
    nuevoArray(cartas1, cartas2);

    
};

function nuevoArray(cartas1a, cartas2a){
    var cartas = cartas1.concat(cartas2);

    console.log(cartas)
    return(cartas)
};


//Definimos un contador
var contador = 0

//Definimos las funciones para mostrar la nueva imagen
function gC1(cartas){
    var inputElement = d3.select("#imagen");
    // Get the value property of the input element
   var inputValue = inputElement.property("value");
   // Get the value property of the input element
   var cartas = nuevoArray();
   var image = cartas[inputValue]
   console.log(image)
   //change the image
   var imagen = d3.select("img")
   imagen.select("#imag1").remove();

}

function girarCarta(){
    console.log("gira una carta");

       
}



    
