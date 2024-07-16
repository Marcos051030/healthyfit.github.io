// Definición de productos en diferentes categorías
const products = {
    polos: [
        { id: 0, image: '/images/prenda1.jpg', title: 'Polo 1', price: 30 },
        { id: 1, image: '/images/prenda2.jpg', title: 'Polo 2', price: 35 },
        { id: 2, image: '/images/prenda3.jpg', title: 'Polo 3', price: 25 },
        { id: 3, image: '/images/prenda4.png', title: 'Polo 1', price: 30 },
        { id: 4, image: '/images/prenda5.jpg', title: 'Polo 2', price: 35 },
        { id: 5, image: '/images/prenda6.png', title: 'Polo 3', price: 25 },
        { id: 6, image: '/images/prenda7.png', title: 'Polo 1', price: 30 },
        { id: 7, image: '/images/prenda8.png', title: 'Polo 2', price: 35 },
        { id: 8, image: '/images/prenda9.png', title: 'Polo 3', price: 25 },
        { id: 9, image: '/images/prenda10.png', title: 'Calzado 1', price: 50 },
        { id: 10, image: 'image/calzado2.jpg', title: 'Calzado 2', price: 60 },
        { id: 11, image: 'image/calzado3.jpg', title: 'Calzado 3', price: 55 },
        { id: 12, image: 'image/calzado1.jpg', title: 'Calzado 1', price: 50 },
        { id: 13, image: 'image/calzado2.jpg', title: 'Calzado 2', price: 60 },
        { id: 14, image: 'image/calzado3.jpg', title: 'Calzado 3', price: 55 },
        { id: 15, image: 'image/calzado1.jpg', title: 'Calzado 1', price: 50 },
        { id: 16, image: 'image/calzado2.jpg', title: 'Calzado 2', price: 60 },
        { id: 17, image: 'image/calzado3.jpg', title: 'Calzado 3', price: 55 },
    ],
    calzados: [
        { id: 18, image: 'image/calzado1.jpg', title: 'Calzado 1', price: 50 },
        { id: 19, image: 'image/calzado2.jpg', title: 'Calzado 2', price: 60 },
        { id: 20, image: 'image/calzado3.jpg', title: 'Calzado 3', price: 55 },
        { id: 21, image: 'image/calzado1.jpg', title: 'Calzado 1', price: 50 },
        { id: 22, image: 'image/calzado2.jpg', title: 'Calzado 2', price: 60 },
        { id: 23, image: 'image/calzado3.jpg', title: 'Calzado 3', price: 55 },
        { id: 24, image: 'image/calzado1.jpg', title: 'Calzado 1', price: 50 },
        { id: 25, image: 'image/calzado2.jpg', title: 'Calzado 2', price: 60 },
        { id: 26, image: 'image/calzado3.jpg', title: 'Calzado 3', price: 55 },
    ],
    herramientas: [
        { id: 27, image: 'image/herramienta1.jpg', title: 'Herramienta 1', price: 70 },
        { id: 28, image: 'image/herramienta2.jpg', title: 'Herramienta 2', price: 80 },
        { id: 29, image: 'image/herramienta3.jpg', title: 'Herramienta 3', price: 75 },
        { id: 30, image: 'image/herramienta1.jpg', title: 'Herramienta 1', price: 70 },
        { id: 31, image: 'image/herramienta2.jpg', title: 'Herramienta 2', price: 80 },
        { id: 32, image: 'image/herramienta3.jpg', title: 'Herramienta 3', price: 75 },
        { id: 33, image: 'image/herramienta1.jpg', title: 'Herramienta 1', price: 70 },
        { id: 34, image: 'image/herramienta2.jpg', title: 'Herramienta 2', price: 80 },
        { id: 35, image: 'image/herramienta3.jpg', title: 'Herramienta 3', price: 75 },
    ],
    destacados: [
        { id: 36, image: 'image/herramienta1.jpg', title: 'Herramienta 1', price: 70 },
        { id: 37, image: 'image/herramienta2.jpg', title: 'Herramienta 2', price: 80 },
        { id: 38, image: 'image/herramienta3.jpg', title: 'Herramienta 3', price: 75 },
        { id: 39, image: 'image/herramienta1.jpg', title: 'Herramienta 1', price: 70 },
        { id: 40, image: 'image/herramienta2.jpg', title: 'Herramienta 2', price: 80 },
        { id: 41, image: 'image/herramienta3.jpg', title: 'Herramienta 3', price: 75 },
    ]
};

// Variable para almacenar la categoría actual
let currentCategory = 'polos';

// Array para almacenar los productos agregados al carrito
let cart = [];

// Función para renderizar productos en la página
function renderProducts(category) {
    // Selecciona el elemento con id 'root' donde se insertarán los productos
    document.getElementById('root').innerHTML = category.map((item) => {
        const { image, title, price } = item;
        // Genera el HTML para cada producto
        return (
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image} />
                </div>
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>S/. ${price}.00</h2>
                    <button onclick='addtocart(${item.id})'>+</button>
                </div>
            </div>`
        );
    }).join(''); // Une todos los elementos del array en un solo string
}

// Evento que se ejecuta cuando se carga el DOM (Document Object Model)
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products[currentCategory]); // Renderiza productos al cargar la página
});

// Función para agregar productos al carrito
function addtocart(id) {
    // Encuentra el producto por su ID en todas las categorías de productos
    const product = Object.values(products).flat().find(item => item.id === id);
    cart.push({ ...product }); // Añade el producto al carrito
    displaycart(); // Actualiza la visualización del carrito
}

// Función para eliminar un elemento del carrito
function delElement(index) {
    cart.splice(index, 1); // Elimina el elemento del carrito
    displaycart(); // Actualiza la visualización del carrito
}

// Función para mostrar el carrito de compras
function displaycart() {
    let total = 0; // Variable para calcular el total de la compra
    document.getElementById("count").innerHTML = cart.length; // Actualiza el contador de elementos en el carrito
    if (cart.length === 0) {
        // Si el carrito está vacío, muestra un mensaje
        document.getElementById('cartItem').innerHTML = "Tu carrito está vacío";
        document.getElementById("total").innerHTML = "S/. 0.00"; // Muestra total como 0
    } else {
        // Si hay elementos en el carrito, muestra cada elemento y calcula el total
        document.getElementById("cartItem").innerHTML = cart.map((item, index) => {
            const { image, title, price } = item;
            total += price; // Suma el precio al total
            document.getElementById("total").innerHTML = "S/. " + total + ".00"; // Actualiza el total en la interfaz
            // Genera HTML para cada elemento del carrito
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image} />
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>S/. ${price}.00</h2>
                    <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
                </div>`
            );
        }).join(''); // Une todos los elementos del carrito en un solo string
    }
}

// Función para simular la compra de los productos en el carrito
function buyItems() {
    if (cart.length > 0) {
        alert("¡Gracias por su compra!"); // Muestra un mensaje de agradecimiento por la compra
        cart = []; // Vacía el carrito después de la compra
        displaycart(); // Actualiza la visualización del carrito
    } else {
        alert("El carrito está vacío."); // Muestra un mensaje si el carrito está vacío al intentar comprar
    }
}

// Función para buscar productos por nombre
function buscarProductos() {
    const input = document.getElementById('searchInput').value.toLowerCase(); // Obtiene el valor del input de búsqueda y convierte a minúsculas
    const filteredProducts = products[currentCategory].filter(product => product.title.toLowerCase().includes(input)); // Filtra productos por título que coincida con la búsqueda
    renderProducts(filteredProducts); // Renderiza los productos filtrados
}

// Función para cambiar la categoría de productos mostrados
function changeCategory(category) {
    currentCategory = category; // Actualiza la categoría actual
    renderProducts(products[currentCategory]); // Renderiza productos de la nueva categoría
}

// Agrega un evento al input de búsqueda para ejecutar la búsqueda al escribir
document.getElementById('searchInput').addEventListener('input', buscarProductos);

