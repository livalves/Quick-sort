var array = [];

var btnInserir = document.querySelector('#inserir');
btnInserir.addEventListener("click", function(){
    inserirElemento();
});

function inserirElemento() {
    var input = parseInt(document.getElementById("inputNumeros").value);
    array.push(input);
 
    document.querySelector("#inputNumeros").value = "";
    document.querySelector("#initNumeros").value = array.join(', ');
}

var btnOrdenar = document.querySelector('#ordenar');
btnOrdenar.addEventListener("click", function(){
    var inputOrdenado = document.querySelector("#orderNumeros");
    var arrayOrdenado = quicksort(array);
    inputOrdenado.value = arrayOrdenado.join(', '); 
});

function quicksort(arrayInicial) {
    if(arrayInicial.length === 0) return [];
    if(arrayInicial.length === 1) return arrayInicial;

    var pivor = arrayInicial[0];

    var menores = arrayInicial.filter(num => num < pivor);
    var igual = arrayInicial.filter(num => num === pivor);
    var maiores = arrayInicial.filter(num => num > pivor);

    return quicksort(menores).concat(igual).concat(quicksort(maiores));
}

