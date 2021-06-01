

//Evento load 
window.addEventListener('load', () => {
    show_user();
    traer_datos();
});


//Funcion para mostrar el usuario loggeado 
const show_user = () => {
    //Obtenemos el user que esta en el localstorage 
    const user = localStorage.getItem('user');
    //Creamos un nodo de html 
    const user_text = document.createTextNode(user);

    const user_label = document.getElementById('navbarDropdown');
    //Agregamos el hijo
    user_label.appendChild(user_text);
}


//Funcionalidad de cerrar sesion 
const boton_close = document.getElementById('boton-close');
boton_close.addEventListener('click', () => {
    window.location.href = "index.html";
});


//Metodo para traer los datos desde el api 
const traer_datos = () => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=z5fFpjcSweRK61T36o2xGEFUym1jRIgeDT5g2F6m')
    .then(response => response.json())
    .then(data => mostrar_datos(data));
}


//Incrustar los datos en la web
const mostrar_datos = (datos) => {

    const table_rows = document.getElementsByClassName('datos');

    let text_node;

    //Recorremos todas las filas de la tabla y insertamos la informacion
    for (let i = 0; i < table_rows.length; i++) {
        if (i == 0) {
            text_node =document.createTextNode(datos.title);
            table_rows[i].appendChild(text_node);
        }
        else if (i == 1) {
            text_node =document.createTextNode(datos.date);
            table_rows[i].appendChild(text_node);
        }
        else if (i == 2) {
            text_node =document.createTextNode(datos.copyright);
            table_rows[i].appendChild(text_node);
        }
        else if (i == 3) {
            text_node =document.createTextNode(datos.explanation);
            table_rows[i].appendChild(text_node);
        }
    }

    //Colocamos la imagen 
    const imagen = document.getElementById('imagen');
    imagen.setAttribute('src', datos.url);
}

