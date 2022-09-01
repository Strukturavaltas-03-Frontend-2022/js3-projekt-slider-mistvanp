
let imagesAreaImages = document.querySelectorAll('.images-area img');
let imagesAreaFirstImage = document.querySelector('.images-area .firstImage');
let previousBtn = document.querySelector('.previous-btn');
let nextBtn = document.querySelector('.next-btn');
let paginationArea = document.querySelector('.pagination-area');
let currentImageCount = 1;
let sliderController;
let createPaginationSpans;

previousBtn.addEventListener('click', previousImage);
nextBtn.addEventListener('click', nextImage);



function previousImage() {

  if(currentImageCount === 1){
    return false;
  }else{
    currentImageCount--;
    sliderController();
  };
};


function nextImage() {
  if(currentImageCount === imagesAreaImages.length){
    return false;
  }else{
    currentImageCount++;
    sliderController();
  };
};

(function createPaginationSpans(){
  for(var i = 0; i < imagesAreaImages.length; i++){
    let paginationSpan = document.createElement('span');
    paginationArea.appendChild(paginationSpan)
  };
})();


(sliderController = function (){
  let paginationCircls = document.querySelectorAll('.pagination-area span');
  removeAllActive(paginationCircls);
  activeButton();
  let currentImageMinusOne = currentImageCount - 1;
  paginationCircls[currentImageMinusOne].classList.add('active');
  imagesAreaFirstImage.style.marginLeft = `-${600 * currentImageMinusOne}px`;
  console.log(600 * currentImageMinusOne);
})();

function removeAllActive(targetElement){
  for(var i = 0; i < targetElement.length; i++){
    targetElement[i].classList.remove('active');
  };
};

function activeButton() {
  currentImageCount === 1 ? 
  previousBtn.classList.add('disabled') : 
  previousBtn.classList.remove('disabled');
  currentImageCount === imagesAreaImages.length ? 
  nextBtn.classList.add('disabled') : 
  nextBtn.classList.remove('disabled');
};


setInterval(() => {
  if(currentImageCount != imagesAreaImages.length){
    currentImageCount++;
    sliderController();
  }else{
    currentImageCount = 1;   
    sliderController();
  };
}, 3000);
