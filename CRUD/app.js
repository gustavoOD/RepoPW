//Variables globales

const formularioUI = document.querySelector('#formulario');
const listaActividadesUI = document.querySelector('#listaCompra');

let arrayActividades = [];


//Funciones

const crearItem = (compra) => {

    let item = {
        compra: compra,
        estado: false
    
    }

    arrayActividades.push(item);

    return item;

}

const GuardarDB = () => {

    localStorage.setItem('Lista', JSON.stringify(arrayActividades))

    PintarDB();
        
}

const PintarDB = () => {

    listaActividadesUI.innerHTML = ' ';

    arrayActividades = JSON.parse(localStorage.getItem('Lista'));

    if(arrayActividades === null){
        arrayActividades = [];
    }else{

       arrayActividades.forEach(element => {
            
        if(element.estado){
            listaActividadesUI.innerHTML += `<div class="alert alert-success" role="alert" ><b>${element.compra}</b> - ${element.estado}<span class="float-right"><i class="material-icons">done</i><i class="material-icons">clear</i></span></div>`
        }else{
            listaActividadesUI.innerHTML += `<div class="alert alert-danger" role="alert" ><b>${element.compra}</b> - ${element.estado}<span class="float-right"><i class="material-icons">done</i><i class="material-icons">clear</i></span></div>`
        } 

            
       });
    }
}


const eliminarDB = (compra) =>{

    let indexArray;

    arrayActividades.forEach((elemento, index) => {

        if(elemento.compra === compra ){
            indexArray = index;
        }
    });

    arrayActividades.splice(indexArray,1);
    GuardarDB();
}


editarDB = (compra) => {

    let indexArray = arrayActividades.findIndex((elemento)=>elemento.compra === compra
    );

    console.log(arrayActividades[indexArray]);
    arrayActividades[indexArray].estado = true;


}


//Eventos
formularioUI.addEventListener('submit', e => {

    e.preventDefault();
    let actividadUI = document.querySelector('#actividad').value;

    crearItem(actividadUI);
    GuardarDB();

    formularioUI.reset();

})

document.addEventListener('DOMContetLoaded', PintarDB);

listaActividadesUI.addEventListener('click', (e) => {

    e.preventDefault();

    if(e.target.innerHTML === 'done'  || e.target.innerHTML === 'clear'){
       const txt = e.path[1].childNodes[1].innerHTML;
        
        if(e.target.innerHTML === 'clear'){
            
            eliminarDB(txt);

        }
        if(e.target.innerHTML === 'done'){

            editarDB(txt);

        }


        }
});