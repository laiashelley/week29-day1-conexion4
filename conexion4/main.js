// Selecciona una API pública de tu gusto, como ReqRes, y prueba a realizar un CRUD HTTP con ella (GET, POST, PUT, DELETE, PATCH).

const placeholder = "https://reqres.in/api/users?page=2";

// leer API
fetch(placeholder)
.then((response) => response.json())
.then((data) => {
    console.log(data)
})
.catch((err) => console.log(err));


//creo un usuario más
fetch(placeholder, { 
    method: "POST",
    headers: { 
        "Content-type": "application/json"
    },
    body: JSON.stringify ({ 
        avatar: "https://reqres.in/img/faces/8-image.jpg",
        email: "patata@patata.com",
        first_name: "Laia",
        id: 8,
        last_name: "Galvez"
    }) 
})
.then((response) => response.json())
.then((data) => {
    console.log(data)
})
.catch((err) => console.log(err));

const placeholder2 = "https://reqres.in/api/users/2";

// nodifico un usuario
fetch(placeholder2, { 
    method: "PUT", 
    headers: { 
        "Content-type": "application/json"
    },
    body: JSON.stringify ({ 
        avatar: "https://reqres.in/img/faces/8-image.jpg",
        email: "patata.lawson@reqres.in",
        first_name: "Miquel",
        last_name: "Miguelin"
    }) 
})
.then((response) => response.json())
.then((data) => {
    console.log(data)
})
.catch((err) => console.log(err));

const placeholder3 = "https://reqres.in/api/users/2";

// elimino un usuario
fetch(placeholder, { 
    method: "DELETE", 
    headers: { 
        "Content-type": "application/json"
    },
    body: JSON.stringify({
        avatar: "https://reqres.in/img/faces/8-image.jpg",
        email: "patata@patata.com",
        first_name: "Laia",
        id: 8,
        last_name: "Galvez"
    })
})
.then((response) => response.json())
.then((data) => {
    console.log(data)
})
.catch((err) => console.log(err));

