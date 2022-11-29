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

//TO DISPLAY THE LIGHTBOX
const lightbox = document.querySelector('#Lightbox');
const slideImg = document.querySelector('.bigger');
const closeLightbox = document.querySelector('.close');

    
 slideImg.addEventListener('click', function(){
    lightbox.style.display = 'block';
})

closeLightbox.addEventListener('click', function(){
    lightbox.style.display = 'none';
})
//LIGHTBOX

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

//event delegation by targeting the parent
thumbnails.addEventListener('click', function(e){
    console.log(e.target.getAttribute('id') + ' is clicked');
    const target = e.target;
    //targeting the thumbnails one by one and applying style
    if (target.matches('#thumbnail')){
        //this image comes from the array of images to show the product in big
        imgsDOM = `<img id="thumbnail" 
        src="${bigImages[0]}">`;
        visualProducts.innerHTML = imgsDOM;
        secondSibling.classList.remove('img-item');
        thirdSibling.classList.remove('img-item');
        fourthSibling.classList.remove('img-item');
        firstThumbnail.classList.add('img-item');
    } else if (target.matches('#second-thumbnail')) {
        imgsDOM = `<img id="thumbnail" 
        src="${bigImages[1]}">`;
        visualProducts.innerHTML = imgsDOM;
        firstThumbnail.classList.remove('img-item');
        thirdSibling.classList.remove('img-item');
        fourthSibling.classList.remove('img-item');
        secondSibling.classList.add('img-item');
    } else if (target.matches('#third-thumbnail')) {
        imgsDOM = `<img id="thumbnail" 
        src="${bigImages[2]}">`;
        visualProducts.innerHTML = imgsDOM;
        firstThumbnail.classList.remove('img-item');
        secondSibling.classList.remove('img-item');
        fourthSibling.classList.remove('img-item');
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

var slideIndex = 1;
showSlides(slideIndex);

const nextImg = document.querySelector('.next');
const prevImg = document.querySelector('.previous');

const firstThumbnailLbx = document.querySelector('.img-lightbox');
const secondThumbnailLbx = firstThumbnailLbx.nextElementSibling;
const thirdThumbnailLbx = secondThumbnailLbx.nextElementSibling;
const fourthThumbnailLbx = thirdThumbnailLbx .nextElementSibling;

nextImg.addEventListener('click', function(){
    showSlides(slideIndex += 1);
});

prevImg.addEventListener('click', function(){
    showSlides(slideIndex -= 1);
    //Running the function and substracting one so we can go backwards
});

function currentSlide(n) {
    showSlides(slideIndex = n);
}

firstThumbnailLbx.addEventListener('click', ()=>{
    currentSlide(1);
});

secondThumbnailLbx.addEventListener('click', ()=>{
    currentSlide(2);
});

thirdThumbnailLbx.addEventListener('click', ()=>{
    currentSlide(3);
});

fourthThumbnailLbx.addEventListener('click', ()=>{
    currentSlide(4);
});


function showSlides(n){
    let i;
    //bringing the images i showcase in the lightbox
    let slides = document.getElementsByClassName('slide');
    //thumbnails in the lightbox
    let thmbsImgs = document.getElementsByClassName('thumbnail-lb');
    console.log(slides);
    console.log(thmbsImgs);

    if (n > slides.length){
        slideIndex = 1;
    } //if our parameter(number of clicks) arrives til be bigger than the lenght (last image) return to one
    if(n < 1) {
        slideIndex = slides.length;
    } //if our click wants to go to less than one, start showing the images again(slides.lenght)
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";

    for (i = 0; i < thmbsImgs.length; i++) {
        thmbsImgs[i].className = thmbsImgs[i].className.replace(" active", "");
    }//iterate through the thumbnails and add/delete a class to show them or unshow them
    
    thmbsImgs[slideIndex-1].className += " active";
}

if(window.innerWidth < 376){
    slideImg.addEventListener('click', function(){
        lightbox.style.display = 'none';
    })

    let mobilePrev = document.createElement('a');
    let mobileNext = document.createElement('a');

    visualProducts.append(mobilePrev);
    visualProducts.append(mobileNext);
    mobilePrev.innerHTML = '&#10094;';
    mobileNext.innerHTML = '&#10095;';
    

    mobilePrev.classList.add('arrowslide');
    mobileNext.classList.add('arrowslide');

    console.log(mobileNext);
}


    


//I need to link each image with its correspondent bigger image
//I need to display the image we click
//add a border to the thumbnail we click
//opacity to 20% on the thumbnail we click