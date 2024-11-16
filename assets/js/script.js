const precio = 400000;
let cantidad = 0;
let total = 0;

let botonMas = document.querySelector(".btnSumar");
let botonMenos = document.querySelector(".btnRestar");

let cantidadSpan = document.querySelector(".cantidad");
let totalSpan = document.querySelector(".valor-total");
let precioSpan = document.querySelector(".precio-inicial");

totalSpan.innerHTML = total;
precioSpan.innerHTML = precio;

botonMas.addEventListener("click", function () {
  cantidad++;
  cantidadSpan.innerHTML = cantidad;
  total = precio * cantidad;
  totalSpan.innerHTML = total;
});

botonMenos.addEventListener("click", function () {
  if (cantidad > 0) {
    cantidad--;
    cantidadSpan.innerHTML = cantidad;
    total = precio * cantidad;
    totalSpan.innerHTML = total;
  }
});
