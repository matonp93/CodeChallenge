document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("boton");

  boton.addEventListener("click", () => {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;

    // URL a la que quieres enviar la solicitud POST
    const url = "https://jsonplaceholder.typicode.com/users";

    // Datos que quieres enviar en el cuerpo de la solicitud (puede ser un objeto o una cadena JSON)
    let datos = JSON.stringify({
      nombre,
      apellido,
      fechaNacimiento,
    });

    fetch(url, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: "POST",
      body: datos,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => alert("Error al enviar"));
  });
});
