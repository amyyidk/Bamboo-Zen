let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarCarrito(nombre, precio) {
  carrito.push({nombre, precio});
  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert("Producto agregado 🛒");
}

function eliminarProducto(index) {
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

function mostrarCarrito() {
  let lista = document.getElementById("lista");
  let total = 0;

  if (!lista) return;

  lista.innerHTML = "";

  carrito.forEach((producto, index) => {
    let li = document.createElement("li");

    li.innerHTML = `
      ${producto.nombre} - $${producto.precio}
      <button onclick="eliminarProducto(${index})">❌</button>
    `;

    lista.appendChild(li);
    total += producto.precio;
  });

  document.getElementById("total").textContent = total;
}

mostrarCarrito();