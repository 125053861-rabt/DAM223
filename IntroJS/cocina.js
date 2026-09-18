let inventario = [];


/*  AGREGAR PRODUCTOS */
function agregar(nombre, stock, categoria ){
    const nuevoProducto = {nombre: nombre, stock: stock, categoria: categoria};
    inventario.push(nuevoProducto);
    console.log("Producto nuevo agregado :D");
};

/* LISTAR PRODUCTOS */
function listar() {
    if(inventario.length == 0) {
        console.log("No hay nada, agrega algo");
        return;
    }
    if(inventario.length >=1) {
        console.log("Lista de productos");
        inventario.forEach(producto => {
            console.log(`Nombre: ${producto.nombre}, Stock: ${producto.stock}, Categoria: ${producto.categoria}`);
        })

    }
}

function editar(Enombre,Estock,Ecategoria){
    const producto = inventario.find(item => item.nombre == Enombre);

    if (!producto) {
        console.log("No se encuentra ningun objeto con ese nombre\n NOTA: Checa mayusculas, minusculas");
        return;
    }
    producto.stock = Estock !== undefined ? EStock : producto.stock;
    producto.categoria = Ecategoria !== undefined ? Ecategoria : producto.categoria;
    console.log("Producto actualizado correctamente");
}

// Eliminar producto

function eliminar(nombreEnc){
    const index = inventario.findIndex(item => item.nombre == nombreEnc)

    if (index === -1) {
        console.log("No se encontro nadota");
        return;
    }

    const eliminado = inventario.splice(index,1);
    console.log(`Producto eliminado: ${eliminado[0].nombre}`)
}