const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const num = document.querySelector(".num");
const addToCart = document.querySelector('.addtocart');

let a = 0;

const bigImages = [
    "/images/image-product-1.jpg",
    "/images/image-product-2.jpg",
    "/images/image-product-3.jpg",
    "/images/image-product-4.jpg"
];

const fisrtThumbnail = document.getElementById('thumbnail');
const secondThumbnail = document.getElementById('second-thumbnail');
const thirdThumbnail = document.getElementById('third-thumbnail');
const fourthThumbnail = document.getElementById('fourth-thumbnail');

const visualProducts = document.querySelector('.bigger');
const carrito = document.querySelector('.cart-chart');
const emptyCar = document.querySelector('.empty-car');
const car = document.querySelector('.cart');



plus.addEventListener("click", ()=>{
    a++;
    num.innerText = a;
});

minus.addEventListener("click", ()=>{
    if(a > 0){
        a--;
        num.innerText = a;
    }
});


addToCart.addEventListener("click", function(){
    if (a > 0) {
        // if my no. of items' bigger than 1, we can add it to the cart
        // Create a div, add him a class, and append it to the cart
        const btnCarrito = document.createElement('div');
        btnCarrito.classList.add('btn-carrito');
        const contCarrito = document.createElement('div');
        contCarrito.classList.add('cont-carrito');

        //adding the number of products above the cart 
        //styled with CSS
        const notif = document.createElement('div');
        notif.classList.add('notif');
        notif.innerHTML = `<p>${a}</p>`;
        car.appendChild(notif);

        contCarrito.innerHTML = `<img class="added-image" src="/images/image-product-1-thumbnail.jpg">
        <p class="shop-txt">Fall Limited Edition Sneakers $125.00 x
         ${a} <span class="b-txt">$${125 * a}.00</span></p>
         <img class="delete" src="/images/icon-delete.svg">`
        btnCarrito.innerHTML = `<button class="check-btn">Checkout</button>`;
        carrito.appendChild(contCarrito);
        carrito.appendChild(btnCarrito);

        emptyCar.style.display = 'none';
    }
})

const thumbnails = document.querySelector('.img-items');
const firstThumbnail = document.querySelector('.img-item');
let secondSibling = firstThumbnail.nextElementSibling;
let thirdSibling = secondSibling.nextElementSibling;
let fourthSibling = thirdSibling.nextElementSibling;

//firstThumbnail.classList.add('img-item');

//firstThumbnail.classList.remove('img-item');
secondSibling.classList.remove('img-item');
thirdSibling.classList.remove('img-item');
fourthSibling.classList.remove('img-item');

thumbnails.addEventListener('click', function(e){
    console.log(e.target.getAttribute('id') + ' is clicked');
    const target = e.target;
    if (target.matches('#thumbnail')){
        imgsDOM = `<img id="thumbnail" 
        src="${bigImages[0]}">`;
        visualProducts.innerHTML = imgsDOM;
        firstThumbnail.classList.add('img-item');
    } else if (target.matches('#second-thumbnail')) {
        imgsDOM = `<img id="thumbnail" 
        src="${bigImages[1]}">`;
        visualProducts.innerHTML = imgsDOM;
        firstThumbnail.classList.remove('img-item');
        secondSibling.classList.add('img-item');
    } else if (target.matches('#third-thumbnail')) {
        imgsDOM = `<img id="thumbnail" 
        src="${bigImages[2]}">`;
        visualProducts.innerHTML = imgsDOM;
        firstThumbnail.classList.remove('img-item');
        secondSibling.classList.remove('img-item');
        thirdSibling.classList.add('img-item');
    } else {
        imgsDOM = `<img id="thumbnail" 
        src="${bigImages[3]}">`;
        visualProducts.innerHTML = imgsDOM;
        firstThumbnail.classList.remove('img-item');
        secondSibling.classList.remove('img-item');
        thirdSibling.classList.remove('img-item');
        fourthSibling.classList.add('img-item');
    }
   
})






// function clickImage(){
//     fisrtThumbnail.style.border = '3px solid hsl(26, 100%, 55%)';
//     imgsDOM = '';
//     imgsDOM = `<img class="thumbnail" id="thumbnail" src="${bigImages[0]}">`;
//     visualProducts.innerHTML = imgsDOM;
// }

// fisrtThumbnail.addEventListener("click", clickImage())

// // fisrtThumbnail.addEventListener("click", function(){
// //     fisrtThumbnail.style.border = '3px solid hsl(26, 100%, 55%)';
// //     imgsDOM = '';
// //     imgsDOM = `<img class="thumbnail" id="thumbnail" src="${bigImages[0]}">`;
// //     visualProducts.innerHTML = imgsDOM;
// // })

// secondThumbnail.addEventListener("click", function(){
//     secondThumbnail.style.border = '3px solid hsl(26, 100%, 55%)';
//     imgsDOM = `<img class="thumbnail" id="thumbnail" src="${bigImages[1]}">`;
//     visualProducts.innerHTML = imgsDOM;
// })







//I need to link each image with its correspondent bigger image
//I need to display the image we click
//add a border to the thumbnail we click
//opacity to 20% on the thumbnail we click