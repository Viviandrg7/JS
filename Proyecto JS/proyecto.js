//Menu del Correo
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
//Menu mobile
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
//Menu carrito
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
//Productos
const contenedorProductos = document.querySelector('.cards-container');

//Menu del Correo
menuEmail.addEventListener('click', toggleDesktopMenu);
function toggleDesktopMenu(){
    aside.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

//Menu mobile
menuHamIcon.addEventListener('click', toogleMobileMenu);
function toogleMobileMenu(){
    aside.classList.add('inactive');
    mobileMenu.classList.toggle('inactive')
}

//Menu carrito
menuCarritoIcon.addEventListener('click', toogleCarritoAside);
function toogleCarritoAside(){
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    aside.classList.toggle('inactive')
}

//productos
//Este es un array
const productList = [];
//con esto mandamos información al array
productList.push({
names: 'Máscara',
  price: '150',
  image: 'https://m.media-amazon.com/images/I/61K6cQhw4EL._AC_UL320_.jpg'
})
productList.push({
  names: 'Crema Hidratante',
  price: '350',
  image: 'https://m.media-amazon.com/images/I/61VIt2hm6hL._AC_UL320_.jpg'
})
productList.push({
  names: 'Kit para cejas',
  price: '250',
  image: 'https://m.media-amazon.com/images/I/61AC+EndktL._AC_UL320_.jpg'
})
productList.push({
    names: 'Set de Brochas',
    price: '550',
    image: 'https://m.media-amazon.com/images/I/61uzz44IpoL._AC_UL320_.jpg'
  })
  productList.push({
    names: 'Polvo Coty',
    price: '120',
    image: 'https://m.media-amazon.com/images/I/71le2ZYj97L._AC_UL320_.jpg'
  })
  productList.push({
    names: 'Toallitas',
    price: '125',
    image: 'https://m.media-amazon.com/images/I/71oWnakbENL._AC_UL320_.jpg'
  })




//con esto accedemos a cada producto del array el of trae el elemento del array que indequemos
for (product of productList){
    producto = `<div class="product-card">
    <img src=${product.image} alt="">
    <div class="product-info">
      <div>
        <p>${product.price}/p>
        <p>${product.names}</p>
      </div>
      <figure>
        <img src="./icons/bt_add_to_cart.png" alt="">
      </figure>
    </div>
  </div> `
  contenedorProductos.innerHTML += producto;

}



/*prueba loca
const body = document.querySelector('body');
body.addEventListener('click', bodyPrueba);
function bodyPrueba(){
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
} */

