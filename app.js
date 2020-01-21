'use strict';

//Global access point
var products = document.getElementById('products');
var imageOne = document.getElementById('img1');
var imageTwo = document.getElementById('img2');
var imageThree = document.getElementById('img3');

var leftIndex = null;
var middleIndex = null;
var rightIndex = null;

var votes = 0;
var maxVotes = 5;

// storage array for product "object" instances

Product.everyImage = [];

//creating the random number function generator
function randomProduct(){
  var randomNumber = Math.floor(Math.random() * Product.everyImage.length);
  return randomNumber;
}


//constructor function

function Product(name, image){
  this.name = name;
  this.image = image;
  this.clicked = 0;
  this.views = 0;
  // adding new product to the storage array
  Product.everyImage.push(this);
}

//Render Function

function renderProduct(){
  do{
    leftIndex = randomProduct();
    rightIndex = randomProduct();
    middleIndex = randomProduct();
  } while
  (leftIndex === rightIndex || rightIndex === middleIndex || leftIndex === middleIndex);
  imageOne.src = Product.everyImage[leftIndex].image;
  imageTwo.src = Product.everyImage[middleIndex].image;
  imageThree.src = Product.everyImage[rightIndex].image;

};

//building the event handler
var handleClickonProduct = function (event){
  var productClicked = event.target.id;

  if(productClicked !== 'products'){
    votes++;
  }
  if(productClicked === 'img1'){
    Product.everyImage[leftIndex].clicked++;
  }else if(productClicked === 'img2'){
    Product.everyImage[rightIndex].clicked++;
  }else if (productClicked === 'img3'){
    Product.everyImage[middleIndex].clicked++;
  }
  renderProduct();
};

//building new instances for constructor function

//instantiation of new objects
new Product ('bag', '/img/bag.jpg');
new Product ('banana', '/img/banana.jpg');
new Product ('bathroom', '/img/bathroom.jpg');
new Product ('boots', '/img/boots.jpg');
new Product ('breakfast', '/img/breakfast.jpg');
new Product ('bubblegum', '/img/bubblegum.jpg');
new Product ('chair', '/img/chair.jpg');
new Product ('cthulhu', '/img/cthulhu.jpg');
new Product ('dog-duck', '/img/dog-duck.jpg');
new Product ('dragon', '/img/dragon.jpg');
new Product ('pen', '/img/pen.jpg');
new Product ('pet-sweep.jpg', '/img/pet-sweep.jpg');
new Product ('scissors', '/img/scissors.jpg');
new Product ('shark', '/img/shark.jpg');
new Product ('sweep', '/img/sweep.jpg');
new Product ('tauntaun', '/img/tauntaun.jpg');
new Product ('unicorn', '/img/unicorn.jpg');
new Product ('usb', '/img/usb.gif');
new Product ('water-can', '/img/water-can.jpg');
new Product ('wine-glass', '/img/wine-glass.jpg');

// building the event listener

products.addEventListener('click', handleClickonProduct);


console.log(Product.everyImage);
console.log(randomProduct());
renderProduct();