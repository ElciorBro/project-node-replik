// const productList = [
//     {
//       title: 'Café Colombiano',
//       category: 'Café',
//       description: 'Café 100% colombiano, con aroma y sabor característicos.',
//       price: '1200',
//       image: 'IMG/coffe-product1.jpg',
//       available: 10,
//       calification: 4.8
//     },
//     { // cafe-espresso.jpg
//       title: 'Café Espresso',
//       category: 'Café',
//       description: 'Café Espresso intenso y aromático, perfecto para empezar el día.',
//       price: '1500',
//       image: 'IMG/coffe-product1.jpg',
//       available: 8,
//       calification: 4.5
//     },
//     { // cafe-latte.jpg
//       title: 'Café Latte',
//       category: 'Café',
//       description: 'Café Latte suave con leche vaporizada, ideal para disfrutar en cualquier momento.',
//       price: '1800',
//       image: 'IMG/coffe-product1.jpg',
//       available: 6,
//       calification: 4.7
//     },
//     { // tea-green.jpg
//       title: 'Té Verde Orgánico',
//       category: 'Té',
//       description: 'Té verde orgánico con propiedades antioxidantes y refrescantes.',
//       price: '900',
//       image: 'IMG/coffe-product1.jpg',
//       available: 15,
//       calification: 4.2
//     },
//     { // tea-earl-grey.jpg
//       title: 'Té Negro Earl Grey',
//       category: 'Té',
//       description: 'Té negro aromatizado con bergamota, para un sabor único y clásico.',
//       price: '1000',
//       image: 'IMG/coffe-product1.jpg',
//       available: 12,
//       calification: 4.6
//     },
//     { // cookies-chocolate.jpg
//       title: 'Galletas de Chocolate',
//       category: 'Comestible',
//       description: 'Deliciosas galletas de chocolate con trozos de chocolate belga.',
//       price: '800',
//       image: 'IMG/coffe-product1.jpg',
//       available: 20,
//       calification: 4.9
//     },
//     { // cake-carrot.jpg
//       title: 'Pastel de Zanahoria',
//       category: 'Comestible',
//       description: 'Pastel húmedo de zanahoria con crema de queso, irresistible.',
//       price: '1800',
//       image: 'IMG/coffe-product1.jpg',
//       available: 5,
//       calification: 4.4
//     },
//     {  // muffin-blueberry.jpg
//       title: 'Muffin de Arándanos',
//       category: 'Comestible',
//       description: 'Muffin esponjoso con arándanos frescos, para un antojo dulce.',
//       price: '1200',
//       image: 'IMG/coffe-product1.jpg',
//       available: 8,
//       calification: 4.7
//     },
//     { // cafe-cold-brew.jpg
//       title: 'Café Frío',
//       category: 'Café',
//       description: 'Café frío con hielo y un toque de sirope, refrescante y delicioso.',
//       price: '2000',
//       image: 'IMG/coffe-product1.jpg',
//       available: 4,
//       calification: 4.3
//     },
//     { // cafe-mocha.jpg
//       title: 'Café Mocha',
//       category: 'Café',
//       description: 'Café Mocha con chocolate y crema batida, una delicia indulgente.',
//       price: '2200',
//       image: 'IMG/coffe-product1.jpg',
//       available: 7,
//       calification: 4.6
//     },
//     { //croissant-chocolate.jpg
//       title: 'Croissant de Chocolate',
//       category: 'Comestible',
//       description: 'Croissant hojaldrado relleno de chocolate suave y fundente.',
//       price: '1500',
//       image: 'IMG/coffe-product1.jpg',
//       available: 10,
//       calification: 4.8
//     },
//     { //toast-avocado
//       title: 'Tostadas de Aguacate',
//       category: 'Comestible',
//       description: 'Tostadas de aguacate fresco con tomate y especias, opción saludable y deliciosa.',
//       price: '1600',
//       image: 'IMG/coffe-product1.jpg',
//       available: 6,
//       calification: 4.5
//     },
//     { // capuccino.jpg
//       title: 'Capuchino',
//       category: 'Café',
//       description: 'Capuchino cremoso con espuma de leche y un toque de canela.',
//       price: '1900',
//       image: 'IMG/coffe-product1.jpg',
//       available: 9,
//       calification: 4.7
//     }
// ];

function createProductCard(product) {

  // Crear el contenedor principal de la card
  const colDiv = document.createElement('div');
  colDiv.className = 'col-md-6 col-lg-3';

  // Crear la card
  const cardDiv = document.createElement('div');
  cardDiv.className = 'card mb-3';

  // Crear la imagen
  const img = document.createElement('img');
  img.src = product.image;
  img.className = 'card-img-top';
  img.alt = `producto: ${product.title}`;

  // Crear el cuerpo de la card
  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';

  // Crear el título
  const cardTitle = document.createElement('h4');
  cardTitle.className = 'card-title';
  cardTitle.textContent = product.title;

  // Crear la descripción
  const cardText = document.createElement('p');
  cardText.className = 'card-text';
  cardText.textContent = product.description;

  // Crear el precio
  const cardPrice = document.createElement('p');
  cardPrice.innerHTML = `<strong>Precio:</strong> $${product.price}`;

  // Crear la valoración
  const cardRating = document.createElement('p');
  cardRating.innerHTML = `<strong>Valoración:</strong> ${'★'.repeat(Math.floor(product.calification))}${product.calification % 1 !== 0 ? '☆' : ''}`;

  // Crear el botón "Ver Producto"
  const viewButton = document.createElement('a');
  viewButton.href = '#';
  viewButton.className = 'btn btn-primary btn-sm';
  viewButton.id = 'product-button';
  viewButton.textContent = 'Ver Producto';
  viewButton.addEventListener('click', () => {
    viewButton.classList.add('seleccionado')
  })

  // Crear el botón "Agregar al Carrito"
  const addButton = document.createElement('button');
  addButton.className = 'btn btn-success btn-sm';
  addButton.textContent = 'Agregar al Carrito';

  // Añadir los elementos al cuerpo de la card
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(cardPrice);
  cardBody.appendChild(cardRating);
  cardBody.appendChild(viewButton);
  cardBody.appendChild(addButton);

  // Añadir la imagen y el cuerpo a la card
  cardDiv.appendChild(img);
  cardDiv.appendChild(cardBody);

  // Añadir la card al contenedor principal
  colDiv.appendChild(cardDiv);

  return colDiv;
}

async function renderProductCards() {
  const res = await fetch(`http://localhost:8080/shop`);
  const products = await res.json();

  const container = document.getElementById('card-container');

  // Early Return
  if (!container) {
    console.error('El contenedor #product-container no existe en el DOM.');
    return;
  }

  // container.innerHTML = '';

  // const fragment = document.createDocumentFragment()

  products.forEach(product => {
    const card = createProductCard(product);
    container.appendChild(card);
  });
}

// Ejecutar la función para renderizar las cards
renderProductCards();
