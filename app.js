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
var maxVotes = 25;

// storage arrays

var historyArray = ['', '', ''];

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
// Need to populate new array and add render to new array to shuffle images per click
function renderProduct(){
  do{
    leftIndex = randomProduct();
    rightIndex = randomProduct();
    middleIndex = randomProduct();
  } while
  (leftIndex === rightIndex || rightIndex === middleIndex || leftIndex === middleIndex || historyArray.includes(leftIndex) || historyArray.includes(rightIndex) || historyArray.includes(middleIndex));


  imageOne.src = Product.everyImage[leftIndex].image;
  Product.everyImage[leftIndex].views++;
  imageTwo.src = Product.everyImage[middleIndex].image;
  Product.everyImage[rightIndex].views++;
  imageThree.src = Product.everyImage[rightIndex].image;
  Product.everyImage[middleIndex].views++;

  historyArray[0] = leftIndex;
  historyArray[1] = rightIndex;
  historyArray[2] = middleIndex;
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
  if(votes === maxVotes){
    products.removeEventListener('click', handleClickonProduct);
    alert('Thanks for voting!'); //stops after 25

    for(var num = 0; num < Product.everyImage.length; num++){
      var productMath = Product.everyImage[num];
      console.log(`${productMath.name} recieved ${productMath.clicked} votes with ${productMath.views} views.`);
    }
  }else{
    renderProduct();
    //console.log(productMath);
  }
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
new Product ('sweep', '/img/sweep.png');
new Product ('tauntaun', '/img/tauntaun.jpg');
new Product ('unicorn', '/img/unicorn.jpg');
new Product ('usb', '/img/usb.gif');
new Product ('water-can', '/img/water-can.jpg');
new Product ('wine-glass', '/img/wine-glass.jpg');

// building the event listener

products.addEventListener('click', handleClickonProduct);


console.log(Product.everyImage);
console.log(randomProduct());

var button = document.getElementById('populate');
button.addEventListener('click', makeChart); //naming issue?
function makeChart(){
  var labelData = [];
  var clickData = [];
  var viewData = [];
  for (var i = 0; i < Product.everyImage.length; i++){
    labelData.push(Product.everyImage[i].name);
    clickData.push(Product.everyImage[i].clicked);
    viewData.push(Product.everyImage[i].views);
  }


  var buildChart = document.getElementById('busChart').getContext('2d');

  new Chart(buildChart, {
    type: 'bar',
    data: {
      labels: labelData,
      datasets: [{
        label: '# of Clicks',
        data: clickData,
        backgroundColor: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      }, {
        label: '# of Views',
        data: viewData,
        backgroundColor: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      }],
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
          },
        }],
      },
    },
  });
}