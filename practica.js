`use strict`

let producto = {
    descripcion: "Salchicha",
    precio: 3,
    stock: 8,
    verStock: function () {
        alert(this.stock);
    },
    updateStock: function (nuevoStock) {
        this.stock = nuevoStock;
    },
}

producto.verStock();
producto.updateStock (prompt("Ingresar nuevo stock:"));
producto.verStock();