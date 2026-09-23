
// ------------------------------------------------- COCINA -----------------------------------------------------------------------
// Gestion de cocina
let inventario = [];

/*  AGREGAR PRODUCTOS */
// Le agregamos 'precio' aquí para que la caja y el cliente no marquen undefined
function agregar(nombre, precio, stock, categoria ){
    const nuevoProducto = {nombre: nombre, precio: precio, stock: stock, categoria: categoria};
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
            console.log(`Nombre: ${producto.nombre}, Precio: $${producto.precio}, Stock: ${producto.stock}, Categoria: ${producto.categoria}`);
        })

    }
}

function editar(Enombre, Estock, Ecategoria, Eprecio){
    const producto = inventario.find(item => item.nombre == Enombre);

    if (!producto) {
        console.log("No se encuentra ningun objeto con ese nombre\n NOTA: Checa mayusculas, minusculas");
        return;
    }
    producto.stock = Estock !== undefined ? Estock : producto.stock;
    producto.categoria = Ecategoria !== undefined ? Ecategoria : producto.categoria;
    producto.precio = Eprecio !== undefined ? Eprecio : producto.precio;
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

function Baratito(limitePrecio = 50) {
    const baratos = inventario.filter(p => p.precio < limitePrecio);

    console.log(`\n--- PRODUCTOS BARATOTOTOTOES (Menos de $${limitePrecio}) ---`);
    if (baratos.length === 0) {
        console.log("No se encontraron productos tan bajos de precios");
    } else {
        baratos.forEach(p => {
            console.log(`- ${p.nombre} | $${p.precio.toFixed(2)} | Cat: ${p.categoria}`);
        });
    }
    return baratos;
}

function caros(limitePrecio = 100) {
    const caros = inventario.filter(p => p.precio >= limitePrecio);

    console.log(`\n--- PRODUCTOS PREMIUM ($${limitePrecio} o más) ---`);

    if (caros.length === 0) {
        console.log("No hay productos tan caros\nPERO si quieres puedes pagar esa misma cantidad por un producto mas barato (andale)");
    } else {
        caros.forEach(p => {
            console.log(`- ${p.nombre} | $${p.precio.toFixed(2)} | categoria: ${p.categoria}`);
        });
    }

    return caros;
}