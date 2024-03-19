function hola() {
    let inputs = document.getElementsByClassName("input");
    for (let i = 0; i < inputs.length; i++) {
        let input = inputs[i];
        if (input.value > 10 || input.value < 0 || input.value === "") {
            alert("¡Error en la nota!");
            input.style.backgroundColor = "red";
        }
    }
}


function promedio() {
    let num = 0;    
    let prom = document.getElementsByClassName("input");
    for (let i = 0; i < prom.length; i++) {
        let input = prom[i];
        num += parseInt(input.value);
    }
    console.log(num ,"num")
    let promedio = num/3;
    console.log(promedio)
}

function nota(){
    let num=0;
    let nota = document.getElementsByClassName("input");
    for (let i = 0; i < nota.length; i++) {
        let input = nota[i];
        if(num < parseInt(input.value)){
            num=parseInt(input.value);
        }
    }
    console.log(num);
}