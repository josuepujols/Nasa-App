
//Codigo general 
//array de usuarios 
const users = [

    {
        user: "Josue",
        token: "Josue2002"
    },
    {
        user: "Victor",
        token: "Victor2003"
    },
    {
        user: "Eleiker",
        token: "Eleiker2001"
    },
    {
        user: "Jose",
        token: "Jose2002"
    },
    {
        user: "Gabriel",
        token: "Gabriel2002"
    },
    {
        user: "VictorCid",
        token: "VictorCid2002"
    },
    {
        user: "Cristian",
        token: "Cristian2002"
    }
    
];


//Lanzar evento para iniciar sesion
document.getElementById('boton-login').addEventListener('click',() => {
    iniciar_sesion();
});


const input_user = document.getElementById('inputEmail4');
input_user.addEventListener('input', () => {
    hide_alert();
});

const input_token = document.getElementById('inputEmail4_2');
input_token.addEventListener('input', () => {
    hide_alert();
});


//Funcion para iniciar sesion
const iniciar_sesion = ()=>  {
    let flag = true;
    const user_text = document.getElementById('inputEmail4').value.trim();
    const user_token = document.getElementById('inputEmail4_2').value.trim();

    //Validacion de los datos
    for (let i = 0; i < users.length; i++) {
        if (user_text.toLowerCase() == users[i].user.toLowerCase() && user_token == users[i].token) {
            hide_alert();
            window.location.href = "home.html";
            localStorage.setItem('user', users[i].user);
            break;
        }
        else {
            if (flag && user_validation(user_text, user_token)) {
                show_alert();
                flag = false;
            }
        }
    }

}

//Saber si el usuario o el token existen 
const user_validation = (user, token) => {
    let name_array = [];
    let token_array = []; 
    for (let i = 0; i < users.length; i++) {
        const user_validacion_name = users[i].user;
        const user_validacion_token = users[i].token;

        name_array.push(user_validacion_name);
        token_array.push(user_validacion_token);        
    }
    
    if (!name_array.includes(user) || !token_array.includes(token)) {
        return true;
    }
    else {
        return false;
    }

}


const show_alert = (user_text, user_token) => {
    const alert = document.getElementById('alert');
    alert.hidden = false;
}   



const hide_alert = () => {
    const alert = document.getElementById('alert');
    alert.hidden = true;
}



